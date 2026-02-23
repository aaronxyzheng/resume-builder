import "./Resume.css";
import Header from "./resume-parts/header";

function Resume({ info }) {
    return (
        <div id="resume">
            <Header personalInfo={info.personalInfo} />
            <div id="content">
                {info.education.length > 0 && (
                    <div id="education">
                        <div className="section-header">Education</div>
                        {info.education.map((school) => (
                            <div className="school">
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
                )}
            </div>
        </div>
    );
}

export default Resume;
