function ExperienceInput({ updateExperience, experienceInfo }) {
    return (
        <div className="school-input">
            <label>
                Job Name
                <input
                    type="text"
                    value={experienceInfo.name}
                    onChange={(e) => updateExperience(experienceInfo.key, "name", e.target.value)}
                />
            </label>
            <label>
                Role
                <input
                    type="text"
                    value={experienceInfo.role}
                    onChange={(e) => updateExperience(experienceInfo.key, "role", e.target.value)}
                />
            </label>
            <div className="date-div">
                <label>
                    Start Date
                    <input
                        type="text"
                        value={experienceInfo.startDate}
                        onChange={(e) => updateExperience(experienceInfo.key, "startDate", e.target.value)}
                    />
                </label>
                <label>
                    End Date
                    <input
                        type="text"
                        value={experienceInfo.endDate}
                        onChange={(e) => updateExperience(experienceInfo.key, "endDate", e.target.value)}
                    />
                </label>
            </div>
            <label>
                Location
                <input
                    type="text"
                    value={experienceInfo.location}
                    onChange={(e) => updateExperience(experienceInfo.key, "location", e.target.value)}
                />
            </label>
            <label>
                Description
                <input
                    type="text"
                    value={experienceInfo.description}
                    onChange={(e) => updateExperience(experienceInfo.key, "description", e.target.value)}
                />
            </label>
        </div>
    );
}

export default ExperienceInput;
