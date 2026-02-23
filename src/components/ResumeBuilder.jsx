import "./ResumeBuilder.css";
import fileDownloadIcon from "../assets/file-download.svg";
import trashIcon from "../assets/trash.svg";

function ResumeBuilder({ updatePersonalInfo, clearInfo, personalInfo, setExample }) {
    return (
        <div id="resume-builder">
            <div id="button-div">
                <div id="delete-button-div" onClick={() => clearInfo()}>
                    <img src={trashIcon} />
                    <button>
                        Clear
                    </button>
                </div>
                <div id="load-example-div" onClick={() => setExample()}>
                    <img src={fileDownloadIcon} />
                    <button>Load Example</button>
                </div>
            </div>
            <div id="personal-information">
                <h1>Personal Information</h1>
                <div>
                    <label htmlFor="name-input">Full Name</label>
                    <input
                        id="name-input"
                        type="text"
                        value={personalInfo.name}
                        onChange={(e) => updatePersonalInfo("name", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email-input">Email</label>
                    <input
                        id="email-input"
                        type="text"
                        value={personalInfo.email}
                        onChange={(e) => updatePersonalInfo("email", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone-number-input">Phone Number</label>
                    <input
                        id="phone-number-input"
                        type="text"
                        value={personalInfo.phoneNumber}
                        onChange={(e) => updatePersonalInfo("phoneNumber", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="website-input">Website</label>
                    <input
                        id="website-input"
                        type="text"
                        value={personalInfo.website}
                        onChange={(e) => updatePersonalInfo("website", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="location-input">Location</label>
                    <input
                        id="location-input"
                        type="text"
                        value={personalInfo.location}
                        onChange={(e) => updatePersonalInfo("location", e.target.value)}
                    />
                </div>
            </div>
            <div id="education">
                <h1>Education</h1>
            </div>
        </div>
    );
}

export default ResumeBuilder;
