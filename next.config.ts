import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera un sitio estático (HTML/CSS/JS) en la carpeta `out/`,
  // apto para servir desde S3 + CloudFront sin servidor.
  output: "export",

  // Requerido para export estático: desactiva el optimizador de imágenes
  // de Next (que necesita un servidor). Las imágenes se sirven tal cual.
  images: {
    unoptimized: true,
  },

  // Emite `ruta/index.html` en vez de `ruta.html`, lo que simplifica el
  // enrutamiento en S3/CloudFront.
  trailingSlash: true,
};

export default nextConfig;
