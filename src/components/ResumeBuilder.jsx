import "./ResumeBuilder.css";
import ButtonSection from "./resume-builder/ButtonSection";
import PersonalInfo from "./resume-builder/PersonalInfo";
import Dropdown from "./resume-builder/dropdown";

function ResumeBuilder({ updatePersonalInfo, clearInfo, info, setExample }) {
    const personalInfo = info.personalInfo;

    return (
        <div id="resume-builder">
            <ButtonSection clearInfo={clearInfo} setExample={setExample} />
            <PersonalInfo updatePersonalInfo={updatePersonalInfo} personalInfo={personalInfo} />
            <div>
                <h1>Education</h1>
                <Dropdown sections={
                    [
                        {
                            name: "Harvard",
                            children: <button>HIIII</button>
                        }, 
                        {
                            name: "Columbia",
                            children: <input></input>
                        }

                    ]}/>
            </div>
        </div>
    );
}

export default ResumeBuilder;
