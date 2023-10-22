// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Route,Routes } from "react-router-dom";

function App() {
  const [mode,SetMode]=useState('light');
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    },
    setTimeout(()=>{
      setAlert(null)

    },3000)
    )

  }
  const removeClass=()=>{
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  }
  const toggleMode=(cls)=>{
    removeClass();
    console.log(cls);
    if(mode==="light"){
      SetMode("dark");
      document.body.style.backgroundColor="#2B3035";
      showAlert("Dark Mode has been enabled","success")
      document.body.classList.add("bg-"+cls);
      // document.title="TextAPP- DarkMode";
    }else{
      SetMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success")
      document.title="TextAPP- Light/Mode";
    }
  }

  return (
    <>
      <Navbar title="TextAPP" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}/>
      <Route path="/about" element={<About/>}/>


    </Routes>

    </>
  );
}


export default App;
