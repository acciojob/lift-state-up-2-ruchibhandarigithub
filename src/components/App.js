
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText] = useState("");
  const changeText = (e)=>{
    setText(e.target.value);
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{text}</p>
      <div className="child">
        <h2>Child Component</h2>
        <input type="text" onChange={changeText} />
      </div>
       
    </div>
  )
}

export default App
