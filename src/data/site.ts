export const site = {
  // Primeira versão pública para revisão; liberar indexação somente após aprovação.
  reviewMode: true,
  name: 'Roberta Cunha',
  fullName: 'Roberta da Silva Cunha',
  crp: '08/38333',
  url: 'https://robertacunha.com.br',
  email: 'contato@robertacunha.com.br',
  phone: '(41) 99161-4821',
  whatsapp: '5541991614821',
  instagram: 'https://www.instagram.com/psirobertacunha/',
  address:
    'Av. do Batel, 1230 — Bloco BTC, 6º andar, sala 601 — Batel — Curitiba/PR',
  education:
    'Graduada em Psicologia pela Universidade Tuiuti do Paraná, com especialização em Neuropsicologia pela FAE Business School, conforme informações fornecidas para este projeto.',
  // Ativos originais enviados pela cliente; derivados apenas para tamanho e compressão.
  assets: {
    logo: {
      src: '/brand/roberta-cunha-escuro.png',
      alt: 'Roberta Cunha — psicóloga',
      width: 1351,
      height: 810,
    },
    hero: {
      src: '/images/roberta-retrato-853.webp',
      alt: 'Roberta Cunha sorrindo, sentada em uma poltrona no consultório',
      width: 853,
      height: 1280,
      srcSet:
        '/images/roberta-retrato-400.webp 400w, /images/roberta-retrato-640.webp 640w, /images/roberta-retrato-853.webp 853w',
      avifSrcSet:
        '/images/roberta-retrato-400.avif 400w, /images/roberta-retrato-640.avif 640w, /images/roberta-retrato-853.avif 853w',
      sizes:
        '(max-width: 700px) calc(100vw - 55px), (max-width: 1350px) 44vw, 530px',
    },
    about: {
      src: '/images/roberta-consultorio-853.webp',
      alt: 'Roberta Cunha sentada no sofá do consultório',
      width: 853,
      height: 1280,
      srcSet:
        '/images/roberta-consultorio-400.webp 400w, /images/roberta-consultorio-640.webp 640w, /images/roberta-consultorio-853.webp 853w',
      avifSrcSet:
        '/images/roberta-consultorio-400.avif 400w, /images/roberta-consultorio-640.avif 640w, /images/roberta-consultorio-853.avif 853w',
      sizes:
        '(max-width: 700px) calc(100vw - 55px), (max-width: 1350px) 44vw, 530px',
    },
    favicon: { src: '/brand/favicon.png', alt: '', width: 64, height: 64 },
    social: null,
  } as Record<
    'logo' | 'hero' | 'about' | 'favicon' | 'social',
    null | {
      src: string;
      alt: string;
      width: number;
      height: number;
      srcSet?: string;
      avifSrcSet?: string;
      sizes?: string;
    }
  >,
  // Nenhuma integração externa está ativa. Ativação exige revisão de privacidade.
  integrations: {
    ga4: '',
    gtm: '',
    searchConsole: '',
    metaPixel: '',
    marketingEnabled: false,
  },
};
export const messages = {
  general:
    'Olá, Roberta! Conheci seu site e gostaria de saber mais sobre os atendimentos.',
  therapy:
    'Olá, Roberta! Gostaria de informações sobre os atendimentos de psicoterapia.',
  assessment:
    'Olá, Roberta! Gostaria de informações sobre avaliação neuropsicológica.',
};
export type ContactKind = keyof typeof messages;
export const whatsapp = (kind: ContactKind = 'general') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(messages[kind])}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
export const navigation = [
  ['Atendimentos', 'servicos'],
  ['Sobre a Roberta', 'sobre'],
  ['Dúvidas', 'faq'],
  ['Contato', 'contato'],
];
export const services = [
  {
    id: 'psicoterapia',
    number: '01',
    title: 'Psicoterapia',
    eyebrow: 'Um espaço para se escutar',
    description:
      'Um acompanhamento que acolhe a sua história e ajuda a compreender pensamentos, emoções e comportamentos, respeitando o seu tempo e as suas particularidades.',
    tags: ['Autoconhecimento', 'Emoções', 'Relações'],
    kind: 'therapy' as ContactKind,
    cta: 'Agendar atendimento de psicoterapia',
    detail:
      'A Terapia Cognitivo-Comportamental (TCC) busca compreender as relações entre o que pensamos, sentimos e fazemos. No acompanhamento, essa compreensão pode apoiar a construção de estratégias para lidar com os desafios do cotidiano.',
    extra:
      'Ansiedade, autoestima, dificuldades emocionais e relacionamentos podem ser temas do acompanhamento. Na infância e adolescência, questões de comportamento e dificuldades escolares são acolhidas conforme a demanda e a fase de desenvolvimento.',
  },
  {
    id: 'avaliacao-neuropsicologica',
    number: '02',
    title: 'Avaliação Neuropsicológica',
    eyebrow: 'Compreender para orientar o cuidado',
    description:
      'Uma investigação cuidadosa do funcionamento cognitivo, emocional e comportamental, que contribui para compreender habilidades, dificuldades e necessidades individuais.',
    tags: ['Atenção e memória', 'Aprendizagem', 'Funções executivas'],
    kind: 'assessment' as ContactKind,
    cta: 'Agendar avaliação neuropsicológica',
    detail:
      'O processo reúne entrevista, instrumentos pertinentes e análise integrada das informações. Pode investigar atenção, memória, linguagem, funções executivas, aprendizagem e aspectos emocionais e comportamentais.',
    extra:
      'A indicação e o percurso são definidos individualmente. A avaliação contribui para a compreensão da demanda e para orientar o cuidado, sem promessas de conclusões ou resultados específicos.',
  },
];
export const process = [
  {
    title: 'O primeiro contato',
    text: 'Pelo WhatsApp, você pode tirar dúvidas sobre os atendimentos e consultar a disponibilidade de horários.',
  },
  {
    title: 'Um olhar para a sua história',
    text: 'O encontro inicial é dedicado à escuta, à compreensão da demanda e ao alinhamento das expectativas.',
  },
  {
    title: 'Um percurso individualizado',
    text: 'Na psicoterapia, o acompanhamento considera as necessidades de cada pessoa. Na avaliação, o processo reúne investigação, análise e devolutiva com orientações.',
  },
];
export const faqs = [
  [
    'Como funciona a primeira sessão de psicoterapia?',
    'É um momento de acolhimento e escuta para compreender a demanda, conhecer o contexto da sua história e conversar sobre as expectativas para o acompanhamento.',
  ],
  [
    'Quanto tempo dura uma sessão?',
    'A duração informada para a sessão de psicoterapia é de aproximadamente 60 minutos. Confirme os detalhes no agendamento.',
  ],
  [
    'Qual é a frequência dos atendimentos?',
    'A frequência é alinhada com a profissional, conforme a demanda e a indicação clínica. A proposta de acompanhamento inicialmente semanal ainda será validada pela Roberta.',
  ],
  [
    'A psicoterapia pode ser realizada online?',
    'O briefing prevê atendimentos presenciais e online. A disponibilidade de cada modalidade por serviço e faixa etária precisa ser confirmada com a profissional.',
  ],
  [
    'A Roberta atende crianças e adolescentes?',
    'O público informado inclui crianças, adolescentes e adultos. A adequação do serviço e da modalidade para cada demanda será confirmada no contato inicial.',
  ],
  [
    'O que é uma avaliação neuropsicológica?',
    'É um processo de investigação do funcionamento cognitivo, emocional e comportamental para compreender habilidades, dificuldades e necessidades individuais.',
  ],
  [
    'Em quais situações a avaliação pode ser indicada?',
    'Quando é necessário compreender melhor questões de atenção, memória, linguagem, aprendizagem ou outras funções cognitivas, em conjunto com aspectos emocionais e comportamentais. A indicação depende de uma análise individual.',
  ],
  [
    'Como funciona o processo de avaliação?',
    'A proposta editorial inclui entrevista inicial, investigação com instrumentos pertinentes, análise integrada e devolutiva com orientações. Procedimentos e documentação serão definidos pela profissional; não há prazo ou número de encontros pré-fixado neste site.',
  ],
  [
    'Qual é a diferença entre psicoterapia e avaliação neuropsicológica?',
    'A psicoterapia envolve acompanhamento ao longo do tempo. A avaliação neuropsicológica é um processo investigativo voltado à compreensão de uma demanda, com integração das informações e devolutiva.',
  ],
  [
    'Como agendar um atendimento?',
    'Entre em contato pelo WhatsApp e informe se deseja conhecer a psicoterapia ou a avaliação neuropsicológica. Não é necessário enviar histórico clínico ou informações sensíveis nessa primeira mensagem.',
  ],
];
