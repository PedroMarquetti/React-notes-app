import { Note } from "../../types/types";

export default function List (props:{data:Array<Note>,_removeItem:any,_editItem:any}) {
    const {
        data,
        _removeItem,
        _editItem,
    } = props
    

    const listItem = data.map(
        (value:Note,key:any)=>{
            const title = value.title
            const content = value.content
            return(
                    <li key={key} className="notes-item">
                        <h1 id="title" >{title}</h1>
                        <h2 id="content" >{content}</h2>
                        <button className="notes-button"
                            onClick={
                                (e:any)=>{
                                    _editItem(key)
                                }}
                        >edit</button>
                        <button onClick={(e:any)=>{
                            _removeItem(key)
                        }} className="notes-button">remove</button>
                    </li>
            )
            
        }
    )
    
    return (
        <div className="notes-container">
            <ul className="notes-list">
                {listItem}
            </ul>
        </div>
    )
}