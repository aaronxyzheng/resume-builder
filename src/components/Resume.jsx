import "./Resume.css";
import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/phone.svg";
import linkIcon from "../assets/link.svg";
import mapIcon from "../assets/map.svg";

function Resume({ info }) {
    return (
        <div id="resume">
            <header>
                <div id="user-name">{info.personalInfo.name}</div>
                <div id="personal-info">
                    {info.personalInfo.email && (
                        <div className="info-section">
                            <img src={mailIcon} />
                            <div>{info.personalInfo.email}</div>
                        </div>
                    )}
                    {info.personalInfo.phoneNumber && (
                        <div className="info-section">
                            <img src={phoneIcon} />
                            <div>{info.personalInfo.phoneNumber}</div>
                        </div>
                    )}
                    {info.personalInfo.website && (
                        <div className="info-section">
                            <img src={linkIcon} />
                            <div>{info.personalInfo.website}</div>
                        </div>
                    )}
                    {info.personalInfo.location && (
                        <div className="info-section">
                            <img src={mapIcon} />
                            <div>{info.personalInfo.location}</div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Resume;
