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
