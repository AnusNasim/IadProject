import React from 'react'
import SignIn from './Loginfield'
import './../Style.css'

const LoginImage = () => {
  return (
    <>
    <div className='mainlogin'>
    
     <div className='loginimage'>
    <img src={require('../Assets/loginimage.png')} style={{width:'80%',height:'700px'}} />
     </div>
    
   <div>
   <SignIn/>
   </div>

    </div>
    
    </>
  )
}

export default LoginImage
