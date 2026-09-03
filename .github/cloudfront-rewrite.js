// CloudFront Function (viewer-request) asociada a la distribución E3F8LA1GVS2JTB.
//
// Motivo: el sitio es un export estático de Next.js con `trailingSlash: true`,
// así que cada ruta vive en `ruta/index.html`. S3 + CloudFront con OAC solo
// resuelven `index.html` automáticamente en la raíz, NO en subcarpetas. Sin
// esta función, abrir `/oficio/oracion-matutina` (por ejemplo al pegar el
// enlace en un chat, que suele quitar la barra final) devolvía 404.
//
// Esta función reescribe la URI para servir el index.html correcto:
//   /oficio/oracion-matutina   -> /oficio/oracion-matutina/index.html
//   /oficio/oracion-matutina/  -> /oficio/oracion-matutina/index.html
//   /icon.png                  -> (sin cambios: tiene extensión)
//
// Nombre de la función en CloudFront: dailyofficeacc-rewrite (Runtime cloudfront-js-2.0)
// Asociación: DefaultCacheBehavior -> viewer-request.
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Si la URI termina en "/", servir el index.html de esa carpeta.
    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
        return request;
    }

    // Si la URI no tiene extensión (p. ej. /oficio/oracion-matutina),
    // tratarla como carpeta y servir su index.html.
    var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);
    if (lastSegment.indexOf('.') === -1) {
        request.uri = uri + '/index.html';
        return request;
    }

    return request;
}
