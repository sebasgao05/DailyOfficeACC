import type { MetadataRoute } from "next";
import { psalms } from "@/data/psalms";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://d39xew2a81v4n8.cloudfront.net";

export const dynamic = "force-static";

// Rutas estáticas principales de la aplicación.
const STATIC_ROUTES = [
  "",
  "/oficio/oracion-matutina",
  "/oficio/oracion-vespertina",
  "/oficio/prima",
  "/oficio/tercia",
  "/oficio/sexta",
  "/oficio/nona",
  "/oficio/mediodia",
  "/oficio/completas",
  "/oficios-horarios",
  "/kalendario",
  "/leccionario",
  "/salterio",
  "/colectas",
  "/oraciones",
  "/letania",
  "/familia",
  "/santa-comunion",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const psalmEntries: MetadataRoute.Sitemap = psalms.map((p) => ({
    url: `${SITE_URL}/salterio/${p.number}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...psalmEntries];
}
