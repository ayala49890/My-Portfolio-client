import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const profile = useSelector((state) => state.profile.data);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "experience", "contact"];

    function onScroll() {
      const scrollPosition = window.scrollY + 120;

      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      if (nearBottom) {
        setActiveSection("contact");
        return;
      }

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    }


    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="bg-[#0e1a20] text-white fixed top-0 w-full z-50 shadow">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#fce8c7]">{profile.fullName}</h1>
        <ul className="flex space-x-6 text-[#fce8c7] font-medium">
          {["home", "about", "experience", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`hover:underline ${activeSection === section ? "border-b-2 border-[#fce8c7]" : ""
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
