import React from 'react'
import './../Style.css'
import SignUp from './RegisterationField'
const RegistrationImage = () => {
  return (
  <>
   
   <div className='mainregistration'>
     <div className='registrationimage'>
     <img src={require('../Assets/RegistrationImage.png')}  style={{width:'90%',height:'700px'}} />
     </div>
   
    <div className='sigupform'>
    <SignUp/>
    </div>
   </div>

  
  
  </>
  )
}

export default RegistrationImage
