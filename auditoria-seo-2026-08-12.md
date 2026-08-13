# Auditoria SEO — APLUS Property Care

**Data:** 12 de agosto de 2026
**Domínio:** aplusproperty.care
**Período dos dados:** 11/05 – 10/08/2026 (Search Console, 3 meses)
**Fontes:** Search Console (propriedade `sc-domain`), código em produção, busca web
**Auditorias anteriores:** `SEO-AUDIT-v2-2026-04-30.md`, `SEO-STATUS-2026-07-16.md`

> **Limitação:** Ahrefs e Supermetrics aparecem entre os conectores disponíveis mas não estão autorizados. Não há volume de busca nem dificuldade de keyword precisos aqui — as estimativas de demanda vêm das impressões reais do GSC, que são um proxy melhor para este site do que volume genérico, mas não substituem uma ferramenta de keyword.

---

## Resumo executivo

> **Correção importante (verificada após a primeira redação):** a versão inicial deste relatório afirmava que quatro páginas em posição top-11 estavam perdendo ~27 cliques por causa dos títulos. **Isso estava errado.** Ao filtrar as consultas página a página no GSC, descobri que a posição média 5,8 é uma média ponderada de centenas de consultas de cauda longa com 1 impressão cada — não há nenhum termo de volume onde essas páginas rankeiem em posição 6 sem receber clique. A seção 1 abaixo foi reescrita. Os problemas de título continuam reais e valem correção, mas o ganho esperado é modesto, não transformador.

O lado técnico está sólido — os fixes de abril e julho continuam valendo, não há regressões, e o schema é mais completo que o da maioria dos concorrentes locais.

**O problema real é mais simples e mais difícil: o site quase não aparece para buscas comerciais não-branded.** Dos 35 cliques em três meses, os únicos identificáveis vêm de gente procurando a própria APLUS. As buscas com intenção de compra — "ev chargers company miami", "electrical outlet installation in miami, florida", "panel and meter installation in miami, fl" — geram impressão em páginas que estão nas posições 33 a 67, ou seja, da quarta à sétima página do Google.

As três prioridades:

1. **Subir as páginas de serviço das posições 33-67** — 1.082 impressões travadas lá. É trabalho de autoridade e link interno, não de título.
2. **Aproveitar o único ativo que já rankeia bem** — o post de custo de EV está em posição 6 e não linka para a página de serviço em posição 33.
3. **Remover a promessa do crédito fiscal de EV, que expirou em 30/06/2026** — o site ainda o anunciava no presente em 6 lugares.

**Avaliação geral: fundação técnica forte, presença orgânica ainda embrionária.** Não há bug grave a consertar; há um trabalho de conteúdo e autoridade que ainda não foi feito.

---

## 1. A "posição 5,8" era uma miragem estatística

| Página | Impressões | Posição média | CTR | Cliques |
|---|---:|---:|---:|---:|
| `/maintenance-plans` | 179 | 5,8 | 0% | 0 |
| `/areas` | 154 | 5,9 | 0% | 0 |
| `/blog/ev-charger-installation-cost-miami-2026` | 73 | 6,0 | 0% | 0 |
| `/services` | 104 | 10,7 | 0% | 0 |

À primeira vista isso parece dinheiro na mesa. Não é. Filtrando o GSC por página:

**`/maintenance-plans`** — 179 impressões no total, mas as consultas visíveis somam **10**. As outras 169 estão anonimizadas pelo Google (consultas raras demais para exibir), o que significa centenas de buscas distintas com 1 impressão cada. Das 9 consultas visíveis, 5 são da marca ("aplus property", "aplusproperties", "a-plus property", "aplus apartments", "aplus home"), uma é busca por um concorrente ("home maintenance service plans rootandpetalhome") e uma é a palavra solta "single".

**`/areas`** — 154 impressões, 14 visíveis. Sete das oito consultas são da marca ou de empresas homônimas ("a plus management llc", "aplus property management").

A posição média de 5,8 é a média de centenas de consultas ultra-específicas onde a página é praticamente o único resultado possível. **Não existe um termo de volume onde essas páginas estejam em posição 6 sem receber clique.** Zero cliques em cauda longa dessa natureza é o resultado esperado, não uma anomalia.

Isso reposiciona o diagnóstico: o problema não é conversão de SERP, é **ausência de presença em buscas comerciais com volume**.

### Ainda assim: marca duplicada e título truncado (confirmado no código, corrigido)

O `app/layout.tsx` define `template: "%s | APLUS Property Care"`. As páginas então acrescentam `| APLUS` por conta própria. Resultado renderizado:

| Página | Título final | Chars |
|---|---|---:|
| `/maintenance-plans` | `Home Maintenance Plans in Miami — From $199/mo \| APLUS \| APLUS Property Care` | 76 |
| `/areas` | `Property Care in Miami Beach, Brickell & Coral Gables \| APLUS \| APLUS Property Care` | 83 |
| `/services` | `Home Maintenance & EV Charger Installation Miami \| APLUS \| APLUS Property Care` | 78 |
| `/blog` | `Miami Home Maintenance Tips & EV Charger Guides \| APLUS \| APLUS Property Care` | 77 |
| `/privacy` | `Privacy Policy — APLUS Property Care \| APLUS Property Care` | 58 |

O Google corta em torno de 60 caracteres. As quatro primeiras são truncadas exatamente na região da marca repetida — o usuário vê "…| APLUS | APLUS…" ou reticências no meio do nome. É um sinal de descuido no exato momento em que o clique é decidido.

**Correção:** remover o sufixo `| APLUS` dos títulos individuais e deixar o template fazer o trabalho. Alvo: 50–57 caracteres antes do sufixo.

Sugestões (contando com o sufixo do template):

| Página | Título proposto | Chars finais |
|---|---|---:|
| `/maintenance-plans` | `Home Maintenance Plans Miami — From $199/mo` | 65 |
| `/areas` | `Home Maintenance Miami Beach, Brickell & Gables` | 69 |
| `/services` | `Home Maintenance & EV Charger Services Miami` | 66 |
| `/blog` | `Miami Home Maintenance & EV Charger Guides` | 64 |

**Aplicado em 12/08:** o template global foi encurtado para `| APLUS` (8 chars em vez de 22) e o sufixo redundante foi removido das páginas. Resultado:

| Página | Antes | Depois |
|---|---:|---:|
| `/areas` | 83 | **55** |
| `/services` | 78 | **52** |
| `/blog` | 77 | **50** |
| `/maintenance-plans` | 76 | **51** |
| `/privacy` | 58 | **22** |

Todas as páginas indexáveis agora cabem no SERP sem truncar. `/lp` e `/lp/ev` seguem acima de 60, mas são `noindex` — não aparecem em busca orgânica.

O ganho esperado é modesto (a maior parte das impressões dessas páginas é cauda longa que não converteria de qualquer jeito), mas o custo foi de 30 minutos e elimina um sinal de descuido.

---

## 2. Fragmentação www vs. apex

| Versão | Cliques | Impressões | Posição |
|---|---:|---:|---:|
| `https://aplusproperty.care/` | 22 | 648 | 13,1 |
| `https://www.aplusproperty.care/` | 8 | 190 | **6,4** |

O Google trata as duas como páginas separadas e **a versão `www` rankeia melhor** — posição 6,4 contra 13,1. A `www` responde por 23% das impressões da home.

Isso acontece apesar do redirect 301 correto em `vercel.json`. Significa que o Google ainda tem a `www` no índice com histórico próprio, e o sinal da home está dividido entre dois hosts em vez de concentrado em um.

**Não é um bug para "consertar" às pressas** — o redirect já está certo e a consolidação acontece sozinha com o tempo. Mas vale confirmar que a `www` não está sendo referenciada em nenhum lugar que reforce o índice: backlinks, perfil do Google Business, redes sociais, assinatura de e-mail, material impresso. Se houver links externos apontando para `www`, essa é a razão da persistência.

**Ação:** auditar as citações externas (Google Business Profile, Instagram, Facebook, diretórios) e padronizar tudo em `https://aplusproperty.care` sem `www`.

---

## 3. Conteúdo desatualizado com risco de credibilidade

O crédito fiscal federal 30C (Alternative Fuel Vehicle Refueling Property Credit) **expirou em 30 de junho de 2026**, por força do One Big Beautiful Bill Act. Hoje é 12 de agosto — expirou há seis semanas.

O site ainda o anuncia em dois lugares, escritos no presente:

**`lib/content/services.ts:56`** — bloco de conteúdo:
> "Federal incentive — 30% back, up to $1,000 — The federal Alternative Fuel Vehicle Refueling Property Credit **covers** 30% of EV charger installation costs up to $1,000, applicable to installs completed by June 30, 2026. **We provide** the documentation you need to claim it on your taxes."

**`lib/content/services.ts:99`** — FAQ:
> "**Can I claim the federal tax credit if you install my charger?** — **Yes.** We provide an itemized invoice and Form 8911 documentation so you can claim 30% back (up to $1,000)…"

O texto menciona a data-limite, então não é literalmente falso. Mas está redigido no presente e a FAQ começa com "Yes" — um leitor de agosto sai com a impressão de que ainda pode reivindicar. Numa página de vendas de serviço, isso é uma promessa implícita sobre dinheiro do cliente.

Há um agravante de SEO: essa FAQ está dentro do `faqSchema()`, então é elegível para rich snippet. O Google pode estar exibindo a resposta obsoleta direto no SERP.

**Ação (alta prioridade, 20 minutos):** reescrever no passado e redirecionar para o que ainda existe — o programa FPL EVolution Home ($31–38/mês), que o próprio texto já cita e continua ativo. Isso transforma uma informação morta em um gancho de venda vivo.

---

## 4. Páginas de serviço: muita impressão, posição ruim

| Página | Impressões | Posição |
|---|---:|---:|
| `/services/ev-charger-installation` | 417 | 33,0 |
| `/services/electrical` | 285 | 51,4 |
| `/services/hvac` | 148 | 53,8 |
| `/services/plumbing` | 83 | 54,0 |
| `/services/pest-control` | 82 | 67,7 |
| `/services/landscaping` | 67 | 49,5 |
| **Total** | **1.082** | |

Mais de mil impressões concentradas em páginas na quarta a sétima página do Google. O conteúdo dessas páginas é bom (a de EV é detalhada e específica de Miami-Dade) — o problema é autoridade e sinal interno, não qualidade.

Note a assimetria: `/services/ev-charger-installation` tem 417 impressões em posição 33, enquanto `/blog/ev-charger-installation-cost-miami-2026` está em **posição 6**. O post do blog rankeia 27 posições acima da página de serviço para o mesmo tema — e os dois não se linkam.

---

## 5. Link building interno: o achado mais barato

Verificado no código:

- **Nenhuma página de serviço linka para um post de blog.** `grep` em `app/services` e `lib/content/services.ts` retorna zero ocorrências de `/blog/`.
- **Nenhuma página de área linka para páginas de serviço.** `lib/content/areas.ts` tem zero ocorrências de `services/`.
- Os posts do blog linkam para fora corretamente (`/services/ev-charger-installation`, `/maintenance-plans`, `/areas/miami-beach`), mas o fluxo é de mão única.
- O único caminho para `/blog` é o Header.

O site tem quatro posts bem escritos que funcionam como ativos de autoridade, e as páginas comerciais não colhem nada disso. Um post em posição 6 deveria estar empurrando autoridade para a página de serviço em posição 33 — e não empurra.

**Ação:** criar links cruzados. Cada página de serviço linka para o post relacionado; cada página de área linka para os 3-4 serviços destacados dela. É edição de conteúdo, não desenvolvimento.

---

## 6. Checklist técnico

| Verificação | Status | Detalhe |
|---|---|---|
| HTTPS | Pass | Sem conteúdo misto |
| robots.txt | Pass | `Allow: /`, host e sitemap declarados |
| sitemap.xml | Pass | Gerado dinamicamente, só URLs canônicas, sem `/lp` nem `/month` |
| Canonical | Pass | Consolidado via `absoluteUrl()` / `BRAND.url` |
| H1 | Pass | Exatamente um por página, nas 16 páginas |
| Alt text em imagens | Pass | Todas as `<Image>` e `<img>` têm `alt` |
| Structured data | Pass | LocalBusiness, Service, FAQPage, BreadcrumbList, AggregateRating |
| Redirects | Pass | `/ev`, `/month`, `/parceria-construtoras`, `/admin-login` — todos 301 |
| `noindex` nas landings pagas | Pass | `/lp` e `/lp/ev` com `robots: { index: false }` e canonical próprio |
| Title tags | **Fail** | Marca duplicada em 5 páginas, 4 truncadas |
| Meta descriptions | Warning | `/services` e `/lp/ev` com 166 chars (limite ~160); `/privacy` com 117 |
| Schema `founder.url` | **Fail** | Aponta para `/about`, que não existe — a home usa `#about` |
| Schema `aggregateRating` | Warning | Declara `ratingCount: 5`; o Google Business Profile tinha 11 avaliações em julho |
| Core Web Vitals | Sem dados | GSC: "sem dados de uso suficientes nos últimos 90 dias" — tráfego baixo demais para o CrUX |
| Link interno serviços → blog | **Fail** | Zero links |
| Link interno áreas → serviços | **Fail** | Zero links |

Dois detalhes sobre o schema:

**`founder.url` aponta para uma página inexistente.** Em `lib/schema.ts:71`, o `url` do Anderson Moraes é `${BRAND.url}/about`. Essa rota não existe — a home usa a âncora `#about`. É um link quebrado dentro do structured data.

**O `aggregateRating` merece cuidado.** Declarar 5,0 com `ratingCount: 5` diretamente no schema, sem as avaliações renderizadas na página, é o padrão que o Google classifica como *self-serving review markup* e pode gerar ação manual. Além disso, o número está desatualizado — o relatório de 16/07 registrou 11 avaliações no perfil. A saída segura é remover o `aggregateRating` do schema e, se quiser rich snippet de avaliação, renderizar os depoimentos reais na página com o markup correspondente.

---

## 7. Panorama de consultas

Top consultas por impressão nos 3 meses:

| Consulta | Cliques | Impressões |
|---|---:|---:|
| residential outlets added services in miami | 0 | 75 |
| service plus ac & heating | 0 | 70 |
| a plus pest control | 0 | 65 |
| electrical outlet installation in miami, florida | 0 | 49 |
| ev chargers company miami | 0 | 45 |
| panel and meter installation in miami, fl | 0 | 43 |
| residential pool services in bal harbour | 0 | 36 |
| aplus properties | 1 | 15 |
| a plus property | 1 | 9 |
| handyman in miami | 1 | 1 |

Dois padrões:

**Os únicos cliques vêm de buscas pela marca.** "aplus properties", "a plus property" e "handyman in miami" — 3 dos 35 cliques. O resto do tráfego vem da home rankeando para termos variados.

**Há confusão de marca custando impressões.** "service plus ac & heating" (70 impressões) e "a plus pest control" (65) são buscas por *outras empresas* com nomes parecidos. São 135 impressões que nunca vão converter. Não é um problema a resolver — é ruído a descontar quando se lê o volume total de impressões do site.

**Os termos de intenção comercial real** — "ev chargers company miami", "electrical outlet installation in miami, florida", "panel and meter installation in miami, fl" — somam 137 impressões com zero cliques, todos em páginas que estão na posição 33-54. Esse é o espaço onde o trabalho de autoridade tem retorno.

---

## 8. Concorrência

O espaço se divide em três grupos, e a APLUS está posicionada num vão entre eles:

| Tipo | Exemplos | Modelo |
|---|---|---|
| Property managers de luxo | Luxury Property Care, Keyrenter Miami West, JMK | Gestão de aluguel + manutenção inclusa |
| Franquias de handyman | Mr. Handyman (Miami-Aventura-Kendall) | Por hora / por chamado, marca nacional |
| Assinaturas de manutenção | TruBlue Home Service Ally (a partir de $59/mês) | Plano recorrente, escopo enxuto |

A APLUS é a única do grupo que combina **assinatura mensal + serviço de concierge + instalação de EV**, com preço muito acima do TruBlue ($199–699 vs. $59). Isso é uma posição defensável, mas o site não está capturando as buscas que a descreveriam.

No EV especificamente há um concorrente estrutural que o próprio site já menciona: o **programa FPL EVolution Home**, que instala carregador Level 2 por $31–38/mês sem custo inicial. Para o cliente que só quer o carregador, é difícil competir em preço — a página de EV faz certo ao vender permitting, garantia e eletricista licenciado em vez de preço.

**Lacunas de conteúdo que os concorrentes cobrem e a APLUS não:**

| Tópico | Por que importa | Formato | Prioridade | Esforço |
|---|---|---|---|---|
| Página `/about` | O schema já aponta para lá e ela não existe; páginas de empresa constroem E-E-A-T, crítico para serviços residenciais (YMYL adjacente) | Página institucional | Alta | Meio dia |
| Comparação plano vs. por chamado | Busca de fundo de funil que o TruBlue e franquias capturam | Página de comparação | Alta | Meio dia |
| Custo de manutenção residencial em Miami | Equivalente ao post de custo de EV, que já rankeia em posição 6 — o formato comprovadamente funciona neste site | Post de blog | Alta | Meio dia |
| Preparação para temporada de furacões | Sazonal (junho–novembro), alta intenção local, a APLUS já entrega isso nos planos | Post + seção de serviço | Média | Meio dia |
| Página de serviço para painel/upgrade elétrico | "panel and meter installation in miami, fl" tem 43 impressões e não há página dedicada | Página de serviço | Média | Meio dia |
| Depoimentos de clientes renderizados | Resolve o problema do `aggregateRating` e melhora conversão | Componente + página | Média | Meio dia |

---

## 9. Plano de ação priorizado

### Quick wins — esta semana

| # | Ação | Impacto | Esforço |
|---|---|---|---|
| 1 | Remover `\| APLUS` dos títulos de `/maintenance-plans`, `/areas`, `/services`, `/blog`, `/privacy`; considerar encurtar o template global para `\| APLUS` | **Alto** — 510 impressões em posição top-11 hoje sem clique | 30 min |
| 2 | Reescrever o bloco e a FAQ do crédito 30C no passado; virar o gancho para o FPL EVolution Home | **Alto** — credibilidade e rich snippet obsoleto | 20 min |
| 3 | Corrigir `founder.url` no schema: `/about` → `/#about` (ou criar a página) | Médio — link quebrado em structured data | 5 min |
| 4 | Cortar meta descriptions de `/services` e `/lp/ev` para ≤160 chars; expandir a de `/privacy` | Baixo | 15 min |
| 5 | Remover `aggregateRating` do schema até haver avaliações renderizadas na página | Médio — evita risco de ação manual | 10 min |
| 6 | Verificar as consultas por trás de `/maintenance-plans` e `/areas` no GSC antes de assumir que o título é a única causa | **Alto** — evita otimizar a coisa errada | 20 min |

### Investimentos estratégicos — este trimestre

| # | Ação | Impacto | Esforço | Depende de |
|---|---|---|---|---|
| 7 | Link building interno: cada serviço → post relacionado; cada área → serviços destacados | **Alto** — transfere autoridade do blog (posição 6) para os serviços (posição 33-54) | 1 dia | — |
| 8 | Criar a página `/about` com bio do Anderson, licenças e histórico | Alto — E-E-A-T, e conserta o schema | Meio dia | #3 |
| 9 | Post "Quanto custa manutenção residencial em Miami" no molde do post de EV | Alto — o formato já provou rankear neste site | Meio dia | — |
| 10 | Auditar e padronizar citações externas em `aplusproperty.care` sem `www` | Médio — consolida o sinal fragmentado da home | Meio dia | — |
| 11 | Página de comparação plano vs. serviço avulso | Médio-alto — fundo de funil | Meio dia | — |
| 12 | Completar o Google Business Profile (sinalizado como incompleto em julho): fotos e redes | Alto para busca local — 11 avaliações 5,0 é um ativo subutilizado | 2 h | — |
| 13 | Renderizar depoimentos reais na página com markup de review | Médio | Meio dia | #5 |

---

## Observações metodológicas

- Os dados do GSC cobrem 11/05 a 10/08/2026, com atraso de ~2 dias na apuração.
- **A primeira versão deste relatório estimava ~27 cliques perdidos por CTR zero em posições top-11. Essa estimativa foi retirada.** Ela aplicava CTRs médios de indústria por posição a uma posição média que, verificada, se revelou composta quase inteiramente de consultas de cauda longa anonimizadas. Aplicar curva de CTR a médias assim produz números inflados — é uma armadilha comum na leitura do GSC e eu caí nela antes de filtrar por página.
- A lição metodológica vale registrar: **posição média só é interpretável junto com a distribuição de consultas**. Uma página com 500 consultas de 1 impressão em posição 3 e uma página com 1 consulta de 500 impressões em posição 3 aparecem idênticas no relatório agregado e significam coisas opostas.
- Core Web Vitals não pôde ser avaliado: o volume de tráfego é insuficiente para o CrUX gerar dados de campo. Um teste pontual no PageSpeed Insights daria dados de laboratório, mas não substitui dados reais de usuário.
- O status do crédito 30C foi verificado em fontes independentes (IRS e Alternative Fuels Data Center) além da busca inicial.

---

## Fontes

- [Alternative Fuel Vehicle Refueling Property Credit — IRS](https://www.irs.gov/credits-deductions/alternative-fuel-vehicle-refueling-property-credit)
- [Expired, Repealed, and Archived Incentives — Alternative Fuels Data Center](https://afdc.energy.gov/laws/laws_expired?jurisdiction=US)
- [30C EV Charger Tax Credit — Rewiring America](https://homes.rewiringamerica.org/federal-incentives/30c-ev-charger-tax-credit)
- [Luxury Property Care — South Florida Property Maintenance](https://luxurypropertycare.com/luxury-home-maintenance-florida/)
- [Keyrenter Miami West — Brickell Property Management](https://www.keyrentermiamiwest.com/brickell-property-management)
- [Mr. Handyman — Brickell](https://www.mrhandyman.com/miami-aventura-kendall/geo/brickell/)
- [TruBlue Home Service Ally — Home Maintenance Plan](https://www.trublueally.com/ongoing-services/home-maintenance-plan)
- [EV Charger Permit in Miami, FL — PermitMint](https://permitmint.com/permits/florida/miami/ev_charger/)
