// import logo from './logo.svg'; // Ensure this file exists in the src directory
import './App.css'; // Ensure the CSS file exists
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';


function App() {
  const[mode ,setmode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","sucess");

    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","sucess");
    }
  }
  return (
    <>
      
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      <div className='container my-3'>
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About></About> */}

      </div>
      

      
      
    </>
  
  );
}

export default App;
