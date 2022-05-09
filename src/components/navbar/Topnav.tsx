import { Dropdowntype } from "../../types/types";

export default function Topnav (props: { dropDown: Dropdowntype,changeDrop:any }):JSX.Element{
    const {
        changeDrop
    } = props

    const handleHover = (e: object)=>{
        changeDrop(e)
    }
    return (
        <ul className="navbar-list">
            
            <li 
            id={"newnote"}
            onClick={handleHover} 
            onMouseOver={handleHover} 
            className="nav-item"
            tabIndex={0}
            onKeyDown={handleHover}
            >New Note</li>

            <li 
            id={"theme"}
            onClick={handleHover} 
            onMouseOver={handleHover} 
            className="nav-item"
            tabIndex={0}
            onKeyDown={handleHover}            
            >Theme</li>            
            <li 
            id={"account"}
            onClick={handleHover} 
            onMouseOver={handleHover} 
            className="nav-item"
            tabIndex={0}
            onKeyDown={handleHover}            
            >Account</li>
        </ul>
    )
}