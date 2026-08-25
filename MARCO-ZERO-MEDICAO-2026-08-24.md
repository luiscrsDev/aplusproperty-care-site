# Marco zero da medição — 24 de agosto de 2026

**Leia isto antes de comparar qualquer número de conversão com o histórico.**

Nesta data as três campanhas pagas foram pausadas e a medição de conversões foi
corrigida. Todo dado anterior a hoje está inflado por um erro de configuração.
Números de antes e depois **não são comparáveis**.

---

## 1. O que estava errado

Uma ação de conversão chamada **"Enviar formulário de lead"** (código
`7602899215`, criada em 07/05/2026) media, na verdade, **carregamento da página
`/lp`** — não envio de formulário. Estava marcada como ação principal, com
contagem "Todas as conversões" e janela de 90 dias.

Resultado: cada visitante que abria a landing virava um "lead" no relatório.

Somava-se a isso uma segunda ação legítima (`aplusproperty.care (web)
form_submit`, código `7609914384`) que media o envio real. O Ads somava as duas.

### O tamanho do erro

Período de 26/07 a 24/08/2026:

| Métrica | Valor |
|---|---:|
| Cliques | 647 |
| Impressões | 9.339 |
| Custo | US$ 775,11 |
| CTR | 6,93% |
| CPC médio | US$ 1,20 |
| **Conversões reportadas pelo Ads** | **42** |
| **Leads que realmente chegaram** | **3** |
| CPA reportado | US$ 18,45 |
| **CPA real** | **US$ 258,37** |
| Taxa de conversão real | 0,46% |

Benchmark de referência para serviços residenciais locais: 2% a 8%. A 2%
seriam 13 leads; a 4%, 26.

### Por campanha

| Campanha | Cliques | % do total | CPC | Custo | Conv. reportadas |
|---|---:|---:|---:|---:|---:|
| 50% Off First Month (PMax) | 613 | 95% | US$ 0,71 | US$ 435,34 | 28 |
| APLUS — EV Charger — Search | 18 | 3% | US$ 12,40 | US$ 223,19 | 10 |
| APLUS — Maintenance Plans — Search | 16 | 2% | US$ 7,29 | US$ 116,57 | 4 |

**O CPC de US$ 0,71 da PMax é o dado mais revelador.** As campanhas de Search da
mesma conta, no mesmo mercado e período, pagaram US$ 7,29 e US$ 12,40 — de 10 a
17 vezes mais. Diferença dessa magnitude dentro da mesma conta indica que a PMax
não estava comprando pesquisa: estava comprando Display e YouTube, onde o clique
é barato porque a intenção é quase nula e boa parte é toque acidental em app
mobile. É comportamento conhecido de Performance Max em conta pequena sem feed
de produtos: o Google escoa o orçamento pelo inventário mais barato disponível.

---

## 2. O que foi corrigido em 24/08

### No Google Ads

| Ação de conversão | Antes | Depois |
|---|---|---|
| `Enviar formulário de lead` (mede pageview de `/lp`) | Principal | **Secundária** |
| `aplusproperty.care (web) form_submit` (mede envio real) | Principal, 90 dias | Principal, **4 semanas** |

A ação secundária continua registrando, mas não entra na coluna "Conversões" nem
alimenta otimização de lances.

Nota de precisão: a janela ficou em "4 semanas" (28 dias) e não nos 30 dias
pretendidos — o dropdown do Ads selecionava uma linha abaixo do clique. A
diferença é irrelevante na prática.

### As três campanhas foram pausadas

| Campanha | Orçamento |
|---|---|
| APLUS — Maintenance Plans — Search | US$ 5/dia |
| APLUS — EV Charger — Search | US$ 10/dia |
| 50% Off First Month (PMax) | US$ 15/dia |

Pausa é reversível: selecionar as três e Editar → Ativar.

### No código (commit `02f31ed`)

`app/api/contact/route.ts` retornava `{ ok: true }` em quatro caminhos de falha
silenciosa: env vars do Supabase ausentes, insert falhando, chave do Resend
ausente e envio rejeitado. Como o cliente dispara o evento `form_submit` ao
receber `res.ok`, um lead perdido ainda gerava conversão reportada.

Agora a rota rastreia os dois canais e retorna 502 quando nenhum funciona. Também
verifica o corpo da resposta do Resend — o SDK reporta rejeição de API (domínio
não verificado, destinatário inválido) em `error` em vez de lançar exceção, então
o `try/catch` anterior não distinguia envio rejeitado de envio entregue.

Testado em produção após o deploy: `200 {"ok":true}` e lead entregue.

---

## 3. Ao retomar as campanhas

**Recomendação:** começar só com Search, orçamento pequeno, PMax desligada até
haver volume de conversão real suficiente para o algoritmo aprender. A PMax
consumiu 56% da verba gerando tráfego sem intenção.

**Antes de religar, resolver:**

- Aviso "Nova forma de pagamento exigida" que apareceu no painel do Ads
- Google Business Profile: conectar perfis sociais e adicionar fotos (o perfil
  já marca "informações completas" e tem 11 avaliações 5,0 — ativo subutilizado)

**Ao ler os primeiros relatórios:** a queda nas conversões em relação ao
histórico é esperada e desejável. É a primeira medição honesta, não uma piora.

---

## 4. Correções de site aplicadas no mesmo ciclo

Para contexto, já que afetam o desempenho das campanhas:

- **Bug da landing v2 (commit `4cade59`)** — um catch-all no `vercel.json`
  redirecionava todo path de `v2.aplusproperty.care` antes do middleware,
  anulando os rewrites de `/lp` e `/ev`. Todo clique pago caía na home genérica
  em vez da landing de conversão. Corrigido em 27/07.
- **URLs finais dos anúncios** apontavam para `v2.aplusproperty.care`; agora vão
  direto para `aplusproperty.care/lp` e `/lp/ev`.
- **Violação de política** no anúncio de planos (o título "Cancel Anytime" foi
  classificado como "Moradia na publicidade personalizada", o que bloqueia
  segmentação por CEP nos EUA) — trocado por "No Contract".
- **Expansão de URL final da PMax** desativada; estava gerando anúncios para
  páginas em `v2.`.
- **Crédito fiscal federal de EV (30C)** expirou em 30/06/2026 e era anunciado no
  presente em 6 lugares do site, incluindo duas FAQ que alimentam schema. Todos
  reescritos.

Detalhamento em `auditoria-campanhas-2026-07-27.md` e
`auditoria-seo-2026-08-12.md`.

---

## 5. Lição metodológica

A divergência foi detectada em **27/07** — a auditoria de campanhas registrou
"20 conversões no Ads vs 51 eventos principais no GA4" e recomendou reconciliar
antes de qualquer decisão de orçamento baseada em CPA. O item foi classificado
como impacto médio, ficou em quinto no plano de ação e nunca foi retomado.

Foram quatro semanas de trabalho de SEO construído sobre uma base de medição que
já havia sido marcada como não confiável. Quando um relatório aponta que a
métrica base pode estar errada, esse item vira prioridade um — não cinco.
