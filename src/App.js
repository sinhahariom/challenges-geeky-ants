import './App.scss';
import {useState} from 'react';

//Small Component for Button and attrs are set based on Props Passed
const Button = (props)=>{
  return <button disabled={props.status} style={{backgroundColor:props.varient}} >{props.label}</button>
}

function App() {

  const [btnColorVarient, setButtonColorVariant] =useState('');
  const [btnisDisabled, setbtnisDisabled] =useState(true);
  const [btnLabel, setbtnLabel] =useState('');

  const handleBtnVarient = (e)=>{
    let varient = e.target.value;
    let color="white";
    if(varient === "Primary")
      color="Blue";
    else if(varient === "Secondary")
      color="Purple";
    else if(varient === "Tertiary")
      color="Grey";
    setButtonColorVariant(color);
  }
  const handleBtnLabel = (e)=>{
    setbtnLabel(e.target.value);
  }
  const handleBtnStatus = (e)=>{
    let status = '';
    if(e.target.value==="true")
      status = true;
    if(e.target.value==="false")
      status = false;
    setbtnisDisabled(status);
  }

  return (
    <div className="App">
      <div className="items-wrapper">
        <label htmlFor="varient">Button Varient</label>
        <select name="varient" onChange={(e)=>handleBtnVarient(e)}>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
          <option value="Tertiary">Tertiary</option>
        </select>
        <label htmlFor="btn">Enabled</label>
        <input name="btn" onChange={(e)=>handleBtnStatus(e)} type="radio" value={false}/>
        <label htmlFor="btn">Disabled</label>
        <input  name="btn" onChange={(e)=>handleBtnStatus(e)}  type="radio" value={true}/>
        <label htmlFor="label">Label For Button</label>
        <input type="text" name="label" onChange={(e)=>handleBtnLabel(e)}/>
      </div>
      <Button label={btnLabel} varient={btnColorVarient} status={btnisDisabled}></Button>
    </div>
  );
}

export default App;
