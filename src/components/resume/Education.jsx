import "./Education.css";

function Education({ educationInfo }) {
    return (
        <div id="education">
            <div className="section-header">Education</div>
            {educationInfo.map((school) => (
                <div className="school" key={school.key}>
                    <div className="school-metadata">
                        <div>{school.startDate + " - " + school.endDate}</div>
                        <div>{school.location}</div>
                    </div>

                    <div>
                        <div className="school-name">{school.name}</div>
                        <div>{school.degree}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Education;
