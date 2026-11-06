# Sistema visual

Conceito: **Elegância que acolhe.** Composição editorial com espaços amplos, linhas finas, dois serviços com peso equivalente e alternância discreta de fundos para orientar a leitura. Sem ilustrações clínicas decorativas, depoimentos ou selos.

## Tokens

Os valores são definidos em `src/styles/global.css`:

| Token     | Valor     | Aplicação                                                |
| --------- | --------- | -------------------------------------------------------- |
| `--paper` | `#FCF8F5` | Fundo principal                                          |
| `--rose`  | `#EADBD7` | Contato e apoio                                          |
| `--terra` | `#C58D7C` | Referência de destaque, não texto de baixo contraste     |
| `--brown` | `#765A53` | CTAs, títulos em itálico e foco                          |
| `--ink`   | `#352D2D` | Texto principal e hover dos botões                       |
| `--muted` | `#685650` | Texto secundário, escurecido após auditoria de contraste |
| `--line`  | `#D9C9C2` | Divisores e contornos                                    |

Cormorant Garamond 500 e 500 itálico nos títulos; DM Sans 400 e 500 no texto. Fontes locais no subconjunto latino, com fallback serif/sans-serif. Escala fluida com `clamp()`; grades com limite de 1240 px e margens adaptáveis.

Espaçamento de seção em `--section`, margem em `--space`, raio em `--radius`, sombra em `--shadow` e transição em `--ease`. Botões usam cor escura com texto claro, contornos alternativos e foco visível. Ações principais têm no mínimo 44 px de altura. Movimentos e rolagem suave respeitam `prefers-reduced-motion`.

Menu mobile com estado expandido, Escape e gestão de foco. FAQ em `details/summary`, disponível sem JavaScript. Preferências de cookies em região acessível não modal: a pessoa pode fechar e continuar navegando. Botão flutuante desaparece quando o rodapé ou as preferências entram em uso.

## Ativos originais

Fotografias reais e marca original fornecidas em `Arquivo 2.zip`, incorporadas em 5 de novembro de 2026. Retrato no sofá na hero e retrato próximo em Sobre, com versões responsivas AVIF/WebP. Logo escuro original no cabeçalho e rodapé, sem recoloração, recorte ou distorção; a versão branca é preservada para uso futuro. Favicon derivado da submarca original apenas por redimensionamento com margem transparente.

A hero usa enquadramento em `58% 28%` e o retrato de Sobre em `50% 28%`. A exibição foi revisada em desktop e mobile. Nenhum rosto ou marca foi recriado por IA. A aprovação final de uso/recortes ainda precisa ser confirmada. A imagem social atual usa a logo original em uma miniatura quadrada de 160 × 160 px, sem fotografia, centralizada sobre fundo off-white e com suas proporções preservadas. A arte anterior de 1200 × 630 px permanece arquivada e acessível, mas não está mais apontada pelos metadados.

## Movimento

Scroll reveal progressivo em títulos, subtítulos, parágrafos, fotografias, cards, etapas e CTAs. Deslocamento de 28 px no texto e 32 px nas fotografias, combinado com opacidade; duração de 650 ms no conteúdo e 750 ms nas fotos, com curva `cubic-bezier(.22,.61,.36,1)`. Parágrafos têm atraso de 100 ms, CTAs de 180 ms, e cards/etapas usam intervalos de 100 ms, limitados a 200 ms.

Um IntersectionObserver inicia a entrada na viewport. Outro rearma o elemento somente depois de ele sair completamente de uma margem de 160 px ao redor da tela. Assim, as entradas se repetem ao voltar às seções, sem ocultar conteúdo ainda visível e sem reiniciar por pequenas oscilações junto à borda. A preparação fora da tela não recebe transição de saída.

Os alvos não incluem simultaneamente pais e filhos, evitando deslocamentos e atrasos acumulados. Não há listeners de scroll nem medições contínuas; apenas uma leitura inicial por alvo. A primeira dobra já visível e a imagem LCP não são ocultadas na carga inicial. Foco por teclado e retorno à aba finalizam entradas em andamento para priorizar leitura e interação. Movimento reduzido remove os efeitos, inclusive ao alterar a preferência em tempo de execução. Sem JavaScript ou IntersectionObserver, o conteúdo continua visível.

## Hero e rodapé

A identificação profissional aparece na legenda sob a foto, alinhada à esquerda, com “Escuta, ciência e cuidado” à direita, admitindo quebra de linha em telas estreitas. A linha anterior sob os botões foi removida.

Rodapé composto por identidade, endereço e contatos agrupados. E-mail, WhatsApp, ligação telefônica e Instagram continuam acessíveis. Privacidade, cookies e preferências compartilham uma faixa horizontal com quebra natural. No mobile, logotipo, textos e grupos ficam centralizados, com áreas de toque de pelo menos 44 px.

## Crédito da agência

Assinatura discreta e centralizada ao final do rodapé, com texto “Desenvolvido por” e a logo preta original da Kyros, sem alterações no PNG. A caixa de exibição compensa apenas a margem transparente do arquivo quadrado, mantendo a proporção e todos os traços. O conjunto é um único link externo para `https://kyrosmarketing.com.br/`, com nome acessível e foco visível.
