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
          className="font-['Cormorant_Garamond'] text-2xl font-semibold italic text-slate-900 dark:text-white"
        >
          Betina Olsen
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-14">
            <li>
              <a
                href="#about"
                className="group relative inline-block text-[13px] font-medium tracking-wide text-slate-600 transition-colors duration-300 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400"
              >
                Om meg
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-pink-600 transition-all duration-300 group-hover:w-full dark:bg-pink-400" />
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="group relative inline-block text-[13px] font-medium tracking-wide text-slate-600 transition-colors duration-300 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400"
              >
                Prosjekter
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-pink-600 transition-all duration-300 group-hover:w-full dark:bg-pink-400" />
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="group relative inline-block text-[13px] font-medium tracking-wide text-slate-600 transition-colors duration-300 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400"
              >
                Erfaring
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-pink-600 transition-all duration-300 group-hover:w-full dark:bg-pink-400" />
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="group relative inline-block text-[13px] font-medium tracking-wide text-slate-600 transition-colors duration-300 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400"
              >
                Kompetanse
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-pink-600 transition-all duration-300 group-hover:w-full dark:bg-pink-400" />
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="group relative inline-block text-[13px] font-medium tracking-wide text-slate-600 transition-colors duration-300 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400"
              >
                Kontakt
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-pink-600 transition-all duration-300 group-hover:w-full dark:bg-pink-400" />
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 cursor-pointer"
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
