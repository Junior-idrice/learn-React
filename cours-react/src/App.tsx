import type { ReactNode } from "react";
import CartUser from "./composants/CartUser";
import Counter from "./composants/counter";

const App = ()=>{
  const users = [
    {
      id:1,
      name:"idrice",
      age: 10,
    },
     {
      id:2,
      name:"feujio",
      age: 22,
    }
  ]
  return (
    <>
      <h1>events in react</h1>
      <Counter/>


      {/*users.map(element =>(
        <CartUser user={element}/>
      ))*/}
      </>
      )}
    
export default App
/*
type sa = {
  nom:string;
  age?:number;
}
const Gr = ({nom}:sa)=>{
  return (
    <>
      <p>Bonjout, {nom}</p>
    </>
  )
}

type con = {
  children : ReactNode;
  title?:string
}

const Container = ({children, title}:con)=>{
  return (
    <div style = {{
      backgroundColor: "red",
      color : "green"
    }}>
    <h2>{title}</h2>
    {children}

    </div>
  )
}*/