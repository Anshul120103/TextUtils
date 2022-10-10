import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText]=useState('')
    // text='adfgsg'  //wrong way
    // setText('dfbekfb') //right way

    const handleUpClick=() =>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to Upper Case','success')
    }
    
    const handleLowClick=() =>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to Lower Case','success')
    }
    
    const handleClearClick=() =>{
        let newText=''
        setText(newText)
        props.showAlert('Text Cleared','success')
    }
    
    const handleCopyText=() =>{
        let text=document.getElementById('myBox')
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to Clipboard','primary')
    }

    const handleOnChange=(event) =>{ 
        setText(event.target.value)
    }
    
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick} >Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleLowClick} >Convert to Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleClearClick} >Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleCopyText} >Copy Text</button>
    </div>

    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>{props.heading2}</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").length -1)} Minutes read</p>
    </div>
    </>
  );
}