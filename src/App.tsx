import { useState } from 'react';
import './App.css';
import List from './components/list/List';
import MainModal from './components/modal/Mainmodal';
import Navbar from './components/navbar/Navbar';
import {  Modal, Note } from './types/types';

export default function App():JSX.Element {
  const [theme,setTheme] = useState<string|null>(localStorage.getItem("theme"))

  const [modal,setModal] = useState<Modal>({ // modal state and mode
    isOpen:false,
    mode:"",
  })
  
  const [item, editList] = useState<Array<Note>>([]) // items that will be sent to list container on page

  const handleClick =(e: string) => { //handles click on page
    const clickedItem:string = e
        
    switch (clickedItem) {
      case "dark":
        setTheme(clickedItem)
        localStorage.setItem("theme","dark")
        break;
      case "light":
        setTheme(clickedItem)
        localStorage.setItem("theme","light")
        break;
      case "new-note":
        setModal(
          {
            isOpen:true,
            mode:"newnote",
          }
        )
        break;
      default:
        localStorage.setItem("theme","")
        break;
    }
  }
  const _closemodal = () =>{ 
    setModal({
      isOpen:false,
      mode:"",
      title:"",
      content:""
    }) 

  }

  const _removeItem = (e:number)=>{
    const currKey:number = e
    editList(item.filter(
      (element,index)=>{
        return index !== currKey
      }
    ))
  }
  const _editItem = (e:any)=>{
    const currKey = typeof e === 'number'? e : -41
    if (typeof e === 'number'){
      setModal({
        isOpen:true,
        mode:"edit",
        id:currKey
      })
    }else {
      const submittedForm:Note = e[0]
      const key:number = e[1]
      let newArr = [...item]
      newArr[key] = submittedForm
      editList(newArr)
    }

  }

  const handleSubmit = (e:Note)=>{ //adds form to list
    const title = e.title    
    const content = e.content
    
    editList([...item,{title:title,content:content}])        
  }


  return (
    <div 
    onKeyDown={(e:any)=>{

      const key:string = e.key
      if (key === "Escape" && modal.isOpen) {
          _closemodal()
      }
      }
  }
    className={`main-app ${theme ===null? "dark":theme} ` }>
      <Navbar
      currentTheme={theme}
      handleClick={handleClick}
      />
      <div className="app-title">
        <h1>Notes App</h1>
      </div>

      <List
      data={item}
      _removeItem={_removeItem}
      _editItem={_editItem}
      />
      <MainModal 
      submit={handleSubmit}
      modal={modal}
      _closemodal={_closemodal}
      _editItem={_editItem}
      />

    </div>
  );
}


