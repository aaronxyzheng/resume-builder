import "./SchoolInput.css";

function SchoolInput({ updateSchool, schoolInfo }) {
    return (
        <div className="school-input">
            <label>
                School Name
                <input
                    type="text"
                    value={schoolInfo.name}
                    onChange={(e) => updateSchool(schoolInfo.key, "name", e.target.value)}
                />
            </label>
            <label>
                Degree
                <input
                    type="text"
                    value={schoolInfo.degree}
                    onChange={(e) => updateSchool(schoolInfo.key, "degree", e.target.value)}
                />
            </label>
            <div className="date-div">
                <label>
                    Start Date
                    <input
                        type="text"
                        value={schoolInfo.startDate}
                        onChange={(e) => updateSchool(schoolInfo.key, "startDate", e.target.value)}
                    />
                </label>
                <label>
                    End Date
                    <input
                        type="text"
                        value={schoolInfo.endDate}
                        onChange={(e) => updateSchool(schoolInfo.key, "endDate", e.target.value)}
                    />
                </label>
            </div>
            <label>
                Location
                <input
                    type="text"
                    value={schoolInfo.location}
                    onChange={(e) => updateSchool(schoolInfo.key, "location", e.target.value)}
                />
            </label>
        </div>
    );
}

export default SchoolInput;
