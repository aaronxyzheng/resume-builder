import "./Experience.css";

function Experience({ experienceInfo }) {
    return (
        <div id="experience">
            <div className="section-header">Experience</div>
            {experienceInfo.map((exp) => (
                <div className="experience" key={exp.key}>
                    <div className="experience-metadata">
                        <div>{exp.startDate + " - " + exp.endDate}</div>
                        <div>{exp.location}</div>
                    </div>
                    <div>
                        <div className="experience-name">{exp.name}</div>
                        <div>{exp.role}</div>
                        <div className="experience-description">{exp.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;
