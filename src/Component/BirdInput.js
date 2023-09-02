import React,{useState} from "react";
import { add_new_bird,remove_bird } from "../redux/action/listAction";
import { UseSelector,useDispatch, useSelector} from "react-redux";
const BirdInput = ()=>{
    const [b,setB]=useState("")
    console.log(b)
    const dispatch =useDispatch()
const birdArray = useSelector(state =>state.list)
// console.log(birdArray)

const newBird =""
function addBird(){
 
   dispatch(add_new_bird(b))
}
    return(
        <>
        <h3>bird List</h3>
         <input onChange={(e)=>setB(e.target.value)} placeholder="Add New Bird" />
         <button onClick={addBird} >Add</button>
        </>
    )
}

export default BirdInput