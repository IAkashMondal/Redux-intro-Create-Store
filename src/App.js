import './App.css';
import React, { useState } from "react"
import {store} from "./Redux/Store"
function App() {
 
  const {count}= store.getState();
  const[update,setupdate]=useState(0)
  const {dispatch,subscribe} = store;
  subscribe(()=>{
    setupdate((prev)=> prev+1)
  })
  const handelAdd=()=>{
    dispatch({type:"ADD", payload : 1})
    console.log(store.getState())
  }
  const handelreduce=()=>{
    dispatch({type:"REDUCE", payload : 1})
    console.log(store.getState())
  }
 
  return (
    <div className="App">
      <header><h1>REDUX DAY 1</h1></header>
      <h3>Count: {count}</h3>
      <button onClick={handelAdd}>add</button>
      <button onClick={handelreduce}>reduce</button>
    </div>
  );
}

export default App;
