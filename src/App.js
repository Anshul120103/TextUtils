import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import PropTypes from 'prop-types'
import React,{useState} from 'react'
// import About from './Components/About';
import Alert from './Components/Alert';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [text,setText]=useState('Enable Dark Mode')
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 3000);

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setText('Enable Light Mode')
      document.body.style.backgroundColor='black'
      showAlert('Dark mode has been enabeled','success')
    }
    
    else{
      setMode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabeled','success')
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title='Text Utils' mode={mode} toggleMode={toggleMode} text={text}/>
      <Alert alert={alert}/>
      <div className="container">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode}/>}/> */}
          {/* <Route exact path="/" element={<TextForm heading='Enter Text to Analyze' heading2='Your Text Summary' mode={mode} showAlert={showAlert}/>}/> */}
          <TextForm heading='Enter Text to Analyze' heading2='Your Text Summary' mode={mode} showAlert={showAlert}/>
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

Navbar.propTypes={
  title:PropTypes.string
}

Navbar.defaultProps={
  title:'Set title here'
}