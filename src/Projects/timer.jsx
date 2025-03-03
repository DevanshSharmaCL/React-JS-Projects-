import React, { useEffect, useState } from 'react'

function timer (){
    const [time,settime]=useState(60)

    useEffect(()=>{
        if(time>0){
            const timers=setTimeout(()=>{
                settime(time-1),1000
                return ()=>clearTimeout(timers)
            })
        }
    },{time})

    return(
        <div>
            <h1>Time Left:{time}</h1>
        </div>
    )
}
export default timer
