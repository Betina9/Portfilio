function Header() {
  return (
    <header className="w-full border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          <a href="#hero">Betina Olsen</a>
        </h1>

        <ul className="flex items-center gap-8">
          <li>
            <a href="#about">Om meg</a>
          </li>
          <li>
            <a href="#projects">Prosjekter</a>
          </li>
          <li>
            <a href="#experience">Erfaring</a>
          </li>
          <li>
            <a href="#skills">Kompetanse</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
