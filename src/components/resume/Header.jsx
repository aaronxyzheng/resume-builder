import "./Header.css";
import mailIcon from "../../assets/mail.svg";
import phoneIcon from "../../assets/phone.svg";
import linkIcon from "../../assets/link.svg";
import mapIcon from "../../assets/map.svg";

function Header({ personalInfo }) {
    return (
        <header>
            <div id="user-name">{personalInfo.name}</div>
            <div id="personal-info">
                {personalInfo.email && (
                    <div className="info-section">
                        <img src={mailIcon} />
                        <div>{personalInfo.email}</div>
                    </div>
                )}
                {personalInfo.phoneNumber && (
                    <div className="info-section">
                        <img src={phoneIcon} />
                        <div>{personalInfo.phoneNumber}</div>
                    </div>
                )}
                {personalInfo.website && (
                    <div className="info-section">
                        <img src={linkIcon} />
                        <div>{personalInfo.website}</div>
                    </div>
                )}
                {personalInfo.location && (
                    <div className="info-section">
                        <img src={mapIcon} />
                        <div>{personalInfo.location}</div>
                    </div>
                )}
            </div>
        </header>
    );
}
export default Header;
