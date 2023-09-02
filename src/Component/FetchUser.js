import React,{useState} from "react";
import axios from "axios";
const url ="https://jsonplaceholder.typicode.com/users"
const FetchUser = ()=>{
const [user,setUser]= useState([])
const [sorted,setSorted] = useState(0)

function getUser(){
return fetch(url)
.then((response)=>response.json())
.then(users=>{
    setUser(users)
    console.log(users)
})

}
function sortUser(){
 setSorted(user.sort((a,b)=>a.name.length - b.name.length))
}
return( 
    <>
    <div>
   
   <h3>User List</h3>
<button onClick={getUser}>getuser</button>
<button onClick={sortUser}>sorted</button>
{
   user.map(data=>(
    <div key={data.id}>{data.name}</div>
   ))
}
    </div>
    </>
)
}
export default FetchUser