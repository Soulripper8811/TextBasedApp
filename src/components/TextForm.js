import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to upper case","success")
      }
    const handleToLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to lower case","success")
      }
      const handleOnChange=(event)=>{
        setText(event.target.value);
      }
      const handleClear=()=>{
        setText("");
        props.showAlert("Text is clear","success")
      }
      const handleToReverse=()=>{
        let newText="";
        for(let i=text.length-1;i>=0;i--){
          newText+=text[i];
        }
        setText(newText)
        props.showAlert("Text is reversed","success")
      }
      const handleCopy=()=>{
        let text=document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is coped to clipboard","success")
      }
      const handleSpace=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space is removed","success")
    }
    
    const[text,setText]=useState("");

  return (

    <div className="container my-3">

    <div>
        <h1 style={{color:props.mode==="light"?"black":"white"}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>ConvertToUpper</button>
    <button className="btn btn-primary mx-2" onClick={handleToLowerClick}>ConvertToLower</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Karo</button>
    <button className="btn btn-primary mx-2" onClick={handleToReverse}>ClickToReverese</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>ClickToCopy</button>
    <button className="btn btn-primary mx-2" onClick={handleSpace}>ClickToRemoveExtraSpace</button>

    <div className="container my-2">
      <h2 style={{color:props.mode==="light"?"black":"white"}}>Text Summary:</h2>
      <p style={{color:props.mode==="light"?"black":"white"}}>Word count: {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
      <p style={{color:props.mode==="light"?"black":"white"}}>Letter count: {text.length}</p>
      <p style={{color:props.mode==="light"?"black":"white"}}>Time to read: {text.split("").length *0.008}</p>
      <h2 style={{color:props.mode==="light"?"black":"white"}}>Preveiw: </h2>
      <p style={{color:props.mode==="light"?"black":"white"}}>{text.length>0?text:"Enter the text to preview"}</p>
    </div>

    </div>
    </div>
  )
}
