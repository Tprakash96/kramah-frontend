import React from 'react'
import "./form.css";

export const Button = (props) => {
    const { 
        name="submit",
        onClick
    } = props;
    
    return(
        <button className="btn" onClick={onClick}>{name}</button>
    );
}