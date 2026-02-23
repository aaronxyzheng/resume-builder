import Resume from "./components/Resume";
import ResumeBuilder from "./components/ResumeBuilder";
import { useState } from "react";
import Data from "./utils/data";
import School from "./utils/school";
import Experience from "./utils/experience";

function App() {
    const [info, setInfo] = useState(Data.returnEmptyInfo());

    function clearInfo() {
        setInfo(Data.returnEmptyInfo());
    }

    function setExample() {
        setInfo(Data.returnExampleInfo());
    }

    function updatePersonalInfo(field, value) {
        setInfo((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, [field]: value } }));
    }

    function updateSchool(key, field, value) {
        setInfo((prev) => ({
            ...prev,
            education: prev.education.map((school) => (school.key === key ? { ...school, [field]: value } : school)),
        }));
    }

    function updateExperience(key, field, value) {
        setInfo((prev) => ({
            ...prev,
            experience: prev.experience.map((exp) => (exp.key === key ? { ...exp, [field]: value } : exp)),
        }));
    }

    function addExperience() {
        setInfo((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                new Experience({
                    name: "Job Name",
                    role: "Role",
                    startDate: "Start",
                    endDate: "End",
                    location: "Location",
                    description: "Description",
                }),
            ],
        }));
    }

    function addSchool() {
        setInfo((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                new School({
                    name: "School",
                    degree: "Degree",
                    startDate: "Start",
                    endDate: "End",
                    location: "Location",
                }),
            ],
        }));
    }

    return (
        <>
            <Resume info={info} />
            <ResumeBuilder
                addExperience={addExperience}
                updateExperience={updateExperience}
                updatePersonalInfo={updatePersonalInfo}
                clearInfo={clearInfo}
                setExample={setExample}
                info={info}
                updateSchool={updateSchool}
                addSchool={addSchool}
            />
        </>
    );
}

export default App;
