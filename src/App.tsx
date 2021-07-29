import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {state} from "./index";
import * as action from './store/action/index'

function App() {
    const amount=useSelector((state:state)=>{
        return state.bank
    })

    const dispatch=useDispatch()

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=>{dispatch(action.deposit(1000))}}>
        deposit
      </button>
      <button onClick={()=>{dispatch(action.withdraw(1000))}}>
        withdraw
      </button>
      <button onClick={()=>{dispatch(action.bankrupt())}}>
        bankrupt
      </button>
    </div>
  );
}

export default App;
