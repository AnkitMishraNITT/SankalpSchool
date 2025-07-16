import React, { useRef } from "react";
import { facultyMembers } from "../FacultyMembers";


const FacultyCard = ({ faculty }) => {
  return (
    <div className="faculty-card">
      <div className="faculty-image">
        <img src={faculty.image} alt={faculty.name} />
      </div>
      <div className="faculty-details">
        <h3 className="faculty-name">{faculty.name}</h3>
        <p className="faculty-subject">{faculty.subject}</p>
        <p className="faculty-experience">{faculty.experience}</p>
      </div>
    </div>
  );
};

function Teachers({ref}) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Slightly more than card width (280px) for smooth scroll
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={ref} className="faculty-container">
      <h1 className="faculty-heading">Faculty</h1>
      <div className="scroll-controls">
        <button
          className="scroll-arrow left-arrow"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          ←
        </button>
        <div className="faculty-scroll-container" ref={scrollRef}>
          <div className="faculty-cards-wrapper">
            {facultyMembers.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
        <button
          className="scroll-arrow right-arrow"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Teachers;
