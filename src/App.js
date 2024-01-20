// import logo from './logo.svg';
import { useState,useReducer } from 'react';
import './App.css';

function callback(oldState,mydispatchAction){
  if(mydispatchAction.type123 === "change_name"){
    return {
      name:"pavya",age:oldState.age
    };
  }
  else if(mydispatchAction.type123 === "change_age"){
    return{
      name:oldState.name,age:80
    };

  }
  else if(mydispatchAction.type123 === "change_input_name"){
    return{
      name:mydispatchAction.payload,age:80
    };

  }

  return oldState;
}

function App() {
  const [mystate,mydispatch] = useReducer(callback,{name:"priya",age:22})
  // let[name,setName] =useState("priya")
  // let[age,setAge] =useState("33")
  return (
    <div className="App">
      <p>{mystate.name}/{mystate.age}</p>
      <button type ='submit' 
      onClick={()=>{
        mydispatch({"type123":"change_name"})}}> Click</button>
      <button type ='submit' 
      onClick={()=>{
        mydispatch({"type123":"change_age"})}}> Age</button> 

      <input type='text' placeholder='Name' onChange={(event)=>{mydispatch({"type123":"change_input_name",payload:event.target.value})}}></input>
      <input type='text' placeholder='Age' onChange={(event)=>{mydispatch({"type123":"change_input_age",payload:event.target.value})}}></input>
    </div>
  );
}

export default App;
