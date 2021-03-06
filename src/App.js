import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';
  
function App() {
  
  // Initializing all the state variables 
  const [info, setInfo] = useState("");
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("electricity");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState(["electricity", "gas","oranges"]);
  const [output, setOutput] = useState(0);
    
  // Function to convert the currency
  function convert() {
	  if(from==="electricity"){
		  setOutput(input * 0.5);
		  setInfo("kWh");
	  }		  
	  if(from==="gas"){
		  setOutput(input * 3);
		  setInfo("liters");
	  }
	  if(from==="oranges"){
		  setOutput(input * 5);
		  setInfo("Kilograms");
	  }
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <h3>Amount in {info}</h3>
          <input type="text" 
             placeholder="Enter the amount" 
             onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown options={options} 
                    onChange={(e) => { setFrom(e.value) }}
          value={from} placeholder="From" />
        </div>
      </div>
      <div className="result">
        <button onClick={()=>{convert()}}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>{"Value in PLN"+" = "+output.toFixed(2)}</p>
        <p>{"Value in dollars"+" = "+(output*0.2243).toFixed(2)}</p>
		<p>{"Value in Euro"+" = "+(output*0.2136).toFixed(2)}</p>
		<p>{"Value in pounds"+" = "+(output*0.1847).toFixed(2)}</p>
      </div>
    </div>
  );
}
  
export default App;