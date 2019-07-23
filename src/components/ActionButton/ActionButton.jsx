import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ActionButton.scss';

const ActionButton = ({ icon, label, color, onClick}) => (
    <div className="ActionButton" onClick={onClick}>
        <button className="round" style={{backgroundColor: color}}>
            <FontAwesomeIcon icon={icon} />
        </button>
        <span>{label}</span>
    </div>
)
  export default ActionButton