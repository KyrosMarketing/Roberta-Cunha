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

Fotografias reais e marca original fornecidas em `Arquivo 2.zip`, incorporadas em 5 de novembro de 2026. Retrato próximo na hero e retrato no sofá em Sobre, com versões responsivas AVIF/WebP. Logo escuro original no cabeçalho e rodapé, sem recoloração, recorte ou distorção; a versão branca é preservada para uso futuro. Favicon derivado da submarca original apenas por redimensionamento com margem transparente.

A hero usa enquadramento em `50% 28%` e o retrato de Sobre em `58% 28%`. A exibição foi revisada em desktop e mobile. Nenhum rosto ou marca foi recriado por IA. O arquivo social dedicado e a aprovação final de uso/recortes ainda precisam ser confirmados.
