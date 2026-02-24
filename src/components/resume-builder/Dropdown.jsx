import "./Dropdown.css";
import { useState } from "react";
import caret from "../../assets/caret.svg";

function Dropdown({ sections }) {
    const [selected, setSelected] = useState(null);

    function sectionClicked(key) {
        setSelected((prev) => (prev === key ? null : key));
    }

    return (
        <div className="dropdown">
            {sections.map((section) => (
                <div key={section.key}>
                    <div className="dropdown-section" onClick={() => sectionClicked(section.key)}>
                        <div className="section-name">{section.name}</div>
                        <img src={caret} alt="" className={selected === section.key ? "selected" : ""} />
                    </div>
                    <div className={`dropdown-children ${selected === section.key ? "open" : ""}`}>
                        {section.children}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dropdown;
