import './App.css';
import React from 'react';
import { useState } from 'react';

function App () {
  const [message, setMessage] = useState("");
  const [disabled, isDisabled] = useState(false);
  const [pinInputToEnter, setPinToEnter] = useState(1234);
  const [pinInput, setPinInput] = useState();
  const [numberOfAttempts, setNumberOfAttempts] = useState(3);


  const enter = () => {

  }

  const locked =()=> {
    }

    return (
      <div className='pinPad'>
       {pinInput}
        <div>
        <div>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}1`)}>1</button>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}2`)}>2</button>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}3`)}>3</button>
        </div>
        <div>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}4`)}>4</button>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}5`)}>5</button>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}6`)}>6</button>
        </div>
        <div>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}7`)}>7</button>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}8`)}>8</button>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}9`)}>9</button>
        </div>
        <div>
          <button onClick={() => enter()}>E
          </button>
          <button onClick={() => setPinInput((pinInput) => `${pinInput}0`)}>0</button>
          <button onClick={() => setPinInput("")}>C</button>
        </div>
      </div>

      </div>
    )
  }




export default App;


