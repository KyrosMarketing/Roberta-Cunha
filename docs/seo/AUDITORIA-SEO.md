# Auditoria e otimização técnica de SEO — Roberta Cunha

Data: **7 de novembro de 2026**. Repositório: `KyrosMarketing/Roberta-Cunha`. Base: `57a2bd8`, incluindo as edições recentes da cliente em `index.astro` e `site.ts`. Branch de trabalho: **`seo/identidade-indexacao`**.

**As correções estão implementadas e validadas localmente; não foram enviadas à main, publicadas em produção nem aplicadas ao DNS ou a perfis externos.** A captura dos resultados atuais do Google mencionada no pedido ainda não foi fornecida. Nenhuma posição, volume de busca, impressão, clique ou status real de indexação foi presumido.

## Atualização de autorização

Em 7/11/2026, após a entrega desta auditoria, a cliente autorizou o envio das correções técnicas à main, com esclarecimento de que elas favorecem indexação e identificação, mas não garantem o topo dos resultados. A auditoria abaixo registra o estado anterior ao envio. O sucesso do deploy e a resposta HTTP pública ainda precisam ser conferidos; nenhuma configuração de DNS ou perfil externo integra essa autorização técnica.

## Conclusão principal

A versão da `main` inspecionada contém **dois pedidos explícitos para não indexar a landing**:

1. `site.reviewMode: true`, que gera `<meta name="robots" content="noindex,follow">` na raiz.
2. `X-Robots-Tag: noindex` em uma regra global `/*` de `public/_headers`.

O HTML da base foi gerado separadamente e confirmou a metatag noindex. Esse é um bloqueio técnico confirmado no código/build, incompatível com o objetivo de apresentar o domínio oficial nas pesquisas. Não equivale a uma consulta ao índice do Google nem prova quais URLs o Google já conhece. A resposta atual do domínio permanece não inspecionada por bloqueio de rede.

Na branch SEO, a raiz está preparada para indexação, enquanto as cópias de homologação `pages.dev` continuam com noindex por regras específicas de host. Remover noindex não garante rastreamento imediato, indexação nem primeira posição; ainda são necessários publicação aprovada e acompanhamento externo.

## Achados e providências

| Prioridade | Achado                                                                               | Providência                                                                     | Situação                                                 |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Crítica    | Noindex na landing e no cabeçalho global da main                                     | Desativar modo de revisão na raiz e retirar o cabeçalho global                  | Corrigido somente na branch local                        |
| Alta       | Identidade estruturada limitada a um Person, sem IDs ou conexão explícita com o site | Grafo Person/WebSite/WebPage/Place/ImageObject com IDs estáveis                 | Implementado e testado localmente                        |
| Alta       | Risco de indexar cópias Pages depois de liberar a raiz                               | Noindex específico para host estável e subdomínios de preview                   | Configurado; aplicação real depende do deploy Cloudflare |
| Alta       | WWW/HTTP e regras de canonicalização da origem desconhecidos                         | Preservar canonical; preparar regra www → sem www no serviço apropriado         | Regra descrita para aprovação, não aplicada              |
| Alta       | Situação do Search Console não confirmada; cliente acha que ainda não existe         | Orientar busca de propriedade existente, verificação, sitemap e inspeção de URL | Instruções preparadas, sem acesso à propriedade          |
| Média      | Perfil da Empresa fornecido, mas sem inspeção de destino/contatos                    | Conferir nome, categoria, endereço, telefone, elegibilidade e horários          | Acesso externo bloqueado                                 |
| Média      | Oportunidade de redação mais direta sobre identidade/abordagem                       | Sugestões separadas, sem alteração automática                                   | Documento para aprovação                                 |

## Identidade profissional estruturada

O novo arquivo `src/data/seo.ts` conecta cinco entidades em **um único script JSON-LD**:

- **Person**: nome profissional **Roberta Cunha**, nome completo em `alternateName` (**Roberta da Cunha Harder**), profissão, CRP em `identifier`, contato e Instagram oficial em `sameAs`.
- **WebSite**: endereço oficial, nome profissional e relação `publisher` com a mesma pessoa.
- **WebPage**: landing oficial, `isPartOf` com o site e `mainEntity`/`about` com a pessoa.
- **Place**: consultório e endereço oficial fornecido; sem coordenadas, horário ou afirmação de elegibilidade de empresa local.
- **ImageObject**: fotografia real já usada no site, sem modificar o arquivo ou a apresentação.

Os IDs usam o mesmo domínio e fragmentos estáveis. Não foram adicionados reviews, estrelas, prêmios, preços, novos diplomas, certificações ou condições clínicas. O CRP e o endereço são dados fornecidos pela cliente, não uma consulta independente ao conselho profissional.

Não foi usado LocalBusiness/MedicalBusiness para afirmar uma condição de estabelecimento ainda não verificada. O link do Perfil da Empresa precisa ser resolvido e conferido antes de incorporá-lo a `sameAs`, evitando associação com homônimos.

O JSON pode ser revisado em [dados-estruturados.json](dados-estruturados.json). A tipagem `schema-dts` é uma dependência de desenvolvimento; não é enviada como biblioteca de interface ao navegador. Checagem de tipos, parse JSON e testes de referências são validações locais, não substitutos de um teste remoto do Google/Schema.org. Os validadores online foram bloqueados nesta sessão.

## Elementos corretos preservados

- Title: **Roberta Cunha | Psicologia e Neuropsicologia em Curitiba**.
- Description: **Um espaço de escuta, acolhimento e cuidado. Psicoterapia e Avaliação Neuropsicológica para crianças, adolescentes e adultos. Atendimento presencial e online.**
- Canonical da raiz: **https://robertacunha.com.br/**.
- Open Graph e Twitter Card sem duplicação; logo social atual de 200 × 200 no GitHub Raw, preservada.
- Um H1 editorial, com H2 para seções e H3 nos serviços/etapas; navegação semântica e âncoras estáveis.
- Sitemap XML com a raiz canônica; `robots.txt` permite rastreamento e aponta para o sitemap.
- Fotografias reais com alt contextual, dimensões, AVIF/WebP, srcset, prioridade na hero e lazy loading abaixo da dobra.
- Fontes locais e JavaScript restrito às interações existentes.
- Páginas legais e 404 com noindex próprio; não incluídas no sitemap.
- Links de WhatsApp, Instagram, telefone, e-mail, contato e consentimento.

Não foi adicionada repetição artificial das consultas-alvo, texto oculto ou SearchAction para uma busca que não existe no site.

## Preservação visual e de conteúdo

Foi construído um baseline isolado da `57a2bd8`, sem criar worktree nem alterar a checkout de trabalho. O **conteúdo completo de `<body>` é idêntico byte a byte** antes e depois da implementação SEO. SHA-256: `fcaae660d5666b7e57e13a5681b08b57c5a610900c83a7a1c68a10adb3a4b368`.

O resultado está em [comparacao-corpo.json](comparacao-corpo.json). As mudanças na página ficam no head/dados estruturados; fotos, fontes, cores, animações, textos visíveis e layout não foram alterados. As alterações recentes feitas pela cliente no GitHub foram preservadas.

## Testes executados

| Verificação              | Resultado                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `npm run check`          | 0 erros, 0 avisos e 0 sugestões em 19 arquivos                                                             |
| `npm run build`          | Saída estática gerada com sucesso                                                                          |
| Suíte Playwright         | **17 testes aprovados**, 0 falhas ou pulados; 30,4 s                                                       |
| Resoluções               | 320, 375, 390, 430, 768, 1024, 1440 e 1920 px                                                              |
| Acessibilidade Axe       | Nenhuma violação detectada nos estados estáveis auditados                                                  |
| Interações               | Menu/teclado, FAQ, WhatsApp, contatos, cookies, animações nos dois sentidos e movimento reduzido aprovados |
| Sem JavaScript           | Conteúdo e interações nativas testadas                                                                     |
| Indexabilidade preparada | Sem metatag noindex na landing e sem cabeçalho global noindex no arquivo de configuração                   |
| Homologação              | Regras de host noindex presentes; precisam ser verificadas no HTTP da Cloudflare após deploy               |
| Grafo JSON-LD            | Um script, tipos esperados, IDs únicos, referências resolvidas e dados oficiais coerentes                  |
| Sitemap                  | HTTP 200 no preview, XML com URL canônica; `text/xml` e `application/xml` são tipos válidos                |
| Metadados sociais        | Valores e dimensões preservados, tags únicas e PNG estático válido                                         |

O comando de preview do Playwright recebeu `--ignore-lock` para manter o servidor em foreground neste ambiente, conforme o suporte da versão instalada do Astro. Isso corrige a inicialização do teste, não o comportamento da landing.

## Performance — laboratório mobile

Lighthouse executado em **7/11/2026, 17:31 (America/Sao_Paulo)**, no preview local de produção, com emulação/limitação sintética da ferramenta:

| Categoria      | Pontuação |
| -------------- | --------- |
| Performance    | **98**    |
| Acessibilidade | **100**   |
| Boas práticas  | **100**   |
| SEO            | **100**   |

- FCP: **0,8 s**.
- LCP: **2,3 s**.
- CLS: **0,041**.
- TBT: **0 ms**.

Relatórios: [HTML](lighthouse-mobile.report.html), [JSON](lighthouse-mobile.report.json) e [resumo](lighthouse-resumo.json).

Esses valores descrevem uma execução local. Não são Core Web Vitals de usuários reais, não medem INP de campo e não comprovam comportamento da hospedagem/CDN/TLS do domínio. TBT não equivale a INP. Relatórios históricos de outras datas não constituem uma comparação controlada antes/depois.

Lighthouse ainda aponta oportunidades em entrega de imagens, dependência de fontes/CSS e reflow de inicialização. Os arquivos e o código de animação foram preservados pela restrição desta tarefa. A pontuação e as métricas medidas não justificam mudanças visuais, de fontes ou fotos por tentativa. Uma otimização adicional pode ser avaliada separadamente, com teste de equivalência e aprovação caso altere ativos ou movimentos.

## Google, indexação e homônimos: não medidos

As sete buscas solicitadas permanecem **sem resultado medido nesta sessão**:

| Consulta                      | Estado                              |
| ----------------------------- | ----------------------------------- |
| Roberta Cunha                 | Acesso ao Google bloqueado          |
| Roberta Cunha Psicóloga       | Não executada após bloqueio do host |
| Psicóloga Roberta Cunha       | Não executada após bloqueio do host |
| Roberta Cunha Curitiba        | Não executada após bloqueio do host |
| Roberta Cunha Neuropsicologia | Não executada após bloqueio do host |
| Roberta Cunha Psicologia      | Não executada após bloqueio do host |
| Roberta da Cunha Harder       | Não executada após bloqueio do host |

Também falhou a consulta auxiliar `site:robertacunha.com.br`. Não é possível afirmar que o site está ou não indexado, em qual posição aparece ou quais pessoas o Google prioriza. O relato da cliente sobre homônimos é contexto; não foi convertido em dado de auditoria. A captura prometida pode complementar a linha de base, mas não foi recebida até a elaboração deste relatório.

Uma identidade coerente pode ajudar os sistemas a relacionar o nome profissional à pessoa, ao domínio e ao perfil oficial. Ela não garante primeira posição, painel de conhecimento ou classificação universal.

## Bloqueios e fontes externas

As requisições a Google/Maps, domínio, www, perfil fornecido e validadores foram rejeitadas pelo proxy **antes de receber uma resposta da origem**. Não interpretar esse bloqueio como HTTP 403 do site, problema de HTTPS, ausência de indexação ou perfil inexistente. Evidências em [acessos-externos.json](acessos-externos.json).

Nenhuma identidade Google vinculada ao Search Console foi disponibilizada pela configuração do ambiente. Há uma variável genérica de credencial de aplicação, mas nenhuma conexão correspondente no manifesto de identidades; seu conteúdo não foi inspecionado nem usado como se fosse autorização para o Search Console da cliente. O ambiente selecionado é `ccarenv_b64_Y2NhcmVudl85NzBhMmE5ZWI0NTA4MTkxODc0YjAzZmQ0ZGFiN2M1Yg`. O status declara Desktop habilitado, com estado desconhecido, mas não oferece a ferramenta `cua_repl.js` nesta sessão. Os testes locais foram efetivamente feitos com Chromium/Playwright; isso não equivale a um navegador autenticado no Search Console da cliente.

O Perfil da Empresa fornecido é **https://share.google/nGd9m2bHeT5nB5FJ2**. O link foi registrado, mas destino, contatos, status de verificação e elegibilidade continuam não conferidos.

A documentação oficial de cabeçalhos e redirecionamentos da Cloudflare foi consultada pelo repositório público `cloudflare/cloudflare-docs`. Ela confirma que `_headers` suporta regras absolutas por hostname e placeholders para previews, enquanto `_redirects` não suporta redirecionamentos entre domínios. Por isso, o plano www usa Redirect Rule, não um arquivo inválido no repositório.

A ampliação pontual da lista de domínios foi salva em rascunho nas configurações do ambiente, preservando entradas existentes e presets. Não foi aplicada à rede corrente. Salvar/aplicar as mudanças pode liberar a investigação nesta sessão; publicar o ambiente preserva a configuração/snapshot para tarefas futuras. Isso não publica o site nem altera DNS. Não foram contornadas as restrições de rede.

## Ações que faltam

1. Revisar as alterações técnicas e autorizar sua publicação, se aprovadas. Nenhum push em main foi feito.
2. Após o deploy, conferir HTTP real: raiz indexável, previews com noindex, canonical única, sitemap e SSL.
3. Conferir/configurar o redirecionamento 301 de www e HTTP → HTTPS, com autorização e preservação dos serviços de e-mail.
4. Localizar/verificar a propriedade do Search Console, enviar sitemap e inspecionar a URL principal.
5. Abrir/conferir o Perfil da Empresa fornecido e o Instagram, respeitando a elegibilidade e a ética profissional.
6. Validar o JSON-LD nos serviços oficiais quando o acesso estiver disponível.
7. Criar a linha de base de consultas, impressões, cliques, CTR e posição média com dados reais; acompanhar por país/dispositivo e período.

Instruções concretas: [ACOES-EXTERNAS.md](ACOES-EXTERNAS.md). Sugestões de texto separadas para aprovação: [SUGESTOES-CONTEUDO.md](SUGESTOES-CONTEUDO.md).
