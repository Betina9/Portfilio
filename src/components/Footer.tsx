function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} Betina Olsen
        </p>
      </div>
    </footer>
  );
}

export default Footer;
