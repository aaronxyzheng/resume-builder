import { useState } from "react";
import { getEmptyInfo, getExampleInfo } from "../utils/data";
import { createSchool, createExperience } from "../utils/models";

export function useResumeState() {
    const [info, setInfo] = useState(getEmptyInfo());

    function clearInfo() {
        setInfo(getEmptyInfo());
    }

    function setExample() {
        setInfo(getExampleInfo());
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

    function addSchool() {
        setInfo((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                createSchool({
                    name: "School",
                    degree: "Degree",
                    startDate: "Start",
                    endDate: "End",
                    location: "Location",
                }),
            ],
        }));
    }

    function addExperience() {
        setInfo((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                createExperience({
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

    return {
        info,
        clearInfo,
        setExample,
        updatePersonalInfo,
        updateSchool,
        updateExperience,
        addSchool,
        addExperience,
    };
}
