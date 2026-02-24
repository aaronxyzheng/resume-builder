import "./ResumeBuilder.css";
import ButtonSection from "./resume-builder/ButtonSection";
import PersonalInfo from "./resume-builder/PersonalInfo";
import Dropdown from "./resume-builder/Dropdown";
import SchoolInput from "./resume-builder/SchoolInput";
import ExperienceInput from "./resume-builder/ExperienceInput";

function ResumeBuilder({
    addExperience,
    updateExperience,
    addSchool,
    updateSchool,
    updatePersonalInfo,
    clearInfo,
    info,
    setExample,
}) {
    const personalInfo = info.personalInfo;

    return (
        <div id="resume-builder">
            <ButtonSection clearInfo={clearInfo} setExample={setExample} />
            <PersonalInfo updatePersonalInfo={updatePersonalInfo} personalInfo={personalInfo} />
            <div className="dropdown-div">
                <h1>Education</h1>
                {info.education.length > 0 && (
                    <Dropdown
                        sections={info.education.map((school) => ({
                            key: school.key,
                            name: school.name,
                            children: <SchoolInput schoolInfo={school} updateSchool={updateSchool} />,
                        }))}
                    />
                )}
                <button className="add-button" onClick={addSchool}>
                    + Add School
                </button>
            </div>

            <div className="dropdown-div">
                <h1>Experience</h1>
                {info.experience.length > 0 && (
                    <Dropdown
                        sections={info.experience.map((experience) => ({
                            key: experience.key,
                            name: experience.name,
                            children: (
                                <ExperienceInput experienceInfo={experience} updateExperience={updateExperience} />
                            ),
                        }))}
                    />
                )}
                <button className="add-button" onClick={addExperience}>
                    + Add Experience
                </button>
            </div>
        </div>
    );
}

export default ResumeBuilder;
