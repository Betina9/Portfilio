import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-xl font-semibold tracking-tight text-slate-900"
        >
          Betina Olsen
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >
              Om meg
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >
              Prosjekter
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >
              Erfaring
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >
              Kompetanse
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >
              Kontakt
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Åpne meny"
          aria-expanded={isOpen}
          className="text-2xl text-slate-700 md:hidden"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                Om meg
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Prosjekter
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setIsOpen(false)}>
                Erfaring
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>
                Kompetanse
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
