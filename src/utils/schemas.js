// src/utils/schemas.js
// ⚠️ Sin barra al final en DOMAIN — afecta todos los @id y URLs generados

import { getCoverImage, getAllFullImages } from "./product-images.js";

const DOMAIN = "https://security-cars.com";

// ============================================================
// Imágenes de marca
//
// - logo:   cuadrado, 512x512 (recomendado por Google para
//           el panel de conocimiento de la organización). osea aparece cuando busca en la lupa el negocio
// - og:     1200x630 (proporción Open Graph). Se usa como
//           imagen de portada en la home, en /tienda, en
//           categorías sin imagen propia y como fallback
//           general. Debe ser LA MISMA que pongas en el
//           <meta property="og:image"> de esas páginas.
// ============================================================
const BRAND_IMAGES = {
  logo: "/logo-schema.png",      // 512x512
  og: "/logo-open-graph.png",          // 1200x630 (home, tienda, categorías, fallback)
};

const BUSINESS = {
  name: "Security Cars",
  telephone: "+51934306764",
  // email: "[EMAIL]",  // descomentar si hay email
  streetAddress: "Av. los Fresnos, La Molina",
  locality: "La Molina",
  region: "Lima",
  postalCode: "15024",
  country: "PE",
  latitude: "-12.099997",
  longitude: "-76.943963",

    // Rango de precios del catálogo (texto libre).
  // Ajusta los valores según tus productos más baratos y más caros.
  priceRange: "S/ 20 - S/ 500",   // ← AÑADIR ESTA LÍNEA

  // Para tienda de repuestos: "AutoPartsStore" es más específico que "AutomotiveBusiness"
  // (es un subtipo de Store, y Google lo reconoce igual de bien para rich results).
  // Otras opciones válidas: Store | OnlineStore | AutomotiveBusiness
  type: "AutoPartsStore",

  openingHours: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:40",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:40",
      closes: "16:00",
    }
  ],

  areaServed: [
    { "@type": "AdministrativeArea", name: "Lima Metropolitana" },
    { "@type": "Country", name: "Perú" },
  ],

  sameAs: [
    "https://www.facebook.com/profile.php?id=100049090133607",
    "https://www.tiktok.com/@securitycars",
  ],

  
  // Enlace real de Google Maps (busca tu tienda, pulsa "Compartir" → copiar enlace)
  hasMap: "https://maps.app.goo.gl/7FZW6HKHoPaaXhUA9",
};


// ============================================================
// Helpers compartidos
// ============================================================

/**
 * Convierte una ruta relativa ("/img/x.webp") en URL absoluta.
 * Devuelve "" si no hay string válido, para no romper el schema.
 */
const toAbsolute = (path) => {
  if (!path || typeof path !== "string") return "";
  return path.startsWith("http") ? path : `${DOMAIN}${path}`;
};

/** Referencia a otra entidad por @id (patrón Google-friendly). */
const ref = (id) => ({ "@id": id });

/**
 * Construye un ImageObject solo si la ruta es válida.
 * `width`/`height` son opcionales: si no se pasan, no se declaran.
 */
const buildImageObject = (path, { width, height } = {}) => {
  const url = toAbsolute(path);
  if (!url) return null;
  return {
    "@type": "ImageObject",
    url,
    ...(width && { width }),
    ...(height && { height }),
  };
};

// ============================================================
// LocalBusiness — entidad principal del negocio
//
// Google recomienda aquí:
//   - logo:  el logo del negocio (Google lo usa en el knowledge panel).
//   - NUNCA usar fotos de productos en estos campos.
// ============================================================
export function getLocalBusinessSchema() {
  const logoUrl = toAbsolute(BRAND_IMAGES.logo);

  return {
    "@context": "https://schema.org",
    "@type": BUSINESS.type,
    "@id": `${DOMAIN}/#localbusiness`,
    name: BUSINESS.name,
    description: "Security Cars es una tienda de accesorios y seguridad vehicular ubicada en La Molina, Lima. Vendemos e instalamos alarmas para auto, GPS 4G con corte de motor remoto, cámaras de retroceso, sensores de estacionamiento, dashcams, insonorizantes, focos LED y más. Cada producto que compras lo instalamos nosotros mismos, para que salgas manejando sin complicarte. Atendemos autos, camionetas y motos, y realizamos envíos a todo el Perú.",
    url: DOMAIN,
    telephone: BUSINESS.telephone,
    // ...(BUSINESS.email && { email: BUSINESS.email }),

    // Logo del negocio
    ...(logoUrl && {
  logo: {
    "@type": "ImageObject",
    url: logoUrl,
    width: 512,
    height: 512,
  },
}),

    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: BUSINESS.openingHours,
    areaServed: BUSINESS.areaServed,
    sameAs: BUSINESS.sameAs,
    currenciesAccepted: "PEN",
    paymentAccepted: "Efectivo, transferencia bancaria, Yape y Plin",
    ...(BUSINESS.priceRange && { priceRange: BUSINESS.priceRange }),
    ...(BUSINESS.hasMap && { hasMap: BUSINESS.hasMap }),
  };
}

// ============================================================
// WebSite — el sitio web como entidad
// (NO lleva imagen propia: WebSite es una entidad abstracta)
// ============================================================
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    name: BUSINESS.name,
    url: DOMAIN,
    inLanguage: "es-PE",
    description: "Tienda online de Security Cars: compra alarmas para auto, GPS, cámaras de retroceso, sensores, dashcams, insonorizantes y focos LED para tu vehículo. Cada producto incluye instalación profesional. Consulta por WhatsApp, compra online y recibe en Lima o a todo el Perú.",
    publisher: ref(`${DOMAIN}/#localbusiness`),
  };
}

// ============================================================
// WebPage — Home (/)
//
// primaryImageOfPage = og.jpg (misma que en <meta property="og:image">).
// Si el archivo no existe, omite el campo entero.
// ============================================================
export function getHomePageSchema() {
  const ogImage = buildImageObject(BRAND_IMAGES.og, { width: 1200, height: 630 });

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${DOMAIN}/#webpage`,
    url: DOMAIN,
    name: "Security Cars | Alarmas, GPS y Accesorios para Auto con Instalación",
    description: "En Security Cars encuentras alarmas para auto, antiasalto por proximidad, GPS con corte de motor remoto, cámaras de retroceso, dashcams, sensores de estacionamiento, insonorizantes y focos LED. Instalamos todo lo que compras en tu auto o camioneta. Envíos a Lima y todo el Perú.",
    inLanguage: "es-PE",
    isPartOf: ref(`${DOMAIN}/#website`),
    about: ref(`${DOMAIN}/#localbusiness`),
    ...(ogImage && { primaryImageOfPage: ogImage }),
  };
}

// ============================================================
// generateProductSchemas — ficha de producto (/tienda/[slug])
//
// Dos casos:
//   - Producto simple: Product (con Offer anidado) + WebPage + Breadcrumb.
//   - Producto con variantes (ej. alarma que solo cambia de modelo/control):
//     ProductGroup + cada variante como Product anidado en `hasVariant`
//     (con su propio Offer) + WebPage + Breadcrumb. Es el patrón que Google
//     documenta para evitar canibalización SEO entre productos casi
//     idénticos: https://developers.google.com/search/docs/appearance/structured-data/product#variants
//     Todas las variantes comparten la MISMA url (`${url}`), porque
//     intencionalmente no existen páginas separadas por variante.
// ============================================================
export function generateProductSchemas(product, categoryName) {
  const {
    slug,
    name,
    productDescription,
    price,
    stock,
    sku,
    category,
    marca,
    variants,
  } = product;

  const url = `${DOMAIN}/tienda/${slug}`;
  const hasVariants = Array.isArray(variants) && variants.length > 1;

  // Imágenes del producto "padre" (que reflejan la primera variante cuando
  // hay variantes — ver products.json). Se usan para el WebPage, igual en
  // ambos casos.
  const cover = getCoverImage(product);
  const fullImage = toAbsolute(cover);

  // Imágenes full-resolution del producto (campo "image", no las miniaturas).
// Se usan tanto para el Product/ProductGroup como para el Offer.
const productImages = getAllFullImages(product).map(toAbsolute).filter(Boolean);

  const normalizePrice = (value) => {
    const n = Number(value);
    if (!Number.isFinite(n) || n < 0) return null;
    return n.toFixed(2);
  };

  let productOrGroupSchema;

  if (hasVariants) {
    const groupId = `${url}/#productgroup`;

    // Cada variante = un Product con su propio sku/imágenes/precio, anidado
    // dentro de hasVariant (patrón exacto documentado por Google, no como
    // scripts JSON-LD separados).
    const variantProducts = variants.map((v) => {
  const variantImages = getAllFullImages(v).map(toAbsolute).filter(Boolean);
  const variantPrice = normalizePrice(v.price ?? price);

  // Lee el atributo que varía según variesBy del producto padre
  const variesByField = Array.isArray(product.variesBy) ? product.variesBy[0] : "model";
  const additionalProperty = v[variesByField]
    ? {
        additionalProperty: {
          "@type": "PropertyValue",
          name: variesByField,
          value: v[variesByField],
        },
      }
    : {};

  return {
    "@type": "Product",
    "@id": `${url}/#product-${v.id}`,
    name: `${name} - ${v.label}`,
    sku: v.sku,
    ...(variantImages.length > 0 && { image: variantImages }),
    ...additionalProperty, // ← esto es lo nuevo
    offers: {
      "@type": "Offer",
      "@id": `${url}/#offer-${v.id}`,
      url,
      priceCurrency: "PEN",
      ...(variantPrice !== null && { price: variantPrice }),
      availability: stock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: ref(`${DOMAIN}/#localbusiness`),
    },
  };
});

    productOrGroupSchema = {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "@id": groupId,
      name,
      description: productDescription,
      url,
      productGroupID: slug,
      // "sku" porque es lo que objetivamente cambia entre variantes en este
      // catálogo (modelo/control). Si en el futuro agrupas por color o
      // talla en vez de modelo, cambia esto a ["color"] o ["size"].
      variesBy: Array.isArray(product.variesBy) && product.variesBy.length > 0
  ? product.variesBy
  : ["model"],
      brand: { "@type": "Brand", name: marca || "Genérico" },
      ...(category && { category: categoryName || category }),
      ...(productImages.length > 0 && { image: productImages }),
      hasVariant: variantProducts,
    };
  } else {
    // ----- Producto simple: Product + Offer, como antes -----
    const normalizedPrice = normalizePrice(price);

    productOrGroupSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${url}/#product`,
      name,
      description: productDescription,
      ...(productImages.length > 0 && { image: productImages }),
            ...(sku && { mpn: sku }),  // Google recomienda usar mpn si no hay GTIN
      brand: { "@type": "Brand", name: marca || "Genérico" },
      ...(category && { category: categoryName || category }),
      offers: {
        "@type": "Offer",
        "@id": `${url}/#offer`,
        url,
        priceCurrency: "PEN",
        ...(normalizedPrice !== null && { price: normalizedPrice }),
        availability: stock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: ref(`${DOMAIN}/#localbusiness`),
      },
    };
  }

  // ----- WebPage -----
  // primaryImageOfPage = foto GRANDE del producto (o de la primera variante).
  // NO declaramos width/height: cada proveedor sube imágenes con
  // dimensiones distintas y no las conocemos a priori.
  const primaryImage = fullImage
    ? { "@type": "ImageObject", url: fullImage }
    : null;

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    description: productDescription,
    inLanguage: "es-PE",
    isPartOf: ref(`${DOMAIN}/#website`),
    about: ref(hasVariants ? `${url}/#productgroup` : `${url}/#product`),
    ...(primaryImage && { primaryImageOfPage: primaryImage }),
    breadcrumb: ref(`${url}/#breadcrumb`),
  };

  // ----- Breadcrumb -----
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Inicio", item: DOMAIN },
    { "@type": "ListItem", position: 2, name: "Tienda", item: `${DOMAIN}/tienda` },
  ];
  if (category && categoryName) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 3,
      name: categoryName,
      item: `${DOMAIN}/categoria/${category}`,
    });
  }
  breadcrumbItems.push({
    "@type": "ListItem",
    position: breadcrumbItems.length + 1,
    name,
    item: url,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumb`,
    itemListElement: breadcrumbItems,
  };

  return [productOrGroupSchema, webpageSchema, breadcrumbSchema];
}

// ============================================================
// generateCategorySchemas — listado de categoría (/categoria/[slug])
// Genera: ItemList + CollectionPage + Breadcrumb
// ============================================================
export function generateCategorySchemas(category, categoryProducts) {
  const { slug, name, description } = category;
  const url = `${DOMAIN}/categoria/${slug}`;

  // Imagen de portada para la categoría:
  //   - si la categoría trae `image` propia, se usa
  //   - si no, se usa la imagen de marca compartida (og.jpg)
  const primaryImage = buildImageObject(category.image || BRAND_IMAGES.og, {
    width: 1200,
    height: 630,
  });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}/#itemlist`,
    name: `Productos en ${name}`,
    itemListElement: categoryProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${DOMAIN}/tienda/${p.slug}`,
      ...(p.name && { name: p.name }),
    })),
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    description: description || `Encuentra ${name} al mejor precio.`,
    inLanguage: "es-PE",
    isPartOf: ref(`${DOMAIN}/#website`),
    mainEntity: ref(`${url}/#itemlist`),
    ...(primaryImage && { primaryImageOfPage: primaryImage }),
    breadcrumb: ref(`${url}/#breadcrumb`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: DOMAIN },
      { "@type": "ListItem", position: 2, name, item: url },
    ],
  };

  return [itemListSchema, webpageSchema, breadcrumbSchema];
}

// ============================================================
// generateStoreSchemas — listado general (/tienda)
// Genera: CollectionPage + Breadcrumb (sin ItemList completo,
// porque el catálogo entero puede ser grande; Google ya lo indexa
// vía los Product de cada ficha individual).
// ============================================================
export function generateStoreSchemas() {
  const url = `${DOMAIN}/tienda`;

  // Misma imagen de marca que la home.
  // Recuerda usar la MISMA URL en <meta property="og:image"> de esta página.
  const primaryImage = buildImageObject(BRAND_IMAGES.og, {
    width: 1200,
    height: 630,
  });

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}/#webpage`,
    url,
    name: "Tienda",
    description: "Explora el catálogo completo de Security Cars: alarmas, antiasalto, GPS, cámaras de retroceso, sensores de estacionamiento, dashcams, insonorizantes, elevavidrios y más. Todos los productos con instalación profesional incluida en Lima.",
    inLanguage: "es-PE",
    isPartOf: ref(`${DOMAIN}/#website`),
    ...(primaryImage && { primaryImageOfPage: primaryImage }),
    breadcrumb: ref(`${url}/#breadcrumb`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Tienda", item: url },
    ],
  };

  return [webpageSchema, breadcrumbSchema];
}