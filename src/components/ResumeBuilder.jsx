import "./ResumeBuilder.css";
import ButtonSection from "./resume-builder/ButtonSection";
import PersonalInfo from "./resume-builder/PersonalInfo";

function ResumeBuilder({ updatePersonalInfo, clearInfo, info, setExample }) {
    const personalInfo = info.personalInfo;

    return (
        <div id="resume-builder">
            <ButtonSection clearInfo={clearInfo} setExample={setExample} />
            <PersonalInfo updatePersonalInfo={updatePersonalInfo} personalInfo={info.personalInfo} />

            <div id="education">
                <h1>Education</h1>
            </div>
        </div>
    );
}

export default ResumeBuilder;
