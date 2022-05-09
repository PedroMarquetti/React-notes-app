import {useState} from "react";
import { Note } from "../../../types/types";

export default function Edit (props: { 
    _closemodal: any,
    _editItem:any,
    id:any
}):JSX.Element {
    const {
        _closemodal,
        _editItem,
        id
    } = props

    const [input,appendInput] = useState<Note>({
        title:"",
        content:""
    })

    const handleChange = (e:any)=>{
        appendInput({...input,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e:any) =>{
        const title:Note["title"] = input.title
        const content:Note["content"] = input.content
        
        if (title && content !== "") {
            _editItem([input,id])
            appendInput({
                title:"",
                content:""
            })
        } else {
            window.alert("empty fields")
        }
        e.preventDefault()
    }

    return (
        <div className="modal-box">
            <div className="edit-note">
                <h1>Edit Note</h1>
                <form 
                onSubmit={handleSubmit}
                className="editnote-form">
                    <input onChange={handleChange} id="title" type="text" placeholder="note title" name="title"
                    value={input.title}
                    autoFocus
                    />
                    <textarea
                    onChange={handleChange} id="content"  placeholder="note content" name="content"
                    value={input.content}
                    />
                    <button
                    id="submit"
                    >submit</button>
                    <button
                    id="close"
                    onClick={_closemodal}
                    >close</button>
                </form>
            </div>
        </div>
        
    )
}