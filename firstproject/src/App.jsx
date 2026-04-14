import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
  const[count,setcount] = useState(0)
  const [data,setdata]=useState("hello")
  function fun()
  {
    setdata("check");
  }
 return(
  <div>
    <h1>state of variable</h1>
    <h1>{data}</h1>
    <button onClick={fun}>Click </button>
    </div>
 )
}


export default App