import { generateArticleSchemas } from './schemas';

const DOMAIN = "https://securitycars.com"; // ¡Asegúrate de cambiar esto por tu dominio real!
const BUSINESS_NAME = "Security Cars";

export const ARTICLES = {
  "que-es-el-insonorizante-para-auto": {
    slug: "que-es-el-insonorizante-para-auto",
    title: "¿Qué es el insonorizante para auto y para qué sirve? Guía básica",
    description: "Descubre qué es el insonorizante para auto, para qué sirve y cómo puede ayudarte a reducir el ruido y mejorar la comodidad al conducir.",
    image: "/post1.webp",
    author: "Security Cars",
    publishedDate: "2026-07-29T12:12:00-05:00",
    faq: [
      { question: "¿Cuánto dura la insonorización?", answer: "Entre 1 y 2 días dependiendo de las zonas a tratar." },
    ],
  },
  // Cuando crees un nuevo artículo, solo añades otro bloque aquí
};

export function getArticleSchemasBySlug(slug) {
  const article = ARTICLES[slug];
  if (!article) return [];
  return generateArticleSchemas(article, DOMAIN, BUSINESS_NAME);
}