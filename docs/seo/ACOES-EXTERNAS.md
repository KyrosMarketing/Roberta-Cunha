# Ações externas para SEO e identidade profissional

Estas instruções não foram executadas em serviços externos. DNS, perfis e publicação exigem autorização. Não enviar senhas ou chaves em chat.

## 1. Aplicar a correção técnica após aprovação

A branch local `seo/identidade-indexacao` remove o bloqueio de indexação da landing no domínio oficial e acrescenta o grafo de identidade. A cliente autorizou o envio dessas correções técnicas a `main` em 7/11/2026. O vínculo GitHub/Cloudflare publica alterações em `main`; não fazer esse envio inadvertidamente.

Após o deploy aprovado:

- Inspecionar **https://robertacunha.com.br/**: HTTP 200, HTTPS válido, canonical sem www, ausência de `noindex` na metatag e em `X-Robots-Tag`.
- Confirmar title e description solicitados, um único H1, um script JSON-LD com grafo conectado e imagem social atual.
- Verificar `robots.txt`, sitemap e página 404 real.
- Conferir `X-Robots-Tag: noindex` nos hosts `pages.dev`, conforme regras em `_headers`. O preview local do Astro não aplica esses cabeçalhos; a validação final é na Cloudflare.
- Manter os documentos legais com `noindex`, como estão preparados. Não incluí-los no sitemap enquanto permanecerem assim.

## 2. Consolidar www e HTTPS sem afetar e-mail

Não foi possível consultar os hosts públicos nesta sessão; o comportamento atual de www e HTTP está **não verificado**. A canonical do HTML já aponta para o domínio oficial. A canonical é um sinal de consolidação, não substitui o redirecionamento 301 desejado.

A documentação oficial de Pages informa que `_redirects` não suporta redirecionamento por domínio. Não foi criado um arquivo com regras inválidas ou um catch-all que poderia gerar loops. O ajuste deve ser feito por **Single Redirect / Redirect Rule** na zona da Cloudflare, após autorização:

| Campo                  | Configuração proposta                                          |
| ---------------------- | -------------------------------------------------------------- |
| Nome                   | Consolidar www de Roberta Cunha                                |
| Condição               | `http.host eq "www.robertacunha.com.br"`                       |
| Destino dinâmico       | `concat("https://robertacunha.com.br", http.request.uri.path)` |
| Status                 | `301`                                                          |
| Preservar query string | Sim                                                            |

Antes de aplicar, confirmar que www é atendido pela zona/Cloudflare e possui HTTPS válido. Uma regra não resolve um hostname sem DNS/certificado. Inventariar os registros existentes e preservar MX, SPF, DKIM, DMARC e demais serviços. Nenhuma alteração de DNS foi feita ou está implicitamente autorizada.

Verificar também o redirecionamento HTTP → HTTPS nas configurações existentes. Habilitar ou alterar somente após revisão. Testar raízes, caminhos e parâmetros, sem loop e com destino final único. A URL principal permanece a mesma.

A URL estável `roberta-cunha.pages.dev` e as URLs de preview terão noindex pelo cabeçalho host-specific. Isso mantém homologação acessível sem incentivar indexação de cópias.

Fontes oficiais consultadas pelo repositório público da Cloudflare:

- https://developers.cloudflare.com/pages/configuration/redirects/
- https://developers.cloudflare.com/pages/configuration/headers/

## 3. Search Console

A cliente informou que acha que ainda não há configuração. Não foi disponibilizado acesso a uma propriedade; sua existência não pôde ser confirmada. Primeiro verificar se a conta responsável já possui a propriedade, evitando trabalho duplicado.

Opções, conforme o acesso disponível:

1. **Propriedade de domínio** `robertacunha.com.br`: cobre protocolos e subdomínios, mas exige verificação DNS. O Google fornece o TXT exato. Não criar um valor fictício nem alterar DNS sem autorização específica.
2. **Prefixo de URL** `https://robertacunha.com.br/`: pode usar a metatag de verificação fornecida pelo Google. O campo `site.integrations.searchConsole` já existe e está vazio. Inserir somente o valor público dessa verificação quando fornecido; não confundir com senha ou token de API. A tag deve chegar à publicação aprovada para funcionar.

Depois da verificação e publicação:

- Inspecionar a URL principal. Comparar a canonical declarada com a selecionada pelo Google.
- Executar o teste de URL publicada, conferir rastreabilidade e ausência de noindex.
- Enviar **https://robertacunha.com.br/sitemap.xml** na seção Sitemaps.
- Se o teste estiver apto, solicitar indexação da raiz uma vez; acompanhar o status em vez de repetir solicitações.
- Examinar páginas não indexadas, erros, redirecionamentos e data do último rastreamento.
- Consultar Core Web Vitals, se houver dados suficientes.

Enviar sitemap e solicitar indexação não garantem indexação imediata nem posição. A consulta `site:robertacunha.com.br` é uma checagem auxiliar incompleta; não substitui a Inspeção de URL.

### Medir o objetivo de marca

Criar uma linha de base no relatório de Desempenho, com data, período (28 dias e 3 meses quando disponíveis), país, dispositivo e página principal. Comparar períodos equivalentes. Registrar impressões, cliques, CTR e posição média para:

- Roberta Cunha
- Roberta Cunha Psicóloga
- Psicóloga Roberta Cunha
- Roberta Cunha Curitiba
- Roberta Cunha Neuropsicologia
- Roberta Cunha Psicologia
- Roberta da Cunha Harder

Verificar também consultas contendo “roberta”, separando homônimos e buscas não relacionadas. Posição média não é uma posição fixa e universal. Poucos dados ou consultas omitidas por privacidade não equivalem a zero buscas. Nenhuma métrica dessas foi inventada ou medida nesta sessão.

## 4. Perfil da Empresa no Google

Link fornecido pela cliente: **https://share.google/nGd9m2bHeT5nB5FJ2**. A tentativa de abrir o link foi bloqueada pela rede do ambiente. Destino, titularidade, verificação, endereço, categoria e horários ainda não foram inspecionados. O link não foi acrescentado automaticamente a `sameAs` antes dessa conferência; isso evita associar o site a um possível homônimo.

Revisar no perfil, com acesso da responsável:

| Informação   | Base fornecida para conferir                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------- |
| Nome público | Roberta Cunha, conforme marca real; sem palavras-chave promocionais acrescentadas ao nome         |
| Categoria    | Psicólogo, se disponível no painel e adequada à atuação; não inventar categorias ou qualificações |
| Registro     | CRP 08/38333, quando pertinente à descrição profissional                                          |
| Local        | Av. do Batel, 1230 — Bloco BTC, 6º andar, sala 601 — Batel — Curitiba/PR                          |
| Telefone     | (41) 99161-4821                                                                                   |
| Site         | https://robertacunha.com.br/                                                                      |
| Serviços     | Psicoterapia individual e Avaliação Neuropsicológica, sem promessas de resultado                  |
| Fotos        | Arquivos reais já fornecidos, com autorização de uso                                              |
| Horários     | Somente horários confirmados pela profissional; ainda não fornecidos                              |

A elegibilidade depende de atendimento presencial real e das diretrizes aplicáveis a profissionais individuais/consultórios. Não presumir que um endereço, escritório virtual ou atendimento exclusivamente online basta para elegibilidade. Confirmar acesso dos pacientes, presença efetiva e demais exigências atuais antes de configurar ou criar outro perfil. Não duplicar um perfil existente para tentar ganhar relevância.

As diretrizes oficiais ao vivo foram bloqueadas nesta sessão; revalidar os detalhes no momento da configuração:
https://support.google.com/business/answer/3038177?hl=pt-BR

Não criar avaliações artificiais, comprar depoimentos ou revelar informações de pacientes. Eventuais práticas relacionadas a avaliações devem respeitar a ética profissional e a privacidade; não foram configuradas nesta auditoria.

## 5. Identidade digital e autoridade legítima

- Manter **Roberta Cunha** como nome profissional público e **Roberta da Cunha Harder** como nome completo da mesma pessoa. O JSON-LD conecta ambos por `name` e `alternateName`, não cria duas pessoas.
- Conferir se o Instagram oficial `https://www.instagram.com/psirobertacunha/` inclui o site oficial, profissão, CRP e localidade coerentes. Não foi possível inspecionar o perfil ao vivo; nenhuma edição externa foi realizada.
- Após resolver/conferir o Perfil da Empresa, usar seu destino público correto como referência adicional, se adequado. Não inventar CID, coordenadas ou URLs de conhecimento do Google.
- Conferir formação e comprovações antes de acrescentar títulos de especialista, cursos ou credenciais. O schema não afirma qualificações novas.
- Buscar referências legítimas em instituições, associações e cadastros profissionais pertinentes, somente se reais e verificáveis. Não comprar backlinks nem criar perfis falsos ou em massa.
- Conteúdo educativo futuro deve ser original, revisado pela profissional, com autoria e fontes adequadas. Não foram criadas novas páginas nem textos ocultos para SEO.

## 6. Validação externa após acesso

Usar o HTML publicado no Schema Markup Validator e no Rich Results Test:

- https://validator.schema.org/
- https://search.google.com/test/rich-results

Nesta sessão foram executados parse JSON, checagem TypeScript com `schema-dts` e testes de consistência/referências do grafo. Esses testes não são uma validação remota do Google. `Person`, `WebSite`, `WebPage` e `Place` não garantem um resultado enriquecido, painel de conhecimento ou elegibilidade de empresa local. O teste do Google pode não mostrar um recurso elegível mesmo com Schema.org válido.

Para concluir a auditoria de fontes públicas, aplicar a liberação de domínios já preparada nas configurações do ambiente e repetir as consultas com novas conexões. O rascunho não altera a rede da máquina nem a publicação por si só. Nenhuma credencial privada deve ser enviada em chat.
