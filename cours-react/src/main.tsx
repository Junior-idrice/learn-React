import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const Welcom = ()=>{
  const idrice = "this is the goat";
  return (
   <div>
     <h2>
      This is feujio dongmo {idrice}
    </h2>
    <p>This is the second boy</p>
   </div>
  )
}

createRoot(document.querySelector("#root")!).
render(
  <>
    <Welcom/>
    <h2>This is the second element  </h2>
    <Welcom/>
  </>
)