import React from 'react'

function DisplayList(){
const item =['item1',
'item2',
'item3',
'item4',
'item5',
'item6',
]
return(
    <div>
        <ul>
            {item.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
)}




export default DisplayList