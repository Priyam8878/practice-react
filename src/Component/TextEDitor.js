
import React,{useState,useEffect} from "react";


const TextEditor =()=>{

    const [text,setText]=useState("")
    const [history,setHistory]=useState([])

    function handleAppend(){

        setHistory([...history,text])
        setText("")
    }
    function handleUndo(){
        if(history.length >0){
            const prevText = history[history.length -1]
            setHistory(history.slice(0,history.length-1))
            setText(prevText)
        }
    }

    return(
        <>
     <div>

        <input onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAppend}>append</button>
        <button onClick={handleUndo}>undo</button>
        <p>{history.join(" ")}</p>
     </div>
        </>
    )
}

export default TextEditor