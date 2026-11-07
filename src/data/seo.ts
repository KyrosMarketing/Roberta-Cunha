import type {
  Graph,
  ImageObject,
  Person,
  Place,
  WebPage,
  WebSite,
} from 'schema-dts';
import { site } from './site';

const root = new URL('/', site.url).href;
const id = (fragment: string) => `${root}#${fragment}`;
const portrait = site.assets.about;

const person: Person = {
  '@type': 'Person',
  '@id': id('person'),
  name: site.name,
  alternateName: site.fullName,
  url: root,
  jobTitle: 'Psicóloga',
  identifier: { '@type': 'PropertyValue', propertyID: 'CRP', value: site.crp },
  description:
    'Roberta Cunha, psicóloga em Curitiba, atua em Psicoterapia e Avaliação Neuropsicológica.',
  sameAs: [site.instagram],
  telephone: `+${site.whatsapp}`,
  email: site.email,
  knowsAbout: ['Psicoterapia', 'Avaliação Neuropsicológica'],
  workLocation: { '@id': id('consultorio') },
  ...(portrait ? { image: { '@id': id('portrait') } } : {}),
};
const office: Place = {
  '@type': 'Place',
  '@id': id('consultorio'),
  name: 'Consultório de Roberta Cunha no Batel',
  address: { '@type': 'PostalAddress', ...site.postalAddress },
};
const website: WebSite = {
  '@type': 'WebSite',
  '@id': id('website'),
  url: root,
  name: site.name,
  description: site.seo.description,
  inLanguage: 'pt-BR',
  publisher: { '@id': id('person') },
};
const webpage: WebPage = {
  '@type': 'WebPage',
  '@id': id('webpage'),
  url: root,
  name: site.seo.title,
  description: site.seo.description,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': id('website') },
  mainEntity: { '@id': id('person') },
  about: { '@id': id('person') },
  ...(portrait ? { primaryImageOfPage: { '@id': id('portrait') } } : {}),
};
const image: ImageObject | undefined = portrait
  ? {
      '@type': 'ImageObject',
      '@id': id('portrait'),
      url: new URL(portrait.src, root).href,
      contentUrl: new URL(portrait.src, root).href,
      caption: portrait.alt,
      width: {
        '@type': 'QuantitativeValue',
        value: portrait.width,
        unitText: 'px',
      },
      height: {
        '@type': 'QuantitativeValue',
        value: portrait.height,
        unitText: 'px',
      },
    }
  : undefined;

// Identificadores conectam a mesma identidade; sem avaliações, preços ou credenciais inventadas.
export const homeStructuredData: Graph = {
  '@context': 'https://schema.org',
  '@graph': [person, office, website, webpage, ...(image ? [image] : [])],
};
