import React, { useState } from 'react'


function toggle (){
    const [toggle,settoggle]=useState(false)

    const handleToggle=()=>{
        settoggle(!toggle)
    }

    return (
        <div>
            <label >
                <input type='checkbox' onChange={handleToggle}/>
            </label>
            <p>{toggle}</p>
        </div>
    )
}
export default ToggleSwitch