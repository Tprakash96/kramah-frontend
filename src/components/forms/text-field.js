import React from 'react'
import "./form.css";

export const TextField = (props) => {
    const { 
        label="",
        className="text-field",
        type="text",
        value="",
        placeholder="",
        isError,
        onChange
    } = props;

    return(
        <div className="form-input-conatiner">
        <div className="form-input">
            <div className="label">{label}</div>
            <div className="spacer-left" />
            <input 
                type={type} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange}
                className={className}
            />
            <br />
        </div>
        {isError && <span className="err-msg">{isError}</span>}
        </div>
    );
}