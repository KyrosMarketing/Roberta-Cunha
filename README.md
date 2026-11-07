# Roberta Cunha · Psicologia e Neuropsicologia

Landing page editorial em Astro estático, TypeScript estrito e CSS próprio. Não há SPA, integrações de terceiros ativas, formulário clínico ou serviços de backend. Conteúdo preliminar baseado no briefing, sujeito à aprovação profissional. **A branch SEO é uma proposta local para revisão: nenhuma alteração desta etapa foi publicada em produção ou aplicada ao DNS.**

## Desenvolvimento

Requisito: Node.js 22.23.4+ ou 24 LTS (validado em 24.22.1), npm 11. Use o checkout existente; não é necessário criar worktree.

```sh
cd /workspace/Roberta-Cunha
npm ci
npm run dev
```

O servidor de desenvolvimento usa a porta 4321. A telemetria do Astro está desativada nos scripts. Para preparar e validar a saída estática:

```sh
npm run check
npm run build
npm run preview
```

`dist/` contém os arquivos publicáveis. Build e preview não fazem deploy. Os processos devem ser reiniciados quando uma nova máquina for criada.

## Conteúdo e componentes

- `src/data/site.ts`: contatos, serviços, FAQ, textos institucionais, mensagens de WhatsApp, ativos e IDs de integrações inativas.
- `src/pages/index.astro`: composição da landing page, introduções e narrativa editorial de cada seção.
- `src/components/`: cabeçalho, contato, fotografias, consentimento e rodapé.
- `src/layouts/Layout.astro`: metadados, fontes locais e estrutura comum.
- `src/styles/global.css`: tokens e estilos responsivos; Cormorant Garamond nos títulos e DM Sans no corpo. Tokens definem cores, espaços, raio, sombra e transições.
- `src/pages/politica-*.astro`: documentos legais preliminares; não substituem revisão da responsável.
- `docs/PUBLICACAO.md`: pendências e plano de publicação futura.
- `docs/TESTES.md`: resultados e limites da validação.
- `docs/DESIGN.md`: sistema visual, tokens, tipografia e decisões de interação.

Os dados de contato permanecem centralizados. Textos estruturais da landing podem ser editados em `index.astro`. WhatsApp tem mensagens distintas por serviço, com `encodeURIComponent`. Não incluir dados clínicos nas URLs ou eventos.

## Fotografias, logotipo e favicon

As fotografias e a marca original foram recebidas em `Arquivo 2.zip`. Os cinco arquivos originais estão preservados em `src/assets/originals/`. Não foram alterados rostos, cores ou proporções da marca.

- Hero: retrato no sofá (`d9ea6497-f289-4c11-bed5-2d9072fa23c3.JPG`).
- Sobre: retrato próximo (`05163b2b-601a-4a90-a08e-060376786732.JPG`).
- Retratos em `public/images/`: AVIF (qualidade 65) e WebP (qualidade 86), com larguras 400, 640 e 853 px, sem ampliação. Dimensões originais: 853 × 1280 px.
- Marca em `public/brand/`: PNGs originais escuro, branco e submarca, copiados sem alteração. A versão escura é usada no cabeçalho e rodapé; a branca fica disponível para usos futuros.
- Favicon: derivado de 64 × 64 px da submarca original, sem recorte ou redesenho, com transparência preservada.

Os caminhos, textos alternativos, dimensões, `srcSet`, `avifSrcSet` e `sizes` ficam em `site.assets`, em `src/data/site.ts`. `Portrait.astro` usa `<picture>`, AVIF preferencial com fallback WebP, prioridade de carregamento na hero e lazy loading em Sobre. O enquadramento usa `object-fit: cover`, com posição focal definida por seção no CSS. Os arquivos não recebem filtros ou alterações de identidade.

A imagem social atual é uma miniatura quadrada de 200 × 200 px com a logo original em `public/social/roberta-cunha-whatsapp-compact-v5.png`, sem fotografia, recorte, distorção ou recoloração da marca. Para regenerar: `npm run generate:social`. A marca completa é redimensionada proporcionalmente e centralizada em fundo off-white; o arquivo original é preservado. A arte anterior de 1200 × 630 px continua disponível em `public/social/roberta-cunha-og-v1.png` para não quebrar referências antigas. Fontes são distribuídas localmente via pacotes Fontsource; nenhuma chamada a Google Fonts.

## Privacidade e integrações

Sem analytics, pixels ou mapas incorporados. O gerenciador fica disponível no rodapé e permite aceitar/rejeitar opcionais, fechar com Escape e alterar a decisão. Não exibe banner inicial porque não há cookies opcionais ativos. Não existem categorias distintas ativas a personalizar. A escolha é armazenada em `localStorage` (`rc-consent`, versão 1); se bloqueado, a navegação continua. Aceitar não ativa tags nesta versão.

Os campos de GA4/GTM/Meta em `site.integrations` são pontos de configuração **inertes**. Inserir IDs não instala scripts. Uma integração futura exige implementação revisada, escolha de GA4 direto **ou** GTM para impedir duplicação, novo consentimento quando necessário, atualização das políticas e validação de tráfego. Meta fica desativado até revisão específica. Um evento local `rc:contact` pode ser emitido somente após aceitação de opcionais, com apenas `{ channel: 'whatsapp' }`; não há transmissão nem data layer externo. Não enviar serviço de interesse, sintomas, diagnóstico, conteúdo de mensagens ou outros dados de saúde para plataformas. Search Console pode usar a metatag, após autorização; não requer analytics.

## Testes

O ambiente tem Chromium em `/usr/bin/chromium`. Em outra máquina, instale Chromium ou indique `CHROMIUM_PATH`. O teste usa o navegador local, sem depender de download do Playwright.

```sh
npm test
```

Playwright inicia o preview da saída de produção automaticamente (execute o build antes) e testa oito larguras, Axe, menu/teclado, FAQ, links, cookies, metadados e navegação sem JavaScript. Capturas mobile/desktop são geradas em `docs/screenshots/`. Use `npm run format` para formatar e `npm run format:check` para conferir o estilo. Não há ESLint separado; a checagem de tipos usa `astro check`. Lighthouse é ferramenta de auditoria local; métricas de campo exigem publicação e dados reais.

## Cloudflare Pages (somente após aprovação)

Configuração prevista: build `npm run build`, diretório de saída `dist`, Node 24. Não precisa adaptador de servidor Astro. Os cabeçalhos em `public/_headers` são específicos do Pages. A página 404 é gerada como `404.html`. Não há regra SPA que capture URLs inexistentes. O inventário de URLs antigas e redirects 301 está pendente; não presumir que existam apenas as novas rotas. Consultar `docs/PUBLICACAO.md` antes de conectar GitHub/Cloudflare ou modificar o domínio.

## Indexação na branch SEO

Nesta branch, `site.reviewMode` está em `false` para preparar a landing indexável no domínio oficial. O bloqueio global `X-Robots-Tag: noindex` foi removido. As URLs estável e de preview `roberta-cunha.pages.dev` continuam com `noindex` por regras de host em `public/_headers`; documentos legais mantêm a diretiva própria. O preview local do Astro não aplica cabeçalhos específicos do Cloudflare Pages.

As mudanças dependem de aprovação para merge/push em `main` e publicação. A versão em produção não deve ser considerada corrigida apenas porque esta branch passou nos testes locais. Redirecionamento `www → sem www` depende de regra externa da Cloudflare e das condições de DNS/HTTPS existentes; instruções completas em `docs/seo/ACOES-EXTERNAS.md`.

O grafo Schema.org fica em `src/data/seo.ts`, tipado com `schema-dts` (somente desenvolvimento), e utiliza os dados centrais de `site.ts`. `Person`, `WebSite`, `WebPage`, `Place` e `ImageObject` se conectam por identificadores estáveis. Não foram acrescentados avaliações, horários, coordenadas ou credenciais não fornecidas.

## Compartilhamento social e assinatura da agência

Título e descrição padrão estão em `site.seo`; o layout reutiliza os mesmos valores em title, description, Open Graph e Twitter Card. A canonical da landing é `https://robertacunha.com.br/`. A URL absoluta da imagem é `https://raw.githubusercontent.com/KyrosMarketing/Roberta-Cunha/main/public/social/roberta-cunha-whatsapp-compact-v5.png`, entregue publicamente pelo GitHub Raw, seguindo o padrão observado no código-fonte de carolharder.com.br. O arquivo também está incluído em `public/social/` na saída estática. Ao mudar a imagem futuramente, versione o nome do arquivo e atualize `site.assets.social` para reduzir cache de imagem.

O endereço da imagem precisa responder HTTP 200 e `Content-Type: image/png`. O HTML do domínio precisa servir os novos metadados após o deploy; publicar a imagem no GitHub Raw não atualiza sozinho os metadados em cache do WhatsApp. A consulta ao domínio continua bloqueada pelo proxy deste ambiente, enquanto GitHub Raw é acessível para verificação pública.

WhatsApp e outras plataformas podem guardar metadados e imagens antigos. Teste um novo compartilhamento após o deploy; um parâmetro de revisão na URL pode ajudar no teste, mas não garante renovação de cache. Cards já enviados podem permanecer com a aparência antiga. A canonical continua sem parâmetros. Não há como garantir atualização imediata de cache da plataforma.

O crédito da Kyros está ativo com o PNG original em `public/brand/kyros-original.png`, copiado byte a byte do ZIP enviado. A assinatura “Desenvolvido por” com a logo aponta para `https://kyrosmarketing.com.br/`. Os dados ficam em `site.agency`. O arquivo é quadrado e possui margens transparentes amplas; a caixa CSS apresenta a área útil da marca sem alterar o arquivo, recolorir, deformar ou cortar seus traços. Ao substituir a logo futuramente, confira essas margens e os ajustes da caixa.

A miniatura quadrada e suas dimensões Open Graph tentam favorecer a prévia compacta. `twitter:card` usa `summary` para a imagem quadrada. Isso não determina o layout do WhatsApp: a plataforma pode continuar exibindo um cartão grande ou metadados anteriores em cache. A validação local não representa uma confirmação do layout em uma conversa real.

## Auditoria SEO

- `docs/seo/AUDITORIA-SEO.md`: achados, correções locais e limites da validação.
- `docs/seo/ACOES-EXTERNAS.md`: Search Console, perfil no Google, www/HTTPS e medição.
- `docs/seo/SUGESTOES-CONTEUDO.md`: sugestões separadas, não aplicadas ao site.

Não alterar textos, identidade visual ou perfis externos como parte de uma atualização técnica sem aprovação. Nenhuma posição de busca, volume ou dado de Search Console foi presumido.
