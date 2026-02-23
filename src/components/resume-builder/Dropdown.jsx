import "./Dropdown.css";
import React, { useState } from "react";
import caret from "../../assets/caret.svg";

function Dropdown({ sections }) {
    const [selected, setSelected] = useState(-1);

    function sectionClicked(index) {
        if (selected === index) {
            setSelected(-1);
        } else {
            setSelected(index);
        }
    }

    return (
        <div className="dropdown">
            {sections.map((section, index) => (
                <>
                    <div className="dropdown-section" onClick={() => sectionClicked(index)}>
                        <div className="section-name">{section.name}</div>
                        <img src={caret} alt="" className={selected === index ? "selected" : ""} />
                    </div>
                    {selected === index && section.children}
                </>
            ))}
        </div>
    );
}

export default Dropdown;
