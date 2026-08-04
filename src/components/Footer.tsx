function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <p>&copy; {currentYear} Betina Olsen</p>
      </div>
    </footer>
  );
}

export default Footer;
