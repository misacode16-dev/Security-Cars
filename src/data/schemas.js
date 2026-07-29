// ============================================================
// Configuración base (DOMAIN, BUSINESS) – igual que antes
// ============================================================
const DOMAIN = "https://securitycars.com";

const BUSINESS = { name: "Security Cars", alternateName: "Security Cars La Molina", telephone: "+51907300174", email: "[email del taller si disponible]", streetAddress: "Av. los Fresnos, La Molina", locality: "La Molina", region: "Lima", postalCode: "15024", country: "PE", latitude: "-12.099997", longitude: "-76.943963",
  openingHours: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:00", closes: "18:00"},],
  areaServed: [ { "@type": "City", "name": "La Molina" }, { "@type": "City", "name": "Surco" }, { "@type": "City", "name": "Ate" }, { "@type": "City", "name": "Santa Anita" }, { "@type": "City", "name": "Los Olivos" }, { "@type": "City", "name": "San Martin de Porres" }, { "@type": "City", "name": "San Borja" }, { "@type": "City", "name": "Miraflores" }, { "@type": "AdministrativeArea", name: "Lima Metropolitana" }],
  sameAs: [ "https://www.facebook.com/profile.php?id=100049090133607", "https://www.tiktok.com/@securitycars", "https://maps.google.com/?q=Security+Cars+La+Molina"],
};

// ============================================================
// 1. Funciones globales (siempre se usan)
// ============================================================
export function getLocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${DOMAIN}/#localbusiness`,
    parentOrganization: {"@id": `${DOMAIN}/#organization`},
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description:
      "Taller especializado en insonorización de autos, alarmas, GPS y sistemas antiasalto en La Molina, Lima, Perú. Más de 20 años de experiencia. Trabajo profesional garantizado.",
    url: DOMAIN,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email || undefined,
    address: { "@type": "PostalAddress", streetAddress: BUSINESS.streetAddress, addressLocality: BUSINESS.locality, addressRegion: BUSINESS.region, postalCode: BUSINESS.postalCode, addressCountry: BUSINESS.country},
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.latitude, longitude: BUSINESS.longitude},
    openingHoursSpecification: BUSINESS.openingHours,
    areaServed: BUSINESS.areaServed,
    sameAs: BUSINESS.sameAs,
    currenciesAccepted: "PEN",
    paymentAccepted: "Cash, Bank Transfer, Yape, Plin",
    hasMap: "https://maps.google.com/?q=Security+Cars+La+Molina"
  };
  return schema;
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    name: "Security Cars", // Crucial para definir el Nombre del Sitio en Google
    url: DOMAIN,
    inLanguage: "es-PE",
    description:
      "Taller especializado en insonorización, alarmas, GPS y sistemas antiasalto en La Molina, Lima, Perú.",
    publisher: {
      "@id": `${DOMAIN}/#localbusiness`
    }
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${DOMAIN}/#organization`,
    department: {"@id": `${DOMAIN}/#localbusiness`},
    name: "Security Cars",
    url: DOMAIN,
    logo: `${DOMAIN}/logo.png`,
    sameAs: BUSINESS.sameAs
  };
}

// ============================================================
// 2. Generador de schemas para un servicio específico
// ============================================================
/**
 * Genera un array con todos los schemas necesarios para una página de servicio.
 * @param {Object} service - Datos del servicio
 * @param {string} service.slug - Identificador único (ej. "insonorizacion", "gps")
 * @param {string} service.name - Nombre del servicio (ej. "Insonorización de Autos en Lima")
 * @param {string} service.description - Descripción detallada del servicio
 * @param {string} service.image - URL de la imagen principal (Open Graph)
 * @param {string[]} service.alternateNames - Nombres alternativos (para Service)
 * @param {string} service.serviceType - Categoría (ej. "Insonorización Automotriz")
 * @param {string} [service.areaServed="Lima Metropolitana, Perú"] - Zona de servicio
 * @param {string} [service.priceRange] - Rango de precios (opcional)
 * @param {Array<{question: string, answer: string}>} service.faq - Preguntas frecuentes
 * @param {string} [service.publishedDate="2026-07-29T12:12:00-05:00"] - Fecha de publicación
 * @param {string} [service.parentName="Servicios"] - Nombre del padre en el breadcrumb
 * @param {string} [service.parentUrl=`${DOMAIN}/servicios`] - URL del padre en el breadcrumb
 * @returns {Array<Object>} Array de objetos schema (Service, WebPage, Breadcrumb, FAQ)
 */
export function generateServiceSchemas(service) {
  const { slug, name, description, image, alternateNames = [], serviceType = "Servicio Automotriz", areaServed = "Lima Metropolitana, Perú", faq = [], publishedDate = new Date().toISOString(), parentName = "Servicios", parentUrl = `${DOMAIN}/servicios`} = service;

  const url = `${DOMAIN}/servicios/${slug}`;
  const idBase = `${url}`;

  // ----- Service -----
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "@id": `${idBase}/#service`, name: name, alternateName: alternateNames.length > 0 ? alternateNames : undefined, description: description,
    provider: { "@type": "AutomotiveBusiness", name: BUSINESS.name, "@id": `${DOMAIN}/#localbusiness`},
    areaServed: { "@type": "AdministrativeArea", name: areaServed},
    serviceType: serviceType,
    category: "Automotive Service",
    termsOfService: "Trabajo garantizado. Atención postventa disponible.",
    availableChannel: { "@type": "ServiceChannel", serviceUrl: url, servicePhone: BUSINESS.telephone, serviceSmsNumber: BUSINESS.telephone, availableLanguage: "Spanish"}
  };

  // ----- WebPage -----
  const webpageSchema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${idBase}/#webpage`, url: url, name: name, description: description, inLanguage: "es-PE",
    isPartOf: { "@type": "WebSite", "@id": `${DOMAIN}/#website`, name: BUSINESS.name},
    about: { "@type": "Service", "@id": `${idBase}/#service`},
    primaryImageOfPage: { "@type": "ImageObject", url: image, width: 1200, height: 630},
    datePublished: publishedDate,
    breadcrumb: {"@id": `${idBase}/#breadcrumb`}
  };

  // ----- Breadcrumb -----
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${idBase}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: DOMAIN},
      { "@type": "ListItem", position: 2, name: parentName, item: parentUrl},
      { "@type": "ListItem", position: 3, name: name, item: url}
    ]
  };

  // ----- FAQPage (solo si hay preguntas) -----
  let faqSchema = null;
  if (faq.length > 0) {
    faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${idBase}/#faqpage`,
      mainEntity: faq.map(q => ({ "@type": "Question", name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer}
      }))
    };
  }

  // Devolvemos solo los que no sean null
  return [serviceSchema, webpageSchema, breadcrumbSchema, faqSchema].filter(Boolean);
}







export function generateArticleSchemas(article, domain, businessName) {
  const {
    slug,
    title,
    description,
    image,
    author = "Security Cars",
    publishedDate,
    modifiedDate = publishedDate,
    faq = [],
  } = article;

  const url = `${domain}/blog/${slug}`;
  const fullImage = image.startsWith('http') ? image : `${domain}${image}`;

  // ----- BlogPosting -----
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    headline: title,
    description: description,
    image: { "@type": "ImageObject", url: fullImage, width: 1200, height: 630 },
    author: { "@type": "Organization", name: author, "@id": `${domain}/#localbusiness` },
    publisher: { "@id": `${domain}/#localbusiness` },
    datePublished: publishedDate,
    dateModified: modifiedDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}/#webpage` },
    inLanguage: "es-PE",
  };

  // ----- WebPage -----
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url: url,
    name: title,
    description: description,
    inLanguage: "es-PE",
    isPartOf: { "@type": "WebSite", "@id": `${domain}/#website`, name: businessName },
    primaryImageOfPage: { "@type": "ImageObject", url: fullImage, width: 1200, height: 630 },
    datePublished: publishedDate,
    dateModified: modifiedDate,
    breadcrumb: { "@id": `${url}/#breadcrumb` },
  };

  // ----- Breadcrumb -----
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: domain },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${domain}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  // ----- FAQPage (solo si hay preguntas) -----
  let faqSchema = null;
  if (faq.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}/#faqpage`,
      mainEntity: faq.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
      })),
    };
  }

  return [articleSchema, webpageSchema, breadcrumbSchema, faqSchema].filter(Boolean);
}