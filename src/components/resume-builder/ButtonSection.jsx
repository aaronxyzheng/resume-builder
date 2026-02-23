import "./ButtonSection.css"

import fileDownloadIcon from "../../assets/file-download.svg"
import trashIcon from "../../assets/trash.svg";


function ButtonSection({clearInfo, setExample}) {
    return (
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
    )
}

export default ButtonSection;