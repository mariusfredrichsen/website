import React, { useEffect, useState } from 'react';
import './App.css';

function ThemeButton() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") === null ? 'dark' : localStorage.getItem("theme"));

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme)
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div>
            <button className="dl_button" onClick={toggleTheme}>
                {theme === 'dark' ? 'Light' : 'Dark'} theme
            </button>
        </div >
    )
}

export default ThemeButton;





