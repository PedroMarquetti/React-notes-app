import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Dropdowntype } from "../../types/types";
import Topnav from "./Topnav";

export default function Navbar(props: { handleClick: any,currentTheme:string|null }):JSX.Element {
    const {
        handleClick, // all nav clicking events
        currentTheme // current theme string
    } = props

    const [dropDown,updateState] = useState<Dropdowntype>(
        {
            isEnabled:false,
            type:""
        }
    )
    
    const changeDrop = (e:any) =>{
        const id = e.target.id
        if (!dropDown.isEnabled || dropDown.isEnabled) {
            updateState({
                isEnabled:true,
                type:id
            })
        } 

    }

    return (
        <nav 
            onMouseLeave={()=>{updateState({isEnabled:false,type:""})}}
            className={`main-navbar ${currentTheme}`}
            >
            <Topnav
            dropDown={dropDown}
            changeDrop={changeDrop}
            />
            {dropDown.isEnabled? <Dropdown
                dropDown={dropDown.type}
                handleClick={handleClick}
             /> : null}
        </nav>
    )
}