import React, { useState } from 'react';
import './App.css';


const Link = ({content, link, target}) => {
    const [newContent, setNewContent] = useState("> " + content + " <")
    return (
        <div style={{padding: "4px"}}>
            <a 
                href={link} 
                target={target} 
                rel="noreferrer"
                style={{textDecoration: "none", color: "White"}}
                onMouseEnter = {() => {
                    setNewContent(">" + content + "<")
                }}
                onMouseLeave = {() => {
                    setNewContent("> " + content + " <")
                }}
            
            >{newContent}</a>
            <br></br>
        </div>
    )
}

export default Link;