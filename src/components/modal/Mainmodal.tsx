import { Modal } from "../../types/types"
import NewNote from "./newnote/NewNote"
import Edit from "./editnote/Edit"

export default function MainModal (props:{
    modal:Modal,
    _editItem:any,
    _closemodal:any,
    submit:any,
    
}):JSX.Element{
    const {
        modal,
        _closemodal,
        _editItem,
        submit,
    } = props
    const isModalOpen = modal.isOpen
    const modalMode = modal.mode
    const modalId = modal.id

    const currModal = ()=>{
        switch (modalMode) {
            case "newnote":
                return <NewNote _closemodal={_closemodal} submit={submit}/>
                        
            case "edit":
                return <Edit _closemodal={_closemodal} _editItem={_editItem} id={modalId}/>
        
            default:
                break;
        }
    }

    if (isModalOpen){
        return (
            <div 
            className={`${isModalOpen? "main-modal blur" :""}`}
                onClick={_closemodal} 
                tabIndex={0}
                onKeyDown={(e:any)=>{
                    const key:string = e.key
                    if (key === "Escape" && modal.isOpen) {
                        _closemodal()
                    }
                    }
                }

            > 
                <div className="modal-box"
                onClick={(e:any) =>{ e.stopPropagation()}}
                onKeyDown={(e:any)=>{
                    const key:string = e.key
                    if (key === "Escape") {
                        _closemodal()
                        }
                    }
                }
                >
                    {
                        
                        currModal()
                    }
                </div>
            </div>
        )
    } else {

        return <></>
    }
}