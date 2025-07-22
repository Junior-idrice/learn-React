import React from 'react'

type Props = {}

export default function Counter({}: Props) 
{
    const handleClick = ()=>{
        console.log("click here")
    }
  return (
    <div>
        <h2>Number : 0</h2>
        <button 
        onClick={handleClick}
        >Increase</button>
    </div>
  )
}