import "./Resume.css";
import Header from "./resume/Header.jsx";
import Education from "./resume/Education.jsx";
import Experience from "./resume/Experience.jsx";

function Resume({ info }) {
    return (
        <div id="resume">
            <Header personalInfo={info.personalInfo} />
            <div id="content">
                {info.education.length > 0 && <Education educationInfo={info.education} />}
                {info.experience.length > 0 && <Experience experienceInfo={info.experience} />}
            </div>
        </div>
    );
}

export default Resume;
