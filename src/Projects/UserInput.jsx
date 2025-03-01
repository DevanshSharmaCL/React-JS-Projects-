import React,{useState} from "react"
function UserInput() {
    const[name,setname] =useState(" ")

    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
            <h1>this is userInput:{name}</h1>
        </div>
    )
}
 
export default UserInput