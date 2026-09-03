export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-[var(--color-gold-light)] text-center py-6 px-4 text-sm mt-auto">
      <p className="mb-1">Oficio Diario – Libro de Oración Común 1928 en Español</p>
      <p className="mb-1">Iglesia Anglicana Católica</p>
      <p className="text-[var(--color-gold-light)]/70 text-xs">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://david-barrera.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:text-[var(--color-gold)] transition-colors"
        >
          David Sebastián Barrera Gaona
        </a>
        . Todos los derechos reservados.
      </p>
    </footer>
  );
}
