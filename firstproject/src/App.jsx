import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Demo } from './Component/onecomp'


function App(){
  const[count,setcount] = useState(0)

 return(
  <div>
    <h1>ALI</h1>

    <Emp></Emp>
    <Branch></Branch>
    <Demo></Demo>
    </div>
 )

}

function Emp(){
  return(
    <h1>Mohammad Sohaib Moiz</h1>
  )
}

function Branch (){
 return(
 <h2>AIML</h2>
 )
}

export default App