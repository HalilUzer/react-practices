import React from "react";

export default function ThemeToggleButton() {

    return (<div className="HeaderToggleContainer">
        <input type="checkbox" id="theme" className="HeaderToggle"/>
        <label htmlFor="theme" className="HeaderToggleLabel">Dark Mode</label>
    </div>)
}