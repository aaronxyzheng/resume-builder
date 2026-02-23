import "./ResumeBuilder.css";
import ButtonSection from "./resume-builder/ButtonSection";
import PersonalInfo from "./resume-builder/PersonalInfo";
import Dropdown from "./resume-builder/dropdown";
import SchoolInput from "./resume-builder/SchoolInput";

function ResumeBuilder({ updateSchool, updatePersonalInfo, clearInfo, info, setExample }) {
    const personalInfo = info.personalInfo;

    return (
        <div id="resume-builder">
            <ButtonSection clearInfo={clearInfo} setExample={setExample} />
            <PersonalInfo updatePersonalInfo={updatePersonalInfo} personalInfo={personalInfo} />
            <div className="dropdown-div">
                <h1>Education</h1>
                <Dropdown
                    sections={info.education.map((school) => ({
                        name: school.name,
                        children: <SchoolInput schoolInfo={school} updateSchool={updateSchool}/>,
                    }))}
                />
            </div>
        </div>
    );
}

export default ResumeBuilder;
