import React, { useState, useEffect } from "react";
import Home1 from "../assets/Homedata/home1.jpg"
import Home2 from "../assets/Homedata/home2.jpg"
import Home3 from "../assets/Homedata/home3.jpg"



function Carausel({ref}) {
  const images = [
    {
      src: Home1,
      caption:
        "Quality Education with Strong Values Shaping Bright Minds for a Better Tomorrow",
    },
    {
      src: Home2,
      caption:
        "Quality Education with Strong Values Shaping Bright Minds for a Better Tomorrow",
    },
    {
      src: Home3,
      caption:
        "Quality Education with Strong Values Shaping Bright Minds for a Better Tomorrow",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div ref={ref} className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}>
        ⟨
      </button>

      <div className="carousel-slide">
        <img
          src={images[current].src}
          alt={`Slide ${current}`}
          className="carousel-image"
        />
        <div className="carousel-caption">{images[current].caption}</div>
      </div>

      <button className="carousel-button right" onClick={nextSlide}>
        ⟩
      </button>
    </div>
  );
}

export default Carausel;
