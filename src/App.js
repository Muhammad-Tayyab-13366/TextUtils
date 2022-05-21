
import React, {useState} from 'react';

import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Users from './components/Users';
import {
  
  Routes,
  Route,
} from "react-router-dom";

// let person = {
//   firstName : 'Tayyab',
//   lastName  : 'Jamil',
//   fullName  : function (){
//     return this.firstName +' '+this.lastName;
//   }
// };

// function getName(user){
//   return user.firstName+ ' '+user.lastName;
// }


// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );
function App() {

  const [mode, setmode] = useState('light');
  const [modeLableTxt, setmodeLableTxt] = useState('Enable Dark Mode.');
  const [backgroundColor, setbackgroundColor] = useState({
                                                  background : 'white',
                                                  color : 'black'
                                                });
 
  const handleMode = () => {

    if(mode === 'light'){
      console.log(mode);
      setmode('dark');
      setmodeLableTxt('Enable Light Mode.')
      setbackgroundColor({
        background : '#5c6b81',
        color : 'white'
      })

      document.body.style.backgroundColor = '#5c6b81';
      showAlert('success','Dark mode is enabled.');
      
    }
    else{
      console.log(mode);
      setmode('light');
      setmodeLableTxt('Enable Dark Mode.')
      setbackgroundColor({
        background : 'white',
        color : 'black'
      });

      document.body.style.backgroundColor = 'white';
      showAlert('success','Light mode is enabled.');
     
    }

   
  }
  
  const showAlert = (type, msg) => {
    setalert({
      type : type,
      msg : msg
    });

    setTimeout(()=>{
      setalert(null);
    }, 1500) 
  }

  const [alert, setalert] = useState(null);

  return (
    <>
     
      
      <Navbar mode={mode} handleMode={handleMode} modeLableTxt={modeLableTxt}></Navbar>
     
 
       <Routes >
        
          
          <Route  exact path="/" element={ <div className='container'>
            <div className='alter-height'> 
            <Alert alert={alert} ></Alert>
            </div> 
            <TextForm mode={mode} backgroundColor={backgroundColor} showAlert={showAlert}></TextForm>
          </div>} />
          <Route  exact path="/about" element={<About />} />
          <Route  exact path="/users" element={<Users />} />
            
        
              
              
     
     
       </Routes>

    
    </>


  );
}





export default App;
