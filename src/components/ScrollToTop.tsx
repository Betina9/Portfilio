import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#hero"
      aria-label="Til toppen"
      title="Til toppen"
      className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600 text-lg font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-700 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      ↑
    </a>
  );
}

export default ScrollToTop;
