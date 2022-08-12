import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/img/logo.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPress = () =>{
    console.warn('Sign In');
  }

  const onForgotPasswordPress = () =>{
    console.warn('onForgotPasswordPressed');
  }

  const onSignInFacebook = () =>{
    console.warn('onSignInFacebook');
  }

  const onSignInGoogle = () =>{
    console.warn('onSignInGoogle');
  }

  const onSignInApple = () =>{
    console.warn('onSignInApple');
  }

  const onSignUpPress = () =>{
    console.warn('onSignUpPressed');
  }


  const {height} = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Image 
      source={Logo} 
      style={[styles.logo, {height: height * 0.3}]}
      resizeMode='contain'
      />
      
      <CustomInput 
      placeholder='Username' 
      value={username} 
      setValue={setUsername} 
      />

      <CustomInput 
        placeholder='Password' 
        value={password} 
        setValue={setPassword} 
        secureTextEntry={true}  
      />

      <CustomButton 
        onPress={onSignInPress} 
        text='Sign In'
        type='PRIMARY'
      />
      <CustomButton
        onPress={onForgotPasswordPress} 
        text='Forgot Password?' 
        type='TERTIARY'
      />
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
      <CustomButton 
        onPress={onSignUpPress} 
        text="Don't have an account? Create one" 
        type='TERTIARY'
      />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20
  }, 
  logo:{
    width:'80%',
    maxWidth: 300,
    maxHeight: 200
  }
});

export default SignInScreen