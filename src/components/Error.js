import React from "react";
import "./Error.css";
import CheckIcon from "@mui/icons-material/Check";

const Error = (props) => {
  return (
    <div>
      <div onClick={props.toggleErrorPopup} className="backdrop" />
      <div className="error">
        <h2>{props.errorTitle}</h2>
        <p>{props.errorMsg}</p>
        <div className="popup-btn">
          <CheckIcon className="icon" onClick={props.toggleErrorPopup} />
        </div>
      </div>
    </div>
  );
};

export default Error;
