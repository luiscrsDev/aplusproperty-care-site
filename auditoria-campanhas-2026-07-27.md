# Auditoria de campanhas — APLUS Property Care

**Data:** 27 de julho de 2026
**Conta Google Ads:** 106-780-6098 (apluspropertycare5@gmail.com)
**Período analisado:** 27/06 – 26/07/2026 (Ads e GSC) · 29/06 – 26/07/2026 (GA4, janela de 28 dias)
**Fontes:** Google Ads, Google Analytics 4 (propriedade aplusproperty.care), Google Search Console (sc-domain)

---

## Resumo executivo

Em 30 dias a conta gastou **US$ 739,73** e registrou **20 conversões**, a um CPA médio de **US$ 36,99**.

O número esconde uma divisão limpa: **uma campanha carrega tudo e duas não entregam nada.**

- A Performance Max ("50% Off First Month") produziu **as 20 conversões** a um CPA de **US$ 22,74**.
- As duas campanhas de Search consumiram **US$ 284,99 — 38,5% da verba — com zero conversões.**

A causa raiz das duas campanhas zeradas não é criativo nem público: **os três anúncios apontavam para `v2.aplusproperty.care`, o subdomínio cuja landing page estava quebrada** (corrigido hoje, ver `fix(seo)` commit `4cade59`). O GA4 confirma: nas 386 sessões do período, a landing `/lp` **não recebeu uma única sessão**.

---

## 1. Desempenho por campanha (30 dias)

| Campanha | Tipo | Orçam./dia | Impr. | Cliques | CTR | CPC | Custo | Conv. | CPA |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 50% Off First Month | Performance Max | US$ 15 | 3.534 | 312 | 8,83% | US$ 1,46 | US$ 454,74 | 20 | US$ 22,74 |
| APLUS — EV Charger | Search | US$ 10 | 223 | 12 | 5,38% | **US$ 16,91** | US$ 202,94 | **0** | — |
| APLUS — Maintenance Plans | Search | US$ 5 | 554 | 9 | 1,62% | US$ 9,12 | US$ 82,05 | **0** | — |
| **Total** | | US$ 30 | **4.311** | **333** | **7,72%** | US$ 2,22 | **US$ 739,73** | **20** | **US$ 36,99** |

*Totais conferidos: a soma das linhas bate exatamente com o total reportado pelo Google Ads.*

### Leitura

**A PMax é a única campanha saudável.** CPC de US$ 1,46 e CPA de US$ 22,74 são bons para serviços residenciais em Miami. Ela também é a única gastando o orçamento (US$ 454,74 de um teto de US$ 450 — está no limite, sinal de que há demanda represada).

**O CPC de US$ 16,91 da campanha de EV é o número mais alarmante da conta.** É 11,6× o CPC da PMax. Doze cliques custaram US$ 202,94 e nenhum converteu. Mesmo em um nicho caro como instalação de carregador EV, esse valor indica lances desalinhados ou concorrência em termos genéricos demais.

**As campanhas de Search não gastam o orçamento** (US$ 82 de US$ 150; US$ 203 de US$ 300) porque estão marcadas como "Qualificada (limitada)" — falta de palavras-chave relevantes e, no caso da Maintenance Plans, uma violação de política.

---

## 2. Causa raiz: os anúncios apontavam para o subdomínio quebrado

URLs finais encontradas na conta:

| Anúncio | URL final configurada |
|---|---|
| APLUS — Maintenance Plans | `https://v2.aplusproperty.care/?utm_source=google&utm_...` |
| APLUS — EV Charger | `https://v2.aplusproperty.care/services/ev-charger-installation` |
| PMax (expansão de URL) | `https://v2.aplusproperty.care/services/landscaping` (gerada pelo Google) |

Até hoje, uma regra catch-all no `vercel.json` redirecionava **todo** path de `v2.` para o domínio principal antes do middleware rodar. Os rewrites que serviriam `/lp` e `/lp/ev` nunca executavam.

**Consequência prática:** o clique no anúncio de planos — que promete "50% Off First Month" — caía na home institucional, que não menciona a oferta em lugar nenhum. O clique no anúncio de EV caía na página de serviço, não na landing de conversão `/lp/ev`.

### Confirmação no GA4 — páginas de destino (28 dias)

| Página de destino | Sessões | Eventos principais |
|---|---:|---:|
| `/` | 317 (82,1%) | 45 |
| `/services/ev-charger-installation` | 18 | **0** |
| `/services` | 17 | 2 |
| `/services/landscaping` | 5 | 0 |
| `/maintenance-plans/premium` | 3 | 0 |
| **`/lp` (landing de conversão)** | **ausente do relatório** | — |

A landing paga não aparece entre as 21 páginas de destino registradas no período. Todo o tráfego pago — 315 das 386 sessões — desembarcou na home.

**Status:** corrigido hoje. `v2.aplusproperty.care/` agora serve `/lp` e `v2.aplusproperty.care/ev` serve `/lp/ev`, ambos com rewrite (URL limpa, `noindex`, canonical correto). A URL de EV, porém, continua apontando para a página de serviço — precisa ser trocada manualmente na conta (ver ações).

---

## 3. Violação de política na campanha de planos

O anúncio "APLUS — Maintenance Plans" está com **1 violação: "Moradia na publicidade personalizada"** (Housing in personalized advertising).

O título sinalizado é **"Cancel Anytime"** — o Google interpretou o termo como promoção de moradia/locação. Nos EUA e Canadá, anúncios nessa categoria **não podem usar segmentação por CEP**, o que restringe severamente uma operação que vende justamente por bairro (Miami Beach, Bal Harbour, Surfside, Brickell).

Isso explica o CTR de 1,62% — o pior da conta, contra 8,83% da PMax.

APLUS vende manutenção residencial, não moradia. A classificação é contestável.

---

## 4. Qualidade da medição

| Métrica | Google Ads | GA4 | Divergência |
|---|---:|---:|---|
| Cliques / sessões pagas | 333 | 315 | −5,4% (dentro do normal) |
| Conversões / eventos principais | 20 | 51 | **+31 eventos** |

A perda de 5,4% entre cliques e sessões é esperada (abandono antes do carregamento, bloqueadores).

Já a diferença entre 20 conversões no Ads e 51 eventos principais no GA4 é grande demais para ser ruído. As causas prováveis são: mais de um evento marcado como principal no GA4 (form_submit, clique em telefone, clique em WhatsApp) enquanto o Ads importa só um; ou dupla contagem de `form_submit`. **Vale reconciliar antes de tomar qualquer decisão de orçamento baseada em CPA**, porque os dois sistemas estão contando coisas diferentes.

---

## 5. Orgânico (Search Console, 28 dias)

| Métrica | Valor |
|---|---:|
| Cliques | 6 |
| Impressões | 1.090 |
| CTR | 0,6% |
| Posição média | 35,1 |

Posição média 35 significa página 4 dos resultados — praticamente invisível. O site tem 1.090 impressões e converte 0,6% delas em cliques.

**O padrão nas consultas é revelador:** as buscas que geram impressão são de alta intenção comercial e o site não pontua em nenhuma.

| Consulta | Cliques | Impressões |
|---|---:|---:|
| a plus property | 1 | 8 |
| a plus pest control | 0 | 55 |
| service plus ac & heating | 0 | 45 |
| residential outlets added services in miami | 0 | 31 |
| electrical outlet installation in miami, florida | 0 | 31 |
| panel and meter installation in miami, fl | 0 | 25 |
| ev chargers company miami | 0 | 22 |
| residential pool services in bal harbour | 0 | 21 |
| ev charger installation miami | 0 | 20 |
| home repair bal harbour fl | 0 | 16 |

Note que **"ev charger installation miami" e "ev chargers company miami" aparecem organicamente com 42 impressões combinadas e zero cliques** — exatamente os termos pelos quais a campanha paga está desembolsando US$ 16,91 por clique. Há uma oportunidade de conteúdo aqui que reduziria a dependência do pago.

---

## 6. Ações recomendadas

Em ordem de impacto sobre o retorno:

**1. Trocar as URLs finais das duas campanhas de Search** *(impacto alto, esforço baixo)*
- Maintenance Plans: `https://v2.aplusproperty.care/?utm_...` → `https://aplusproperty.care/lp?utm_...`
- EV Charger: `https://v2.aplusproperty.care/services/ev-charger-installation` → `https://aplusproperty.care/lp/ev?utm_...`

Apontar direto para o domínio canônico elimina o hop de redirect (que custa latência em cada clique pago) e leva o visitante à landing de conversão em vez da página institucional.

**2. Corrigir a violação de política** *(impacto alto, esforço baixo)*
Substituir o título "Cancel Anytime" por algo sem conotação de moradia — "No Contract", "Month to Month" ou "Cancel Any Month". Salvar o anúncio dispara nova revisão automática. Isso libera a segmentação por CEP.

**3. Revisar os lances da campanha de EV** *(impacto alto)*
US$ 16,91 por clique sem conversão não se sustenta. Vale definir um CPA-alvo, restringir as palavras-chave de correspondência ampla e considerar pausar a campanha até que a landing `/lp/ev` esteja recebendo o tráfego.

**4. Considerar realocar a verba de Search para a PMax** *(impacto médio)*
Ao CPA atual da PMax (US$ 22,74), os US$ 284,99 gastos sem retorno nas campanhas de Search equivaleriam a **cerca de 12 conversões adicionais**. Essa é uma projeção, não uma garantia — a PMax pode ter rendimentos decrescentes ao escalar. Mas dado que ela está batendo no teto de orçamento diário, há espaço para testar um aumento antes de manter as duas campanhas zeradas.

**5. Reconciliar o tracking** *(impacto médio, pré-requisito para o resto)*
Verificar quais eventos estão marcados como principais no GA4 e qual está sendo importado para o Ads. Sem isso, todo cálculo de CPA fica sobre base incerta.

**6. Desativar a expansão de URL final na PMax** *(impacto médio)*
O Google está gerando anúncios para páginas de serviço no subdomínio v2 (`/services/landscaping`). Restringir a expansão mantém o tráfego pago na landing desenhada para converter.

**7. Trabalhar o orgânico nos termos de EV** *(impacto de médio prazo)*
Já existe o post `ev-charger-installation-cost-miami-2026`. Há impressões orgânicas nesses termos e nenhum clique — otimizar título e meta description dessas páginas é barato comparado a US$ 16,91 por clique.

---

## Observações metodológicas

- As janelas de tempo não são idênticas: Ads e GSC cobrem 27/06–26/07 e 28/06–25/07 respectivamente; o GA4 usa a janela padrão de 28 dias (29/06–26/07). As comparações entre fontes são aproximadas por esse motivo.
- Todos os totais do Google Ads foram reconferidos por soma independente das linhas de campanha e batem exatamente.
- A projeção de 12 conversões no item 4 assume CPA constante, o que raramente se mantém ao escalar orçamento. Trate como ordem de grandeza.
- Os dados do Ads não são em tempo real; conversões podem ser atribuídas retroativamente e alterar levemente os números dos últimos dias.
