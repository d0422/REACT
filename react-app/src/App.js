import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter,setValue]=useState(0);
  const onClick=()=>setValue((prev)=>prev+1);
  const [keyword,setKeyword]=useState("");
  const onChange=(event)=>setKeyword(event.target.value);
  useEffect( ()=>{
    if (keyword!==""&&keyword.length>5){
    console.log(keyword);
    }
  }, [keyword]);
  useEffect( ()=>{
    console.log(counter);
  }, [counter]);
  return (
    <div >
      <input value={keyword} onChange={onChange} type="text" placeholder="Search"/>
      <h1>{counter}</h1>
      <Button f={onClick} text={"CLICK ME!"}/>
    </div>
  );
}

export default App;
