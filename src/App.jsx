import Resume from "./components/Resume";
import ResumeBuilder from "./components/ResumeBuilder";
import { useState } from "react";

function App() {
    const emptyInfo = {
        personalInfo: {
            name: "",
            email: "",
            phoneNumber: "",
            website: "",
            location: "",
        },
    };

    const example = {
        personalInfo: {
            name: "Tony Stark",
            email: "tonystark@avengers.com",
            phoneNumber: "+1 917-531-8008",
            website: "tonystark.com",
            location: "Manhattan, New York City",
        },
    };

    const [info, setInfo] = useState(emptyInfo);

    function clearInfo() {
        setInfo(emptyInfo);
    }

    function setExample() {
        setInfo(example);
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
