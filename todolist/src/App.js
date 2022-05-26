import {useState, useEffect} from "react";
function App() {
  const [todo,settodo]=useState("");
  const [todos,settodos]=useState([]);
  const onChange=(event)=>{
    settodo(event.target.value);
  } 
  const onSubmit=(event)=>{
    event.preventDefault();
    if (todo===""){
      return;
    }
    settodo("");
    settodos(prev=>[todo,...prev]);
    // ...을 통해 배열의 요소들을 가져올 수 있다.
  }
  console.log(todos);
  return (
    <div>
      <h1>My To dos {todos.length}</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange}value={todo}type="text" placeholder='Write your to do...'/>
      <button>Add to do</button>
      </form>
      <hr/>
      {todos.map((item, index)=>
      <li key={index}>{item}</li> )}
    </div>
  )
}

export default App;
