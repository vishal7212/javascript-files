import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import Parent from './Parent';
import Child from './Child';
import { Link } from "react-router-dom";


function App(props) {
  const [color,setcolor]=useState("red");
  const[count,setcount]=useState(0);

  useEffect(()=>{
    console.log(count)
},[count]);





  return (
    <div > 
      <header >
        {props.data}
       
      </header>
      
      
      my favourite color is {color}!
      <button onClick={()=> setcolor("blue")}>
        change color
      </button>
      <br/>

        I have been clicked {count} times.
      <button  onClick={()=>setcount(count+1)}>
        +1
      </button>
      <button onClick={()=>setcount(count-1)}>
      -1
      </button>

       <button>page2</button>
     
      
        
      
      
    </div>
  );
}

export default App;
