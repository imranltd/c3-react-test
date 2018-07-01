import React from "react";
import './styles.css';

const Button = props => {
	return <div className='button-container'>
    <button onClick={props.onClick} className='button-delete'>{props.label}</button>
    </div>
}

export default Button