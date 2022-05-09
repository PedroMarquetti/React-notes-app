import React from "react";
import { Dropdowntype } from "../../types/types";

export default function Dropdown(props:{
    dropDown:Dropdowntype["type"],
    handleClick:any
}):JSX.Element {
    const {
        dropDown, // dropdown type
        handleClick, // handle dropdown click

    } = props

    const handleItemClick = (e:any)=>{
        
        const id:string = e.target.id
        handleClick(id)
    }

    switch (dropDown) {
        case "newnote":
            return (
                <ul className="drop-list">
                    <li
                    id={"new-note" 
                    } onClick={handleItemClick}
                    className="drop-list-item">New Note</li>
                    <li
                    id={"archive"} 
                    onClick={handleItemClick} 
                    className="drop-list-item">Archive</li>
                </ul>
            )
        case "theme":
            return (
                <ul className="drop-list">
                    <li
                    id={"dark"}    
                    onClick={handleItemClick} 
                    className="drop-list-item">Dark</li>
                    <li
                    id={"light"}   
                    onClick={handleItemClick} 
                    className="drop-list-item">Light</li>
                </ul>
            )
        case "account":
            return (
                <ul className="drop-list">
                    <li
                    id={"profile"} 
                    onClick={handleItemClick} 
                    className="drop-list-item">Profile</li>
                    <li
                    id={"settings"}    
                    onClick={handleItemClick} 
                    className="drop-list-item">Settings</li>
                </ul>
            )
            
        }
    return <></>
}