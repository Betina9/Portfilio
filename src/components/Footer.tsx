function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>© {currentYear} Betina Olsen</p>

        <a
          href="#hero"
          className="font-medium text-slate-600 transition hover:text-pink-600"
        >
          Til toppen
        </a>
      </div>
    </footer>
  );
}

export default Footer;
