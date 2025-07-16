import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Aboutdata/logo.jpg"


function Navbar({ refs, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 484);

  const { home, about, result, teachers,events } = refs;


  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 484);
      if (window.innerWidth > 484) {
        setIsOpen(false); // Close menu on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToDesktop = (ref) => {
    if (ref.current) {
      const navbarHeight = window.innerHeight * 0.25;
      const elementTop = ref.current.offsetTop;

      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };
  const scrollToMobile = (ref) => {
    if (ref.current) {
      const navbarHeight = window.innerHeight * 0.25;
      const elementTop = ref.current.offsetTop;

      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });

      setIsOpen(!isOpen); // Only close on mobile
    }
  };

  return (
    <div className="navcontainer">
      <div className="logocontainer">
        <img src={Logo} alt="logo" />
      </div>

      {isMobile && (
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      )}

      {/* Render correct layout based on device */}
      {isOpen ? (
        isMobile && (
          <div className="barlist">
            <ul>
              <li
                onClick={() => scrollToMobile(home)}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </li>
              <li
                onClick={() => scrollToMobile(about)}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </li>
              <li
                onClick={() => scrollToMobile(result)}
                className={activeSection === "result" ? "active" : ""}
              >
                Result
              </li>
              <li
                onClick={() => scrollToMobile(events)}
                className={activeSection === "events" ? "active" : ""}
              >
                Events
              </li>
              <li
                onClick={() => scrollToMobile(teachers)}
                className={activeSection === "teachers" ? "active" : ""}
              >
                Faculty
              </li>
            </ul>
            <div className="admissiondiv">
              <button
                onClick={() =>
                  window.open("https://forms.gle/RvLF88cBcn6tFEb97", "_blank")
                }
              >
                Admission
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="listcontainer">
          <ul>
            <li
              onClick={() => scrollToDesktop(home)}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => scrollToDesktop(about)}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </li>
            <li
              onClick={() => scrollToDesktop(result)}
              className={activeSection === "result" ? "active" : ""}
            >
              Result
            </li>
            <li
              onClick={() => scrollToDesktop(events)}
              className={activeSection === "events" ? "active" : ""}
            >
              Events
            </li>
            <li
              onClick={() => scrollToDesktop(teachers)}
              className={activeSection === "teachers" ? "active" : ""}
            >
              Teachers
            </li>
          </ul>
          <div className="admissiondiv">
            <button
              onClick={() =>
                window.open("https://forms.gle/RvLF88cBcn6tFEb97", "_blank")
              }
            >
              Admission
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
