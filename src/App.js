import './App.css';
import React, { useState } from "react"
import {store} from "./Redux/Store"
import {handelAddActionObj,handelReduceActionObj} from "./Redux/action"
function App() {
 
  const {count}= store.getState();
  const[update,setupdate]=useState(0)
  const {dispatch,subscribe} = store;
  subscribe(()=>{
    setupdate((prev)=> prev+1)
  })
  // const handelAdd=()=>{
  //   dispatch({type:"ADD", payload : 1})
  //   console.log(store.getState())
  // }
  // const handelreduce=()=>{
  //   dispatch({type:"REDUCE", payload : 1})
  //   console.log(store.getState())
  // }
 
  return (
    <div className="App">
      <header><h1>REDUX DAY 1</h1></header>
      <h5>MAX REACHED till 25</h5>
      <h3>Count: {count}</h3>
      <button onClick={()=>dispatch(handelAddActionObj(1))}>add</button>
      <button onClick={()=>dispatch(handelReduceActionObj(1))}>reduce</button>
    </div>
  );
}

export default App;
