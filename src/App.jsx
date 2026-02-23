import Resume from "./components/Resume";
import ResumeBuilder from "./components/ResumeBuilder";
import { useState } from "react";
import Data from "./utils/data";

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

    return (
        <>
            <Resume info={info} />
            <ResumeBuilder
                updatePersonalInfo={updatePersonalInfo}
                clearInfo={clearInfo}
                setExample={setExample}
                personalInfo={info.personalInfo}
            />
        </>
    );
}

export default App;
