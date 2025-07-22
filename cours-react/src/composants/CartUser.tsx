import React from 'react'

type Props = {
    user:{
        id:number,
        name:string,
        age:number
    }
}

export default function ({user}: Props) {
  return (
    <div>
        <div style={{color:"green",
            padding: 6
        }}>
          <p>{user.name}- {user.age}</p>
        </div>
    </div>
  )
}