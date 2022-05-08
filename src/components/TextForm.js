import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  
  const handelerUpClick = () => {
    console.log('handelerUpClick');
    setText(text.toUpperCase());
    props.showAlert('success','Converted to uppercase.');
  }

  const handlerOnChnage = (event) => {
    // document.getElementById('preview').innerHTML = text.split("\n").join("<br />");
    setText(event.target.value); 
    
  }

  const handelerLcClick = () => {
    setText(text.toLowerCase());
    props.showAlert('success','Converted to lowercase.');
  }

  const handelerPreviewClick = () => {
    
    document.getElementById('preview').innerHTML = text.split("\n").join("<br />");
    props.showAlert('success','Preview has shown below.');
   
  }

  const handelerClearClick = () => {
    setText('');
    props.showAlert('success','Text cleared.');
  }

  // const handelerDarkModeClick = () => {
    
  //   if(btnDarkModeText === 'Dark Mode')
  //   {
  //     // setmyStyle({
  //     //   background : '#5c6b81',
  //     //   color : 'white'
  //     // });
  //     setbtnDarkModeText('Light Mode');
  //   }
  //   else
  //   {
  //   //   setmyStyle({
  //   //     background : 'white',
  //   //     color : 'black'
  //   //   });
  //   //   setbtnDarkModeText('Dark Mode');
  //   }
  // }

 

  const [text, setText] = useState('');
  //const [btnDarkModeText, setbtnDarkModeText] = useState('Dark Mode');
  // const [myStyle, setmyStyle] = useState({
  //   background : 'white',
  //   color : 'black'
  // });

  return (
    <div className='my-5 ' style={props.backgroundColor}>
        <div className="mb-3  ">
            <h2><label htmlFor="myBox" className="form-label">{props.heading}</label></h2>
            <textarea className="form-control" onChange={handlerOnChnage} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handelerUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary m-1' onClick={handelerLcClick}>Convert to Lowercase</button>
        <button className='btn btn-primary m-1' onClick={handelerClearClick}>Clear Text</button>
        <button className='btn btn-primary m-1' onClick={handelerPreviewClick}>Preview</button>
        {/* <button className='btn btn-primary m-1' onClick={handelerDarkModeClick}>{btnDarkModeText}</button> */}
        <br/><br/>
        <div className='container border  rounded'>
          <h1 >Your Text Summary</h1>
          <p>Total words are <b>{text === '' ? 0 : text.trim().split(/\s+/).length }</b> and letters are <b>{text.length}</b></p>
        </div>
        <br/><br/>
        <div className='container p-0 m-0 '>
          <h2 className='border m-0 border  rounded-top'>Preview</h2>
          <div className='border m-0 p-2 border  rounded' id='preview'></div>
        </div>
    </div>
  )
}


TextForm.propTypes = {
    heading : PropTypes.string
}

TextForm.defaultProps = {
    heading : 'Enter text to Manipulate'
}