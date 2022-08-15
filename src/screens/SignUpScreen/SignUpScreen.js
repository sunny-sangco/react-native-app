import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SocialMediaButtons from '../../components/SocialMediaButtons'
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

  const navigation = useNavigation();
 
  const {
    control,
    handleSubmit,
    watch,
  } = useForm();

  const pwd = watch('password');

  const onRegisterPressed = () =>{
    navigation.navigate('ConfirmEmail');
  }

  const onTermsOfUsePressed = () =>{
    console.warn('onTermsOfUsePressed');
  }
  const onPrivacyPressed = () =>{
    console.warn('onPrivacyPressed');
  }

  const onSignInPress = () =>{
    navigation.navigate('SignIn');
  }
  
  const {height} = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      
      <CustomInput 
      name="username"
      placeholder="Username"
      control={control}
      rules={{
        required: 'Username is required',
        minLength: {
          value: 8,
          message: 'Username should be minimum 8 characters long'
        },
      maxLength:{
       value: 25,
       message: 'Username should be max 25 character long'
      }}}
      />

      <CustomInput 
       name="email"
       placeholder="Email"
       control={control}
       rules={{
        pattern: {value: EMAIL_REGEX, message:'Email is invalid'},
        required: 'Email is required'
      }}
      />

      <CustomInput 
         name="password"
         placeholder="Password"
         secureTextEntry={true}
         control={control}
         rules={{
           required: 'Password is required',
           minLength: {
             value: 8,
             message: 'Password should be minimum 8 characters long'
           }
         }}
      />

      <CustomInput 
       name="password-repeat"
       control={control}
       placeholder="Repeat Password"
       secureTextEntry
       rules={{
        required: 'Repeat Password is required',
         validate: value => value === pwd || 'Password do not match',
       }}
      />

      <CustomButton 
        text="Register"
        onPress={handleSubmit(onRegisterPressed)}
        type='PRIMARY'
      />
    
    <Text style={styles.text}>
      By registering, you confirm that you accept our{' '}
      <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
      <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
    </Text>

    <SocialMediaButtons/>
    <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
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
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    Color: '#051C60',
    margin: 10
  },
  text:{
    color: 'gray',
    marginVertical: 10
  },
  link:{
    color:'#FDB075'
  }
});

export default SignUpScreen