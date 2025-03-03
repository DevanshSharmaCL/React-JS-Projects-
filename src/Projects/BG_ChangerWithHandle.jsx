import React, { useState } from 'react'

function BG_ChangerWithHandle(){
    const [color,setcolor]=useState('red')

    const handleClick=()=>{
        const newcolor=backgroungColor === 'yellow'? 'lightblue':'yellow'
        setcolor(newcolor)
    }
    return (
        <div onClick={handleClick}
        style={{backgroundColor,width:'200px',height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1>Click Me</h1>
        </div>

    )
}

export default BG_ChangerWithHandle