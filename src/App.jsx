import React, { useRef, useState, useEffect } from "react";
import About1 from "./Components/About1";
import Carausel from "./Components/Carausel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Result12th from "./Components/Result12th";
import Teachers from "./Components/Teachers";
import "./App.css";
import Events from "./Components/Events";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resultRef = useRef(null);
  const teachersRef = useRef(null);
  const footerRef = useRef(null);
  const eventRef=useRef(null)
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, id: "home" },
        { ref: aboutRef, id: "about" },
        { ref: resultRef, id: "result" },
        { ref: teachersRef, id: "teachers" },
        { ref: footerRef, id: "footer" },
        {ref:eventRef,id:"events"}
      ];

      // Get current scroll position (center of viewport)
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which section is currently at the center
      let active = "home";
      let lastVisible = "home";

      for (const { ref, id } of sections) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;

          // Check if section is at least partially visible
          if (scrollPosition >= offsetTop) {
            lastVisible = id;
          }

          // Check if section is centered
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            active = id;
            break;
          }
        }
      }

      // If no centered section found, use the last visible one
      if (active === "home" && scrollPosition > window.innerHeight) {
        active = lastVisible;
      }

      // Only update if changed
      if (active !== activeSection) {
        setActiveSection(active);
      }
    };

    // Add debounce to improve performance
    const debouncedScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", debouncedScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [activeSection]);

  return (
    <div className="rootcontainer">
      <Navbar
        refs={{
          home: homeRef,
          about: aboutRef,
          result: resultRef,
          teachers: teachersRef,
          events:eventRef
        }}
        activeSection={activeSection}
      />

      <main>
        <Carausel ref={homeRef} />
        <About1 ref={aboutRef} />
        
          <Result12th ref={resultRef} />
         <Events ref={eventRef}/>
     
        <Teachers ref={teachersRef} />
        
          <Footer />
      </main>
    </div>
  );
}

export default App;
