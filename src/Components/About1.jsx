import Director from "../assets/Aboutdata/director.jpg"
import Logo from "../assets/Aboutdata/logo.jpg"
import Principle from "../assets/Aboutdata/principle.jpg"

function About1({ ref }) {
  return (
    <>
      <div ref={ref} className="about-container-1">
        <div className="about-left">
          <h2>Sankalp Sr. Sec. School, Hathideh</h2>
          <p>
            We are a senior secondary school that offers quality education in
            both Hindi and English mediums up to class 12. Our teachers are
            well-educated and experienced. They not only help students do well
            in studies but also teach them good values. We believe in the
            overall growth of every child. Our school gives a safe and
            disciplined environment where students learn to think clearly,
            behave well, and work hard. Every year, our students get high marks
            and are selected in well-known schools like Jawahar Navodaya
            Vidyalaya (JNV), which shows the good quality of our teaching. We
            believe that real education is more than just reading books. It
            helps students become confident, kind, and ready to learn throughout
            their life.
          </p>
          <p>
            <strong>Address:</strong> Shahpura– Neem Ka Thana Road, Hathideh,
            Sikar, Rajasthan, 332707
          </p>
          <p>
            <strong>Phone:</strong> 9571930662, 9571940662
          </p>
          <p>
            <strong>Tagline:</strong> A Merit Granting School in the Rural Area
            of Sikar.
          </p>
        </div>

        <div className="about-right-logo">
          <img src={Logo} alt="School Logo" className="school-logo" />
        </div>
      </div>
      <div className="about-container-2">
        <div className="about-right">
          <img src={Director} alt="Director" className="director-image" />
          <div className="director-info">
            <h3>Managing director(MD)</h3>
            <h4>Mr. Mukesh Kumar Yadav</h4>
          </div>
        </div>
        <div className="about-right">
          <img src={Principle} alt="Principal" className="director-image" />
          <div className="director-info">
            <h3>Principal</h3>
            <h4>Mr. Shankar Lal Yadav</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default About1;
