import Resume from "./components/Resume";
import ResumeBuilder from "./components/ResumeBuilder";
import { useState } from "react";

function App() {
    const [info, setInfo] = useState({
        personalInfo: {
            name: "",
            email: "",
            phoneNumber: "",
            website: "",
            location: "",
        },
    });

    const example = {
        personalInfo: {
            name: "Aaron Zheng",
            email: "aaronxyzheng@gmail.com",
            phoneNumber: "+1 914-610-6511",
            website: "aaronxyzheng.com",
            location: "Briarcliff, New York",
        },
    };

    function updatePersonalInfo(field, value) {
        setInfo((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, [field]: value } }));
    }

    return (
        <>
            <Resume info={info} />
            <ResumeBuilder updatePersonalInfo={updatePersonalInfo} />
        </>
    );
}

export default App;
