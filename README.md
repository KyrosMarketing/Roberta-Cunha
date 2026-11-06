# Roberta Cunha · Psicologia e Neuropsicologia

Landing page editorial em Astro estático, TypeScript estrito e CSS próprio. Não há SPA, integrações de terceiros ativas, formulário clínico ou serviços de backend. Conteúdo preliminar baseado no briefing, sujeito à aprovação profissional. **Nenhuma publicação ou alteração de DNS foi realizada.**

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

A imagem social atual é uma miniatura quadrada de 160 × 160 px com a logo original em `public/social/roberta-cunha-whatsapp-compact-v4.png`, sem fotografia, recorte, distorção ou recoloração da marca. Para regenerar: `npm run generate:social`. A marca completa é redimensionada proporcionalmente e centralizada em fundo off-white; o arquivo original é preservado. A arte anterior de 1200 × 630 px continua disponível em `public/social/roberta-cunha-og-v1.png` para não quebrar referências antigas. Fontes são distribuídas localmente via pacotes Fontsource; nenhuma chamada a Google Fonts.

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

## Primeira versão de revisão no Pages

A indexação está bloqueada por `site.reviewMode: true` e pelo cabeçalho `X-Robots-Tag: noindex` em `public/_headers`. Isso não restringe acesso: qualquer pessoa com o endereço pode visualizar. O `robots.txt` permite rastreamento para os buscadores conseguirem ler o `noindex`. Antes do lançamento aprovado, desative `reviewMode`, remova somente o cabeçalho `X-Robots-Tag` e valide a saída. Documentos legais continuam com `noindex` próprio.

No Cloudflare Pages, selecione o repositório `KyrosMarketing/Roberta-Cunha`, branch `main`, build `npm run build`, saída `dist`, raiz em branco e variável `NODE_VERSION=24`. O primeiro endereço deve ser o `.pages.dev` fornecido pela Cloudflare; não conectar o domínio ou alterar DNS nesta etapa.

## Compartilhamento social e assinatura da agência

Título e descrição padrão estão em `site.seo`; o layout reutiliza os mesmos valores em title, description, Open Graph e Twitter Card. A canonical da landing é `https://robertacunha.com.br/`. A URL absoluta da imagem é `https://robertacunha.com.br/social/roberta-cunha-whatsapp-compact-v4.png`, publicada como arquivo estático sem autenticação pelo projeto. Ao mudar a imagem futuramente, versione o nome do arquivo e atualize `site.assets.social` para reduzir cache de imagem.

Confirme o HTTP 200 e `Content-Type: image/png` nesse endereço no domínio final depois do deploy. O domínio precisa apontar para esta versão; publicar somente no Pages não atualiza automaticamente outro servidor no domínio. Neste ambiente, a consulta pública ao domínio foi bloqueada pelo proxy com 403; a disponibilização foi validada no preview de produção local, sem confirmar a hospedagem pública.

WhatsApp e outras plataformas podem guardar metadados e imagens antigos. Teste um novo compartilhamento após o deploy; um parâmetro de revisão na URL pode ajudar no teste, mas não garante renovação de cache. Cards já enviados podem permanecer com a aparência antiga. A canonical continua sem parâmetros. Não há como garantir atualização imediata de cache da plataforma.

O crédito da Kyros está ativo com o PNG original em `public/brand/kyros-original.png`, copiado byte a byte do ZIP enviado. A assinatura “Desenvolvido por” com a logo aponta para `https://kyrosmarketing.com.br/`. Os dados ficam em `site.agency`. O arquivo é quadrado e possui margens transparentes amplas; a caixa CSS apresenta a área útil da marca sem alterar o arquivo, recolorir, deformar ou cortar seus traços. Ao substituir a logo futuramente, confira essas margens e os ajustes da caixa.

A miniatura quadrada e suas dimensões Open Graph tentam favorecer a prévia compacta. `twitter:card` usa `summary` para a imagem quadrada. Isso não determina o layout do WhatsApp: a plataforma pode continuar exibindo um cartão grande ou metadados anteriores em cache. A validação local não representa uma confirmação do layout em uma conversa real.
