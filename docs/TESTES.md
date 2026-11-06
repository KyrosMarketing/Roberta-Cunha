# Relatório de validação local

Atualizado em 5 de novembro de 2026, após incorporar os ativos enviados em `Arquivo 2.zip`. Executado, em Linux, Node 24.22.1, Astro 7.4.5 e Chromium local. O repositório estava vazio; todos os arquivos do projeto foram criados nesta tarefa. Nenhum arquivo anterior foi removido.

## Resultados finais

| Verificação                   | Resultado                                               |
| ----------------------------- | ------------------------------------------------------- |
| Instalação congelada `npm ci` | Aprovada com o lockfile final                           |
| `npm run check`               | 0 erros, 0 avisos, 0 sugestões em 16 arquivos           |
| `npm run format:check`        | Aprovada; Prettier com suporte a Astro                  |
| `npm run build`               | Aprovada; saída estática em `dist/`                     |
| `npm test`                    | 12 testes aprovados, 0 falhas, 0 pulados; 17,7 segundos |
| HTTP de desenvolvimento       | 200, com título e os dois serviços presentes            |
| URL inexistente em preview    | HTTP 404 com conteúdo personalizado                     |

A suíte Playwright foi executada sobre a saída de **produção**, servida por `astro preview`. O servidor de desenvolvimento contém ferramentas próprias do Astro que não representam a saída publicada.

## Cobertura

- Larguras 320, 375, 390, 430, 768, 1024, 1440 e 1920 px, sem transbordamento horizontal.
- Axe com regras WCAG 2 A/AA, 2.1 AA e 2.2 AA: nenhuma violação detectada na landing nessas larguras, nas páginas complementares e com as preferências de cookies abertas.
- Menu mobile: Enter, Tab, Escape, fechamento ao navegar e retorno de foco. Seleção de âncora transfere foco para a seção.
- Accordion nativo: operação por teclado e funcionamento sem JavaScript.
- Três mensagens distintas de WhatsApp, telefone de destino e codificação de URL conferidos. Nenhuma mensagem foi enviada.
- Links internos, âncoras, e-mail, Instagram, documentos legais, sitemap, robots, canonical, idioma, H1 e JSON-LD.
- Aceitação e rejeição de opcionais, persistência local, reabertura, retorno de foco e ausência de requisições a terceiros.
- Nenhum erro de execução/console nem resposta HTTP com falha nas verificações da landing page.
- Capturas completas em 390 e 1440 px e revisão visual de composição, hierarquia, ícones, espaçamento e enquadramentos reservados. Capturas em `docs/screenshots/`.

Durante a revisão foram corrigidos transbordamento do cartão em 320 px, contraste de texto sobre rosé, glifos de setas ausentes no navegador, nome acessível da identificação e áreas de toque dos links no rodapé.

## Ativos reais e revisão visual

Os originais foram preservados em `src/assets/originals/`. Os PNGs da marca em `public/brand/` são cópias exatas dos arquivos enviados. Os retratos têm versões AVIF/WebP de 400, 640 e 853 px, sem ampliação. O favicon preserva a submarca completa com transparência, redimensionada para 64 × 64 px.

A suíte agora percorre as imagens na página para acionar o lazy loading antes de verificar a decodificação, sem tratar uma imagem ainda não solicitada como quebrada. Foram confirmados os dois retratos renderizados e as imagens carregadas em todas as oito larguras, sem erros de rede ou console. Foi corrigida uma colisão entre a classe de layout `.hero` e a imagem: o grid e espaçamento da seção são aplicados somente a `section.hero`.

Capturas atualizadas da hero, página completa e seção Sobre em desktop/mobile estão em `docs/screenshots/`. A revisão confirmou rosto visível, proporções preservadas, legibilidade da marca e ausência de distorção.

## Lighthouse mobile

Auditoria local final, com emulação mobile e limitação sintética do Lighthouse:

| Categoria      | Pontuação |
| -------------- | --------- |
| Performance    | 100       |
| Acessibilidade | 100       |
| Boas práticas  | 100       |
| SEO            | 100       |

LCP: **0,8 s**. CLS: **0,041**. Total Blocking Time: **0 ms**. Relatórios completos: `lighthouse-mobile.report.html` e `lighthouse-mobile.report.json`.

Esses resultados descrevem uma execução local com os dois retratos reais responsivos, o logotipo original e o favicon derivado da submarca. Não demonstram Core Web Vitals de usuários reais, desempenho da hospedagem, INP de campo ou conformidade integral com WCAG/LGPD. Repetir a auditoria após alterações relevantes e após publicação autorizada. Não foi realizada avaliação com leitor de tela humano nem teste em aparelhos iOS/Android físicos.

## Limitações e pendências

- O domínio atual retornou bloqueio 403 pela política de rede; conteúdo, ativos e inventário de URLs antigas não puderam ser verificados.
- Download do Chromium do Playwright foi bloqueado; os testes foram concluídos usando o Chromium já instalado em `/usr/bin/chromium`.
- Fotos e logotipos originais recebidos e incorporados. A imagem social dedicada, as validações profissionais e a aprovação final de uso/enquadramentos permanecem pendentes. Não há fotos fictícias nem marca recriada.
- Analytics/GTM/Meta não foram ativados ou testados em serviços reais. Nenhum segredo é necessário para desenvolver esta versão.
- A localização no Maps usa busca pelo endereço fornecido, sem confirmação independente do estabelecimento.
- Não houve deploy, push, mudanças em DNS, publicação de ambiente ou validação da restauração em nova tarefa.

As instruções de instalação e inicialização foram persistidas nos campos `install_script` e `start_skill` do rascunho do ambiente. Salvar esse rascunho não publica o site nem executa os scripts.

## Preparação do primeiro envio ao GitHub

Antes do primeiro commit em `main`, foram repetidos build, checagem de tipos, formatação e os 12 testes, todos aprovados. Foi confirmado `noindex,follow` no HTML gerado e `X-Robots-Tag: noindex` nos cabeçalhos do Pages. A versão é pública para revisão, não privada. O Lighthouse acima foi executado antes desse bloqueio intencional: a pontuação de SEO não representa a configuração de indexação da revisão. Nenhum novo resultado Lighthouse é alegado após essa alteração.

## Ajustes editoriais e microanimações

Removidos o bloco de frase sobre a fotografia, a seta e os dois divisores na área do link secundário da hero e as setas superiores dos cartões. Paleta, famílias tipográficas e estrutura preservadas; capturas de hero e serviços atualizadas em 390 e 1440 px.

Texto da avaliação revisado a pedido da cliente, incluindo investigação diagnóstica, acompanhamento, públicos e demandas de TDAH, TEA e ansiedade. A validação pela Roberta permanece na checklist de publicação.

`ScrollReveal.astro` usa IntersectionObserver e Web Animations API, sem bibliotecas: entrada de 550 ms, deslocamento de 14 px e atraso progressivo de até 130 ms. A primeira dobra não é ocultada. Sem JavaScript ou APIs de animação, o conteúdo permanece visível. Alterar a preferência para movimento reduzido cancela os efeitos ativos; foco por teclado finaliza a animação do elemento para mantê-lo legível.

Validação desta revisão: build e tipos aprovados, **14 testes aprovados em 20,3 s**. Os 12 fluxos existentes continuam passando e dois novos testes verificam animações reais e movimento reduzido em 390 e 1440 px. Auditorias Axe e capturas estáticas são executadas com movimento reduzido, evitando amostrar estados transitórios de opacidade; o comportamento em movimento é testado separadamente. Nenhuma violação Axe detectada nos estados estáveis verificados. Não foi executado novo Lighthouse nesta revisão; os relatórios anteriores são históricos.

## Troca de retratos, identificação e FAQ

Retratos invertidos entre hero e Sobre com os mesmos arquivos responsivos e pontos focais acompanhando cada foto. CTA da hero alterado para “Conversar com a Roberta”, mantendo o destino e a mensagem do WhatsApp. Seta independente com área de toque de 44 px abaixo de “Conhecer os atendimentos”, vinculada a `#servicos`; a rolagem respeita movimento reduzido.

Nome corrigido para Roberta da Cunha Harder no cadastro central e na apresentação. Mantida a frase sobre respeito, atenção e sensibilidade. FAQ revisado para comunicação direta, sem referências ao briefing ou validação editorial; duração, modalidades de psicoterapia e público seguem os textos solicitados, sem acrescentar serviços.

Build, tipos e 14 testes aprovados (19,7 s), incluindo oito larguras, Axe em estados estáveis, movimento reduzido e funcionamento sem JavaScript. Capturas de hero e Sobre atualizadas em desktop/mobile. Não foi executado novo Lighthouse nesta revisão.

## Identificação da hero, rodapé e fluidez da rolagem

Linha de identificação sob os botões removida; “Psicóloga • CRP 08/38333” passa a integrar a legenda abaixo da foto, à esquerda da frase institucional. Rodapé reorganizado em identidade, localização/contatos e faixa de privacidade, com centralização mobile. E-mail, ligação, Instagram e preferências continuam disponíveis; foi incluído também acesso explícito ao WhatsApp no grupo de contatos.

Revisão visual do rodapé em 320, 390, 768 e 1440 px, com capturas em `docs/screenshots/footer-*.png`. A suíte de layout verifica centralização do logotipo nas larguras mobile e ausência de rolagem horizontal nas oito resoluções.

A animação agora prepara apenas blocos fora da área visível, sem transição de ocultação, e os revela 120 px antes da entrada na tela. Transições de 300 ms, deslocamento de 6 px, sem delays por linha e sem medições ou eventos de scroll. Cada bloco é desobservado e marcado após a primeira entrada. Nenhuma propriedade de layout é animada.

Os testes de rolagem em 390 e 1440 px registram eventos reais de transição, percorrem a página com wheel gradual e saltos rápidos em ambas as direções e verificam uma única entrada por bloco. Também verificam alteração da preferência de movimento em tempo de execução e conteúdo visível após recarregar com movimento reduzido. O teste aguarda a aplicação assíncrona do evento `matchMedia`, em vez de presumir que a atualização do navegador é síncrona.

As verificações automatizadas não equivalem a medições em aparelhos físicos nem garantem 60 FPS em qualquer dispositivo. Não foi executado novo Lighthouse nesta revisão.

Resultado final desta revisão: **14 testes aprovados em 22,7 s**, build estático, tipos e formatação aprovados. Sem violações Axe nos estados estáveis auditados e sem erros de console/rede nas verificações da landing page.

## Open Graph, Twitter Card e crédito Kyros

Título e descrição padrão de SEO centralizados em `site.seo`, com os textos solicitados e reutilização em Open Graph/Twitter Card. Canonical da landing e URLs sociais absolutas em `https://robertacunha.com.br/`. Metadados de imagem incluem tipo PNG, dimensões 1200 × 630 e texto alternativo. A imagem versionada está em `public/social/roberta-cunha-og-v1.png`, com composição determinística baseada na logo original, sem redesenho. Regeneração: `npm run generate:social`.

Logo original da Kyros recebida em `LOGO KYROS PRETA (SEM FUNDO).png.zip`; PNG de 1254 × 1254 preservado byte a byte em `public/brand/kyros-original.png`. A caixa de exibição compensa apenas as margens transparentes, sem recortar os traços nem distorcer a imagem. Assinatura conferida em 320, 390, 768 e 1440 px e vinculada a `https://kyrosmarketing.com.br/`.

Resultado final: **15 testes aprovados em 22,8 s**, checagem de tipos, build e formatação aprovados. O teste social verifica title, description, canonical, valores únicos de Open Graph/Twitter Card, URLs absolutas e entrega HTTP 200 local do PNG com tipo e dimensões corretos. Também verifica o link e a logo do crédito. Imagem social e rodapé inspecionados visualmente; nenhum texto visível da landing foi alterado além da assinatura autorizada.

A consulta externa à imagem no domínio final retornou 403 do proxy do ambiente. Portanto, o acesso público e a prévia real em WhatsApp não foram confirmados nesta sessão. O arquivo está incluído na saída estática do build; confirmar sua resposta no domínio final após o deploy. O domínio deve servir esta versão para disponibilizar a URL absoluta configurada. O WhatsApp pode manter cards/metadados antigos em cache, inclusive depois de o arquivo novo estar acessível. Os relatórios Lighthouse anteriores continuam históricos; não foi executada nova auditoria Lighthouse nesta revisão.

## Scroll reveal progressivo com repetição ao retornar

Atualização exclusiva do comportamento de animação em `ScrollReveal.astro` e dos estilos correspondentes. Textos, imagens, paleta, tipografia e estrutura da landing preservados. Títulos, subtítulos, parágrafos, fotos, cards, etapas e CTAs têm alvos próprios, sem aninhar pais e filhos animados. Deslocamentos de 28–32 px, durações de 650–750 ms, intervalo de 100 ms nos cards/etapas, atraso de 100 ms nos parágrafos e de 180 ms nos CTAs.

A entrada começa na viewport. O elemento só é rearmado após sair de uma margem de segurança de 160 px, permitindo repetição ao retornar sem apagar conteúdo ainda visível. O estado pendente não recebe animação de saída. Movimento reduzido, conteúdo sem JavaScript, foco por teclado e retorno à aba priorizam legibilidade. Não há listeners de scroll ou medições contínuas.

Resultado: **15 testes aprovados em 30,2 s**, build, checagem de tipos e formatação aprovados. Os testes em 390 e 1440 px verificam duas entradas reais do mesmo cartão, títulos, parágrafos, fotografia e CTA; registram alterações de estado para confirmar que nenhum reset ocorre dentro da viewport. Também verificam altura constante do cartão, rolagem gradual e rápida em ambas as direções e desativação dos efeitos ao mudar a preferência de movimento.

Inspeção dos estados intermediário e final da fotografia em mobile e desktop: opacidade intermediária aproximada de 0,45 e deslocamento de 17,4 px, concluindo em opacidade 1 e transform sem deslocamento, com a mesma altura do elemento. As capturas estáticas geradas pelos testes não tiveram diferenças nesta revisão. Não foi executado novo Lighthouse; não há promessa de taxa de quadros em aparelhos físicos não testados.

## Miniatura compacta para compartilhamento no WhatsApp

A imagem social agora usa a logo original completa, centralizada em fundo off-white de 400 × 400 px, no arquivo versionado `public/social/roberta-cunha-whatsapp-v3.png`. A marca foi apenas redimensionada proporcionalmente; o original permanece intacto. A arte anterior de 1200 × 630 px continua disponível, mas não é mais indicada pelos metadados.

Open Graph declara largura/altura 400, PNG e URL absoluta. Twitter Card usa `summary` para a imagem quadrada. Título, descrição e canonical foram preservados. Nenhum arquivo de estrutura, estilo ou conteúdo visível da landing foi alterado.

Build e checagem de tipos aprovados. O teste direcionado de metadados sociais passou (1 teste em 1,6 s), conferindo tags únicas, valores preservados, dimensões e resposta HTTP 200 com `image/png` no preview local. A miniatura foi inspecionada visualmente. A consulta externa à URL final retornou 403 do proxy do ambiente; portanto, a disponibilidade pública e o formato real no WhatsApp não foram confirmados nesta sessão.

A imagem quadrada busca favorecer o cartão compacto, mas quem determina o layout é o WhatsApp. O nome de arquivo novo reduz a reutilização de cache da imagem; não força atualização dos metadados da página nem de mensagens já enviadas. Testar um novo compartilhamento após o deploy, considerando o cache da plataforma.
