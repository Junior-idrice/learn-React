import { useEffect,useState, type ReactNode } from "react";
import CartUser from "./composants/CartUser";
import Counter from "./composants/counter";

const App = ()=>{
  const [count, setCount] = useState(0)

  useEffect(()=>{
    document.title = `the count is ${count}`
  }, [count])
  return (
    <div>
      
      <h2>Les effect</h2>
      <div>
        <button
        onClick={()=> setCount(count +1)}>Icrease</button>
      </div>
      <h3>Voici la valeur du {count} </h3>
    </div>
  )
}
    
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