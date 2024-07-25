import React, { useState } from 'react';
import './App.css';


const Link = ({ content, link, target }) => {
    const [newContent, setNewContent] = useState("> " + content + " <")
    return (
        <div className="link">
            <a
                href={link}
                target={target}
                rel="noreferrer"
                className="link"
                onMouseEnter={() => {
                    setNewContent(">" + content + "<")
                }}
                onMouseLeave={() => {
                    setNewContent("> " + content + " <")
                }}

            >{newContent}</a>
            <br></br>
        </div>
    )
}

export default Link;