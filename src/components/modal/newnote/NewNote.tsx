import React,{useState} from "react";
import { Note } from "../../../types/types";

export default function NewNote (props: { _closemodal: any,submit:any }):JSX.Element {
    const {
        _closemodal,
        submit
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
            submit(input)
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
            <div className="new-note">
                <h1>New Note</h1>
                <form 
                onSubmit={handleSubmit}
                className="newnote-form">
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