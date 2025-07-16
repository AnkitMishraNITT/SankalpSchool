import React from "react";
import Science from "../assets/Sciencedata/scienceresult.jpg"
import Sfirst from "../assets/Sciencedata/First.png"
import Ssecond from "../assets/Sciencedata/Second.png"
import Sthird from "../assets/Sciencedata/Third.png"
import Arts from "../assets/Artsdata/artsresult.jpg";
import Afirst from "../assets/Artsdata/First.png";
import Asecond from "../assets/Artsdata/Second.png";
import Athird from "../assets/Artsdata/Third.png";
import Tenth from "../assets/10thdata/10thresult.jpg"
import Tenthfirst from "../assets/10thdata/First.png"
import Tenthsecond from "../assets/10thdata/Second.png"
import Tenththird from "../assets/10thdata/Third.png"

function Result12th({ref}) {
  const handleDownload = async (imageSrc, filename) => {
    try {
      // Fetch the image as a blob
      const response = await fetch(imageSrc);
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a temporary <a> element to trigger the download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download the image. Please try again.");
    }
  };

  return (
    <div ref={ref} className="result-container">
      {/* Science Section */}
      <div className="result-section">
        <h1 className="result-heading">Science Result (2024-25)</h1>
        <div className="result-poster">
          <img src={Science} alt="Science poster" />
          <button
            className="download-btn"
            onClick={() => handleDownload(Science, "science-poster.jpg")}
          >
            ⬇ Download
          </button>
        </div>
        <div className="students-container">
          {/* Student Card 1 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Sfirst} alt="Student" />
            </div>
            <h3 className="student-name">Priya Yadav</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>97.40
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>1st
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Ramkumar Yadav
            </p>
          </div>

          {/* Student Card 2 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Ssecond} alt="Student" />
            </div>
            <h3 className="student-name">Kiyara Choudhary</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>93
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>2nd
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Amar Singh Jaat
            </p>
          </div>

          {/* Student Card 3 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Sthird} alt="Student" />
            </div>
            <h3 className="student-name">Khaamosh Yadav</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>91
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>3rd
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Sitaram Yadav
            </p>
          </div>
        </div>
      </div>

      {/* Arts Section */}
      <div className="result-section">
        <h1 className="result-heading">Arts Result (2024-25)</h1>
        <div className="result-poster">
          <img src={Arts} alt="Arts poster" />
          <button
            className="download-btn"
            onClick={() => handleDownload(Arts, "arts-poster.jpg")}
          >
            ⬇ Download
          </button>
        </div>
        <div className="students-container">
          {/* Student Card 1 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Afirst} alt="Student" />
            </div>
            <h3 className="student-name">Tinku Barala</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>97.80
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>1st
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Jyanki Lal Jaat
            </p>
          </div>

          {/* Student Card 2 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Asecond} alt="Student" />
            </div>
            <h3 className="student-name">Priyanka Yadav</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>97.40
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>2nd
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Ramkumar Yadav
            </p>
          </div>

          {/* Student Card 3 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Athird} alt="Student" />
            </div>
            <h3 className="student-name">Tanisha Sharma</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>96.40
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>3rd
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Sitaram Sharma
            </p>
          </div>
        </div>
      </div>
      <div className="result-section">
        <h1 className="result-heading">10th Result (2024-25)</h1>
        <div className="result-poster">
          <img src={Tenth} alt="10th result poster" />
          <button
            className="download-btn"
            onClick={() => handleDownload(Tenth, "10th-result-poster.jpg")}
          >
            ⬇ Download
          </button>
        </div>
        <div className="students-container">
          {/* Student Card 1 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Tenthfirst} alt="Student" />
            </div>
            <h3 className="student-name">Aayushi Agrawal</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>93.83
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>1st
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Kamlesh Kumar
            </p>
          </div>

          {/* Student Card 2 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Tenthsecond} alt="Student" />
            </div>
            <h3 className="student-name">Vikas Yadav</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>90.33
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>2nd
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Rameshwar Prasad
            </p>
          </div>

          {/* Student Card 3 */}
          <div className="student-card">
            <div className="student-image">
              <img src={Tenththird} alt="Student" />
            </div>
            <h3 className="student-name">Nisha Saini</h3>
            <p className="subject-score">
              <strong>Percentage:-</strong>90.00
            </p>
            <p className="subject-score">
              <strong>Rank:-</strong>3rd
            </p>
            <p className="subject-score">
              <strong>Father`s Name:-</strong>Mr. Mahesh Saini
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result12th;
