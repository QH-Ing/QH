import Head from "next/head";

export default function SeoHead() {
  return (
    <Head>
      {/* Título principal */}
      <title>QH Ingeniería y Servicios | Bombas hidráulicas en Rosario</title>
      
      <meta name="apple-mobile-web-app-title" content="Q.H." />

      {/* Meta descripción para buscadores */}
      <meta
        name="description"
        content="Mantenimiento e instalación de bombas hidráulicas en Rosario. Soluciones confiables con experiencia profesional."
      />

      {/* Palabras clave (aunque cada vez menos usadas) */}
      <meta
        name="keywords"
        content="bombas hidráulicas, mantenimiento bombas, instalación bombas, Rosario, Santa Fe, QH Ingeniería"
      />

      {/* Autor */}
      <meta name="author" content="QH Ingeniería y Servicios" />

      {/* Viewport para diseño responsivo */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Meta para robots */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph para redes sociales (Facebook, LinkedIn, etc) */}
      <meta property="og:title" content="QH Ingeniería y Servicios" />
      <meta
        property="og:description"
        content="Servicio profesional de mantenimiento e instalación de bombas hidráulicas en Rosario."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://qhingenieria.com" />
      <meta property="og:image" content="https://qhingenieria.com/og-image.jpg" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QH Ingeniería y Servicios" />
      <meta
        name="twitter:description"
        content="Servicio profesional de mantenimiento e instalación de bombas hidráulicas en Rosario."
      />
      <meta name="twitter:image" content="https://qhingenieria.com/twitter-image.jpg" />
    </Head>
  );
}
