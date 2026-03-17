import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
  const[count,setcount] = useState(0)
  const name="Sohaib"
  let x=10;
  let y=20;
  function Name()
  {
   return "Mohammad Sohaib moiz";
  }
  function calc(c,d,x)
  {
    return cdx ;
  }
  function sum(a,b)
  {
    return a+b;
  }
 return(
  <div>
    <h1>project run</h1>
    <h3>Name is {name}</h3>
    <h3>{x+y}</h3>
    <h1>Use of function with jsx</h1>
    <h3>{Name()}</h3>
    <h3>example if paramitized function{sum()}</h3>
    <h3>{calc()}</h3>
    </div>
 )
}


export default App