import React from 'react'
import { useState } from 'react'

type Props = {}

export default function Counter({}: Props) 
{
    const [count, setCount] = useState(0)

    const handleI = ()=>{
        setCount(count + 1)
        console.log("yeah")
    }
    const handleD= ()=>{
        setCount(count -1)
        console.log("yeah")
    }
  return (
    <div>
        <button 
        onClick={handleD}
        >-</button>
        <h2>Number : {count}</h2>
        <button 
        onClick={handleI}
        >+</button>
    </div>
  )
}