import "./Resume.css";
import Header from "./resume/header.jsx";
import Education from "./resume/education.jsx";

function Resume({ info }) {
    return (
        <div id="resume">
            <Header personalInfo={info.personalInfo} />
            <div id="content">
                {info.education.length > 0 && (
                    <Education educationInfo={info.education}/>
                )}
            </div>
        </div>
    );
}

export default Resume;
