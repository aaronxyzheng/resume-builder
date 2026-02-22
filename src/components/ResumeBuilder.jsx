import "./ResumeBuilder.css";

function ResumeBuilder({ updatePersonalInfo }) {
    return (
        <div id="resume-builder">
            <div id="button-div">
                <button>Clear</button>
                <button>Load Example</button>
            </div>
            <div id="personal-information">
                <h1>Personal Information</h1>
                <div>
                    <label htmlFor="name-input">Full Name</label>
                    <input id="name-input" type="text" onChange={(e) => updatePersonalInfo("name", e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email-input">Email</label>
                    <input id="email-input" type="text" onChange={(e) => updatePersonalInfo("email", e.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone-number-input">Phone Number</label>
                    <input
                        id="phone-number-input"
                        type="text"
                        onChange={(e) => updatePersonalInfo("phoneNumber", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="website-input">Website</label>
                    <input
                        id="website-input"
                        type="text"
                        onChange={(e) => updatePersonalInfo("website", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="location-input">Location</label>
                    <input
                        id="location-input"
                        type="text"
                        onChange={(e) => updatePersonalInfo("location", e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ResumeBuilder;
