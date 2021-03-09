
import './App.css';
import React , {useState, useEffect, useRef } from "react"

function App() { 
  const [result , setResult] = useState("");
  const inputRef = useRef(null);
    useEffect(()=> inputRef.current.focus());

  function handleClick(e){
    setResult(result + e.target.name); 
  }
  function clear(){
    setResult("");
  }
  function calculate(){
    try{
      setResult(eval(result));
    }catch(error){
      setResult("Error");
    }
  }
  return (
    <>
    <div>
    <div>
      <form>
        <input type="text" value={result} ref={inputRef}/>
      </form>
    </div>
    <div>
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      <button name="0" onClick={handleClick}>0</button>

      <button name="+" onClick={handleClick}>+</button>
      <button name="-" onClick={handleClick}>-</button>
      <button name="*" onClick={handleClick}>*</button>
      <button name="/" onClick={handleClick}>/</button>

      <button id="result" onClick={calculate}>Result</button>
      <button onClick={clear}>Clear</button>
    </div>
    </div>
  </>
  );
}

export default App;
