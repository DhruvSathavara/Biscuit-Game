import React, { Component, useEffect, useState } from 'react';
import Web3 from 'web3'
import './App.css';
import MemoryToken from '../abis/MemoryToken.json'
import brain from '../brain.png'

function App() {

  const [account, setAccount] = useState('0x0');

  useEffect(() => {
    //  loadWeb3();
    //  loadBlockchainData();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      console.log('in ethere');
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()

    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-ethereum browser detected. You should consider trying Metamask!')
    }
    // loadBlockchainData();

  }
  loadWeb3()

  function loadBlockchainData() {
    const web3 = window.web3;
    const accounts = web3.eth.getAccounts([]).then(
      console.log('accc',accounts)
      // console.log(accounts[0] !== undefined && accounts[0] ? "yess" : "nooo")

    )
    // console.log(accounts,'s')
  }
  loadBlockchainData();

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     account: '0x0'
  //   }
  // }

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={brain} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; Memory Tokens
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-muted"><span id="account">{account}</span></small>
          </li>
        </ul>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              <h1 className="d-4">Edit this file in App.js!</h1>

              <div className="grid mb-4" >

                {/* Code goes here... */}

              </div>

              <div>

                {/* Code goes here... */}

                <div className="grid mb-4" >

                  {/* Code goes here... */}

                </div>

              </div>

            </div>

          </main>
        </div>
      </div>
    </div>
  );


}

export default App;
