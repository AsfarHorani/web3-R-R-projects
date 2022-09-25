import logo from './logo.svg';
import './App.css';
import Web3Modal from 'web3modal'
import Web3 from 'web3';
import {useState, useEffect} from 'react'
import { ethers, providers } from "ethers";

function App() {
  const [address, setAddress] = useState("")
  
  const providerOptions ={
    binancechainwallet: {
      package: true
    },
  };
  return (
    <div className="App">

    </div>
  );
}

export default App;
