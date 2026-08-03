// blog-data.js — Security Cars
import { generateArticleSchemas } from './schemas.js';

// ⚠️ Sin barra al final — se usa para construir URLs en los schemas
export const DOMAIN = "https://security-cars.com";
const BUSINESS_NAME = "Security Cars";

export const ARTICLES = {
  "que-es-el-insonorizante-para-auto": {
    slug: "que-es-el-insonorizante-para-auto",
    title: "¿Qué es el insonorizante para auto y para qué sirve? Guía básica",
    description: "Descubre qué es el insonorizante para auto, para qué sirve y cómo puede ayudarte a reducir el ruido y mejorar la comodidad al conducir.",
    image: "/post1.webp",
    author: BUSINESS_NAME,
    publishedDate: "2026-07-29T12:12:00-05:00",
    modifiedDate: "2026-07-29T12:12:00-05:00",
  },

  // Para agregar un nuevo artículo, copia el bloque de arriba:
  // "slug-del-articulo": {
  //   slug: "slug-del-articulo",
  //   title: "...",
  //   description: "...",
  //   image: "/post2.webp",
  //   author: BUSINESS_NAME,
  //   publishedDate: "...",
  //   modifiedDate: "...",
  // },
};

// Helper — úsalo en cada página de artículo
export function getArticleSchemasBySlug(slug) {
  const article = ARTICLES[slug];
  if (!article) return [];
  return generateArticleSchemas(article, DOMAIN, BUSINESS_NAME);
}