import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Betina Olsen
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#about"
                className="text-sm font-medium text-slate-600 transition hover:text-pink-600 dark:text-slate-300"
              >
                Om meg
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-sm font-medium text-slate-600 transition hover:text-pink-600 dark:text-slate-300"
              >
                Prosjekter
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="text-sm font-medium text-slate-600 transition hover:text-pink-600 dark:text-slate-300"
              >
                Erfaring
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="text-sm font-medium text-slate-600 transition hover:text-pink-600 dark:text-slate-300"
              >
                Kompetanse
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-slate-600 transition hover:text-pink-600 dark:text-slate-300"
              >
                Kontakt
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700"
            aria-label="Bytt fargetema"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Åpne meny"
          aria-expanded={isOpen}
          className="text-2xl text-slate-700 dark:text-slate-200 md:hidden"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;
