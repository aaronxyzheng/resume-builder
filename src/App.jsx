import Resume from "./components/Resume";
import ResumeBuilder from "./components/ResumeBuilder";
import { useState } from "react";
import Data from "./utils/data";
import School from "./utils/school";

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

    function addSchool() {
        setInfo((prev) => ({
            ...prev,
            education: [...prev.education, new School("School", "Degree", "Start", "End", "Location", crypto.randomUUID())]
        }))
    }

    return (
        <>
            <Resume info={info} />
            <ResumeBuilder
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
