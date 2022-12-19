import './App.css';
import React from 'react';
import { useState } from 'react';


function App () {
  const [pin, setPin] = useState("1234");
  const [pinInput, setPinInput] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [numberOfTries, setNumberOfTries] = useState(3);
  const [result, setResult] = useState("");
  const [disabled, setDisabled] = useState(false);

  const numberInput = (event,value) => {
    if (pinInput.length < 4) {
    event.preventDefault();
    setPinInput(pinInput.concat(value));
    setDisplayValue(displayValue.concat("*"));
    } else {
      alert("You must enter only 4 digits!")
    }
  };

  const clearPad = () => {
    setPinInput("");
    setNumberOfTries(3);
    setResult("");
    setDisplayValue("");
    setDisabled(false);
  };

  const pinError = (attempts) => {
    if (attempts -1 === 0) {
      setResult("LOCKED");
      setDisabled(true);
      setTimeout(()=> {
        clearPad();
      }, 30000)
    }
  };

  const checkPin = () => {
    if (pinInput.length !== 4) {
      alert("You must enter 4 digits!");
      setPinInput("");
      setDisplayValue("");
    } else if ( pinInput == pin) {
      setResult("OK");
      setDisabled(true);
      setTimeout(()=> {
        clearPad();
      }, 2000)
    } else {
      setResult("ERROR");
      setDisabled(true);
      setNumberOfTries(numberOfTries -1);
      pinError(numberOfTries);
       if(numberOfTries -1 > 0) {
        setTimeout(() => {
          setDisabled(false);
          setResult("");
          setPinInput("");
          setDisplayValue("")
        }, 3000);
       }
    }
  };

    return (
      <div className='container'>
        <div className='numpad'>
          <div className='input'>
            <p className='pin-input'>
              {result.length > 0 ? result : displayValue}
            </p>
          </div>
          <div className='num-rows'>
            <div className='row'>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="1"
              data-value= "1"
              onClick={(event) => numberInput (event, document.getElementById("1").getAttribute("data-value"))}>
                1
              </div>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="2"
              data-value= "2"
              onClick={(event) => numberInput (event, document.getElementById("2").getAttribute("data-value"))}>
                2
              </div>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="3"
              data-value= "3"
              onClick={(event) => numberInput (event, document.getElementById("3").getAttribute("data-value"))}>
                3
              </div>
            </div>
            <div className='row'>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="4"
              data-value= "4"
              onClick={(event) => numberInput (event, document.getElementById("4").getAttribute("data-value"))}>
                4
              </div>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="5"
              data-value= "5"
              onClick={(event) => numberInput (event, document.getElementById("5").getAttribute("data-value"))}>
                5
              </div>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="6"
              data-value= "6"
              onClick={(event) => numberInput (event, document.getElementById("6").getAttribute("data-value"))}>
                6
              </div>
            </div>
            <div className='row'>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="7"
              data-value= "7"
              onClick={(event) => numberInput (event, document.getElementById("7").getAttribute("data-value"))}>
                7
              </div>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="8"
              data-value= "8"
              onClick={(event) => numberInput (event, document.getElementById("8").getAttribute("data-value"))}>
                8
              </div>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="9"
              data-value= "9"
              onClick={(event) => numberInput (event, document.getElementById("9").getAttribute("data-value"))}>
                9
              </div>
            </div>
            <div className='row'>
              <div 
              className= {disabled ? "disabled" : "number"} 
              onClick = {()=> clearPad()}
              >
                clear
              </div>
              <div 
              className= {disabled ? "disabled" : "number"} 
              id="0"
              data-value= "0"
              onClick={(event) => numberInput (event, document.getElementById("0").getAttribute("data-value"))}>
                0
              </div>
              <div 
              className={disabled ? "disabled" : "number"} 
              onClick={()=> checkPin()}>
                enter
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }




export default App;


