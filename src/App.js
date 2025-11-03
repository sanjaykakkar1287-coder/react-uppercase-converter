import './App.css';
import { useState } from 'react'; 
import Copy from './copy.js'

const Nava = (props) => {
 

 function onc(props){
  
   let newtext=text.toUpperCase();
 setText(newtext);
  
}
function low(props){
  let lower=text.toLowerCase();
  setText(lower);
}



const changefun=(event)=>
{
  setText(event.target.value);
 
}
const [text , setText]=useState('Enter text Here');
return (
    <>
    <div className="div1">
      <h1>{props.heading}</h1>
      <textarea className="text" value={text} onChange={changefun} ></textarea>
     
    </div>
     <button className="btn"  onClick={onc}>Convert Text to Uppercase</button>
     <button className="btn1"  onClick={low}>Convert Text to Lowercase</button>
     <Copy />
     <h1 ClassName="len">Total Letters are:-{text.length}</h1>
     <h1 ClassName="len">Total Words are:-{text.trim().split(/\s+/).filter(Boolean).length}</h1>
     </>
  );
};

export default Nava;
