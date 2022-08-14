import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialMediaButtons = () => {
    const onSignInFacebook = () =>{
        console.warn('onSignInFacebook');
      }
    
      const onSignInGoogle = () =>{
        console.warn('onSignInGoogle');
      }
    
      const onSignInApple = () =>{
        console.warn('onSignInApple');
      }    

  return (
    <>
        <CustomButton 
        onPress={onSignInFacebook} 
        text='Sign In with Facebook'
        bgColor='#E7EAF4'
        fgColor='#4765A9'
      />
        <CustomButton 
        onPress={onSignInGoogle} 
        text='Sign In with Google' 
        bgColor='#FAE9EA'
        fgColor='#DD4D44'
      />
        <CustomButton 
        onPress={onSignInApple} 
        text='Sign In with Apple' 
        bgColor='#e3e3e3'
        fgColor='#363636'
      />
    </>
  )
}

export default SocialMediaButtons