# Checklist antes de publicar

## Conteúdo e ativos

- [x] Logotipos PNG originais e submarca recebidos e preservados; favicon derivado da submarca.
- [ ] Confirmar aprovação final de uso da marca; solicitar SVG somente se disponível.
- [x] Dois retratos reais recebidos em 853 × 1280 px e incorporados.
- [ ] Aprovar enquadramentos e textos alternativos.
- [x] Versões responsivas AVIF e WebP dos dois retratos.
- [x] Miniatura Open Graph de 400 × 400 px com a logo original, dimensões declaradas e `twitter:card=summary`.
- [ ] Conferir uma nova prévia no WhatsApp após o deploy; o layout é decidido pela plataforma e pode usar cache.
- [ ] Confirmar resposta pública da imagem no domínio após deploy e revisar um novo compartilhamento.
- [x] Logo original da Kyros recebida, preservada e aplicada à assinatura clicável no rodapé.
- [ ] Conferir nome, CRP 08/38333, formação e nome oficial da instituição/especialização.
- [ ] Validar a forma de apresentar qualificação/especialidade e referência à TCC.
- [ ] Confirmar públicos, modalidades por serviço e condições de atendimento online.
- [ ] Validar duração aproximada de 60 minutos, frequência e proposta inicialmente semanal.
- [ ] Aprovar etapas da avaliação, devolutiva e documentação pertinente sem prometer prazos.
- [ ] Validar com Roberta o texto solicitado sobre investigação diagnóstica, acompanhamento, TDAH/TEA e ansiedade, agora incluído nesta versão.
- [ ] Revisar todos os textos, FAQ e notas editoriais; resolver as pendências antes de remover as notas.
- [ ] Conferir telefone, e-mail, Instagram, endereço, sala, bloco e destino do Maps. Link de busca é baseado no endereço fornecido; não houve verificação independente da localização.

## Privacidade

- [ ] Revisar controlador, eventual encarregado, bases legais, fornecedores, retenção e direitos.
- [ ] Revisar políticas preliminares e operações reais de hospedagem/contato.
- [ ] Definir se haverá analytics; nenhum ID é necessário para a versão atual.
- [ ] Antes de ativar tags, implementar consentimento condicionado, auditoria de dados e renovação de escolha se aplicável.
- [ ] Manter Meta Pixel desativado até revisão de privacidade e políticas; não criar eventos ou públicos com dados de saúde.

## SEO e publicação

- [ ] Inventariar URLs do site anterior (acesso bloqueado por política de rede nesta sessão).
- [ ] Definir redirects 301 no formato Cloudflare `_redirects`, preservando URLs relevantes.
- [ ] Validar metadados finais, favicon, Open Graph, schema e sitemap após aprovação.
- [x] Versão de revisão com `noindex` na metatag e no cabeçalho HTTP. O endereço continua público; isso não equivale a proteção por senha.
- [ ] Após aprovação final, desativar `site.reviewMode` e remover `X-Robots-Tag` de `public/_headers` para o lançamento.
- [x] Usuário autorizou o envio do projeto para `KyrosMarketing/Roberta-Cunha`, branch `main`.
- [ ] Concluir conexão e primeiro build no painel Cloudflare Pages.
- [ ] Com autorização: conectar GitHub ao Pages, Node 24, build `npm run build`, saída `dist`.
- [ ] Antes do domínio: inventariar/exportar DNS atual, preservar MX/SPF/DKIM/DMARC e demais registros; apresentar plano específico. Não trocar nameservers sem autorização e sem inventário.
- [ ] Aprovar explicitamente publicação e configuração de domínio.
- [ ] Após publicação: HTTPS, redirects, 404, canonical, sitemap, indexação/Search Console e métricas reais.

Nenhum serviço externo, DNS ou envio de mensagem foi configurado. Links de contato foram validados estruturalmente, sem enviar mensagens.
