// services-data.js
import { generateServiceSchemas } from './schemas';

export const SERVICES = {
  insonorizacion: {
    slug: "insonorizacion",
    name: "Insonorización de Autos en Lima",
    description: "Instalación profesional de materiales acústicos y térmicos (butilo, espuma CCF, MLV) en puertas, piso, techo, capó y maletero. Reduce ruido, vibraciones y calor interior. Trabajo garantizado.",
    image: "og-insonorizante.webp",
    alternateNames: ["Insonorización automotriz Lima", "Instalación de insonorizante para autos", "Aislamiento acústico vehicular Lima"],
    serviceType: "Insonorización Automotriz",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      { question: "¿Cuánto Demora insonorizar un auto en Lima?", answer: "Depende de las zonas a tratar. Un tratamiento de solo puertas delanteras puede tomar entre 2 y 3 horas (dependiendo que tan sucio estén las puertas). Las cuatro puertas pueden demorar entre 3 y 4 horas. Si se incluye piso, puertas y techo, maletero y puerta del maletero, el trabajo puede extenderse entre 1 o 2 días dependiendo del modelo del vehículo y su estado." },
      { question: "¿Cuánto se nota realmente la diferencia después de insonorizar un auto?", answer: "La diferencia es notable desde el momento en que se sube al vehículo: al cerrar las puertas notarás un cambio, como si estuvieras subiendo a un vehículo de alta gama. Los materiales de insonorización, especialmente el butilo en combinación con espuma de celda cerrada (CCF), pueden reducir la energía sonora percibida entre un 30% y 60% en las zonas tratadas. En términos prácticos: las puertas dejan de vibrar con los parlantes del equipo de audio, el ruido de llantas a velocidad de autopista disminuye claramente, el ruido de claxon o bocina de los demás vehículos se reduce enormemente evitando la contaminación sónica que viene de la calle, el interior se siente más 'sólido' y confortante (las puertas cierran con sonido denso en lugar de hueco), y en tratamientos de piso y techo el calor ya no penetra tanto al vehículo, con lo cual el aire acondicionado rinde más y genera un ambiente agradable para el viaje." },
      { question: "¿La insonorización dura toda la vida del auto o hay que rehacerla con el tiempo?", answer: "Los materiales de insonorización automotriz, cuando se instalan correctamente, son permanentes y no requieren mantenimiento. El butilo vulcanizado y la espuma de celda cerrada no se degradan por calor, humedad ni vibración en condiciones normales de uso. A diferencia de los amortiguadores o las pastillas de freno, la insonorización no tiene vida útil fija. Una instalación profesional realizada hoy debería durar lo que dure el vehículo." },
      { question: "¿La insonorización de puertas realmente mejora el sonido del equipo de audio o es solo marketing?", answer: "No es marketing, es acústica básica. Un altavoz necesita una caja cerrada detrás para funcionar correctamente. La puerta de un auto sin tratar tiene agujeros, plásticos sueltos y metal que vibra --- todo eso cancela parcialmente la señal del altavoz y genera distorsión a volúmenes medios-altos. En términos prácticos: al insonorizar las puertas se crea una caja acústica para los parlantes, lo que se traduce en mejor calidad de sonido dentro del vehículo." },
      { question: "¿Vale la pena insonorizar el vehículo?", answer: "Por supuesto. Estos son 5 beneficios de insonorizar tu vehículo: 1) Menos estrés y fatiga al manejar, ya que se reduce la contaminación sónica generada por otros vehículos, camiones, motos y bocinas, logrando viajes más tranquilos que disminuyen el cansancio mental del conductor y los pasajeros. 2) Comunicación clara dentro del vehículo, incluso al hablar por teléfono, sin necesidad de gritar ni subir el volumen. 3) Mejora del sistema de audio, ya que al insonorizar las puertas se crea un cajón acústico para cada parlante, evitando las vibraciones en la lata y el plástico sin necesidad de gastar en parlantes costosos. 4) Mejor rendimiento del aire acondicionado, que con techo, puertas y piso insonorizados puede rendir hasta un 40-50% mejor. 5) Mayor valor de reventa, ya que un vehículo silencioso y confortable por dentro se convierte en la opción más atractiva frente a otros del mismo modelo. Insonorizar el vehículo no es un gasto, es una inversión con muchos beneficios." },
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },
  // ============================================================
  // ALARMA PARA AUTO
  // Keywords consolidadas (sin duplicados, sin canibalización):
  // - Intención principal: instalación de alarmas para autos
  // - Eliminadas: variantes "coche/carro" redundantes con "auto",
  //   "tienda/venta" (no es e-commerce), "cierre centralizado" (otro servicio)
  // ============================================================
  alarma: {
    slug: "alarma",
    name: "Alarma para Auto en Lima",
    description: "Instalación profesional de alarmas para auto. Sistemas básicos y Full Plus con antiasalto integrado, sensor de golpe graduable, sirena de alta potencia y encendido a distancia. Trabajo garantizado, precios económicos.",
    image: "/og-alarma.webp",
    alternateNames: [
      "Instalación de alarmas para autos Lima",
      "Alarmas vehiculares Lima",
      "Sistema de alarma para auto La Molina"
    ],
    serviceType: "Instalación de Alarmas Automotrices",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Qué tipos de alarma para auto instalan en Security Cars?",
        answer: "Instalamos cuatro modelos: Alarma Básica (protección por apertura, capó y sensor de golpe; el equipo incluye 2 controles), Alarma Full Plus (incluye antiasalto, bloqueo de encendido por estacionamiento y código de seguridad), Alarma Básica Integrada (compatible con el control original del vehículo, con protección por apertura de puertas, capó y golpes) y Alarma Integrada Full Plus (compatible con el control original del vehículo y vehículos con botón de encendido, con antiasalto y protección por golpe y apertura de puertas y capó)."
      },
      {
        question: "¿Cuánto cuesta instalar una alarma para auto en Lima?",
        answer: "El precio varía según el modelo de alarma que elijas y también según el modelo de vehículo. Tenemos opciones desde sistemas básicos hasta alarmas Full Plus con antiasalto integrado y código de seguridad. Escríbenos por WhatsApp al 934 306 764 para darte una cotización exacta según tu vehículo y sus requerimientos."
      },
      {
        question: "¿La instalación de alarma daña el cableado de mi auto?",
        answer: "No. Trabajamos con técnicos especializados que respetan el cableado original del vehículo. El resultado es una instalación limpia, ordenada y sin cables sueltos o colgando."
      },
      {
        question: "¿Instalan alarmas a domicilio en Lima?",
        answer: "Sí, realizamos instalaciones a domicilio en La Molina y distritos cercanos como Surco, Ate, San Borja, Miraflores, San Miguel, Los Olivos y Chorrillos, previa coordinación. También puedes traer tu vehículo directamente a nuestro taller en La Molina."
      },
      {
        question: "¿La alarma Full Plus sirve como antiasalto?",
        answer: "Sí. La Alarma Full Plus incluye función antiasalto: si te obligan a bajar del vehículo, el motor se apaga automáticamente al minuto y medio. Además cuenta con bloqueo de encendido por estacionamiento y le añadimos un código de seguridad."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },

  // ============================================================
  // GPS PARA AUTO
  // Keywords consolidadas:
  // - Intención principal: instalación y rastreo GPS vehicular
  // - Eliminadas: "gps para camiones" (diferente segmento),
  //   "gps con corta corriente" (puede confundirse con antiasalto),
  //   variantes idénticas de precio/instalación
  // ============================================================
  gps: {
    slug: "gps",
    name: "GPS para Auto en Lima",
    description: "Instalación de GPS 4G para autos. Rastreo en tiempo real desde tu celular, corte de motor remoto, alertas de encendido y batería interna de respaldo. Pago único de por vida, sin mensualidad. Compatible con flotas.",
    image: "/og-gps.webp",
    alternateNames: [
      "Rastreador GPS para autos Lima",
      "GPS tracker vehicular Lima",
      "Sistema de rastreo GPS La Molina"
    ],
    serviceType: "Instalación de GPS Vehicular",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Si desconectan los cables de la batería del auto el GPS sigue funcionando?",
        answer: "Sí. Nuestros equipos de GPS 4G Alsama cuentan con una batería interna de respaldo que mantiene el rastreo activo por varias horas, aunque desconecten la batería principal del vehículo."
      },
      {
        question: "¿Instalar el GPS afecta la garantía de mi auto nuevo?",
        answer: "No. Trabajamos con concesionarios de vehículos nuevos y realizamos instalaciones técnicas especializadas que no alteran el sistema eléctrico original del vehículo, manteniendo tu garantía de fábrica intacta."
      },
      {
        question: "¿Puedo rastrear varios vehículos desde el mismo aplicativo?",
        answer: "Sí. Puedes visualizar toda tu flota de vehículos desde el aplicativo, computadora o tablet bajo un mismo usuario."
      },
      {
        question: "¿Qué alertas envía el GPS a mi celular?",
        answer: "Nuestros equipos de GPS 4G Alsama envían múltiples alertas, por ejemplo: si alguien enciende el motor sin tu permiso, si golpean el vehículo, si se viola la chapa de encendido y si desconectan la batería del vehículo. También puedes hacer un corte de motor remoto desde tu celular en caso de robo."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },

  // ============================================================
  // ANTIASALTO PARA AUTO
  // Keywords consolidadas:
  // - Intención principal: sistema corta corriente / antiasalto
  // - Eliminadas: variantes exactas duplicadas ("corta corriente a distancia"
  //   aparece dos veces en el archivo original), "cortacorrientes coche"
  //   (mismo concepto), "corta corriente vehiculo/vehiculos" (redundante)
  // - Nota: "gps con corta corriente" se deja en GPS, no aquí
  // ============================================================
  antiasalto: {
    slug: "antiasalto",
    name: "Antiasalto para Auto en Lima",
    description: "Instalación de sistema antiasalto con corta corriente inteligente. Protección modo antiatraco: si te bajan del vehículo el motor se apaga automáticamente al minuto y medio. Bloqueo de encendido por estacionamiento y modo Valet. Trabajo garantizado.",
    image: "/og-antiasalto.webp",
    alternateNames: [
      "Corta corriente para auto Lima",
      "Sistema antiasalto vehicular Lima",
      "Antiasalto por proximidad La Molina"
    ],
    serviceType: "Instalación de Sistema Antiasalto Vehicular",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Qué es el antiAsalto por proximidad y cómo funciona?",
        answer: "Es un sistema que detecta la presencia del conductor mediante un chip o control de proximidad. Por ejemplo: al estacionar, el sistema se activa automáticamente después de un minuto y medio bloqueando el motor, de esta manera si algún intruso intenta encender el motor no va a poder hacerlo, ya que el chip no está cerca del vehículo. Otro ejemplo: si te bajan forzosamente del vehículo, el ladrón puede llevarse tu carro, pero el motor se apagará al minuto y medio, evitando que terminen de llevárselo. Con este sistema no tienes que presionar ningún botón, trabaja por distancia; en algunos países se le conoce como antirrobo por distancia, transceiver, corte de corriente por distancia o antiasalto por presencia."
      },
      {
        question: "¿Es peligroso que el motor se apague mientras el auto está en marcha?",
        answer: "No. El protocolo de apagado es progresivo y emite alertas sonoras previas, lo que permite una detención segura que prioriza tanto la seguridad vial como la integridad del conductor."
      },
      {
        question: "¿Afecta la garantía de mi auto nuevo?",
        answer: "No. La instalación la realizan técnicos especializados que no alteran el sistema eléctrico original del vehículo."
      },
      {
        question: "¿Qué pasa si pierdo el chip o control de proximidad?",
        answer: "El sistema cuenta con un método de desactivación de emergencia que el técnico te enseña en el momento de la instalación."
      },
      {
        question: "¿Qué es el modo Valet del antiasalto?",
        answer: "El modo Valet te permite entregar tu auto a mantenimiento sin revelar tu sistema de seguridad. El sistema permanece oculto y bajo tu control absoluto. Lo reactivas cuando retiras el vehículo del mantenimiento."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },

  // ============================================================
  // ALZAVIDRIOS ELÉCTRICOS
  // Keywords consolidadas:
  // - Intención principal: reparación e instalación de alzavidrios
  // - Eliminadas: "kit de/para vidrios eléctricos" (producto, no servicio),
  //   "motores para vidrios eléctricos universales" (variante de "motores de
  //   vidrios eléctricos"), "alza vidrios eléctrico" = "alzavidrios eléctricos"
  // ============================================================
  alzavidrios: {
    slug: "alzavidrios",
    name: "Alzavidrios Eléctricos para Auto en Lima",
    description: "Reparación e instalación de alzavidrios eléctricos (elevalunas). Solucionamos vidrios que no suben, motores que suenan sin funcionar y sistemas lentos. También convertimos sistemas manuales a eléctricos. Servicio a domicilio disponible.",
    image: "/og-alzavidrio.webp",
    alternateNames: [
      "Elevalunas eléctrico Lima",
      "Vidrios eléctricos para auto La Molina",
      "Reparación de alzavidrios Lima"
    ],
    serviceType: "Reparación e Instalación de Alzavidrios Eléctricos",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Qué fallas de alzavidrios eléctricos reparan?",
        answer: "Reparamos mecanismos que no suben ni bajan (falla de motor o mecanismo interno), motores que suenan pero no funcionan (daño en cables o engranajes) y vidrios lentos o forzados (falta de mantenimiento o fallo del sistema)."
      },
      {
        question: "¿Pueden instalar alzavidrios eléctricos si mi auto tiene sistema manual?",
        answer: "Sí. Convertimos sistemas manuales a eléctricos con kits universales para 2 y 4 puertas. La instalación queda limpia y sin modificar el cableado original del vehículo."
      },
      {
        question: "¿Cuánto cuesta reparar un alzavidrio eléctrico en Lima?",
        answer: "El precio depende de si es una reparación (cables, poleas, piezas dañadas) o una instalación nueva. Revisamos el sistema antes de reemplazar cualquier pieza para darte la solución más económica. Escríbenos al 934 306 764 para cotizar."
      },
      {
        question: "¿Hacen servicio de adaptación de alzavidrios a domicilio?",
        answer: "Sí. Vamos a tu casa o lugar de trabajo en La Molina y distritos cercanos como Surco, Ate, San Borja, Miraflores, San Miguel y Los Olivos."
      },
      {
        question: "¿Cuánto tiempo tarda la reparación de un alzavidrio?",
        answer: "La mayoría de reparaciones se resuelven el mismo día. Si es una instalación nueva de sistema eléctrico, el tiempo varía según el número de puertas. Te damos el tiempo exacto al momento de la evaluación."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },

  // ============================================================
  // PESTILLOS ELÉCTRICOS / CIERRE CENTRALIZADO
  // Keywords consolidadas:
  // - Intención principal: instalación y reparación de cierre centralizado
  // - Eliminadas: variantes "coche" redundantes con "auto",
  //   "cierre centralizado de puertas para autos" = "cierre centralizado para autos",
  //   variantes de número de puertas consolidadas en una keyword
  // - Nota: "instalación de cierre centralizado y alarma" se dejó en ALARMA
  //   para evitar canibalización
  // ============================================================
  pestillos: {
    slug: "pestillos",
    name: "Pestillos Eléctricos y Cierre Centralizado en Lima",
    description: "Reparación e instalación de pestillos eléctricos y cierre centralizado para autos. Solucionamos puertas que no cierran, ruidos en seguros y sistemas intermitentes. Instalamos cierre centralizado universal para 2, 4 y 5 puertas. Trabajo garantizado.",
    image: "/og-pestillo.webp",
    alternateNames: [
      "Cierre centralizado para autos Lima",
      "Pestillos eléctricos para autos La Molina",
      "Instalación cierre centralizado Lima"
    ],
    serviceType: "Instalación y Reparación de Cierre Centralizado",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Qué problemas de cierre centralizado reparan?",
        answer: "Reparamos puertas que no cierran con el control remoto, ruidos molestos en los seguros (señal de que el motor del pestillo está fallando) y seguros lentos o intermitentes."
      },
      {
        question: "¿Instalan cierre centralizado universal?",
        answer: "Sí. Instalamos sistemas de cierre centralizado universal para 2, 4 y 5 puertas. El kit incluye todo lo necesario y la instalación queda integrada con el sistema eléctrico del vehículo."
      },
      {
        question: "¿Cuánto cuesta instalar cierre centralizado en Lima?",
        answer: "El precio varía según el número de puertas y si es reparación o instalación nueva. Escríbenos al 934 306 764 para una cotización exacta según tu modelo de auto."
      },
      {
        question: "¿La instalación de cierre centralizado consume batería?",
        answer: "No, si se instala correctamente."
      },
      {
        question: "¿En qué se diferencia el pestillo eléctrico del cierre centralizado?",
        answer: "El pestillo eléctrico es el actuador o solenoide individual de cada puerta (el mecanismo o motor que mueve el seguro). El cierre centralizado es el sistema o conjunto completo que controla los 4 seguros de las puertas, o todos los pestillos a la vez, desde un mando a distancia o al arrancar el motor."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },
};

// Función auxiliar para obtener todos los schemas de un servicio dado su clave
export function getServiceSchemasByKey(key) {
  const service = SERVICES[key];
  if (!service) return [];
  return generateServiceSchemas(service);
}