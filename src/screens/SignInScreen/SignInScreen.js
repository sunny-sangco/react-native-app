import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/img/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialMediaButtons from '../../components/SocialMediaButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // console.log(errors);
  const onSignInPressed = data => {
    // console.log(data);
    //validate user
    navigation.navigate('Home');
  };
  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password should be minimum 5 characters long'
            },
          }}
        />

        <CustomButton
          onPress={handleSubmit(onSignInPressed)}
          text="Sign In"
          type="PRIMARY"
        />
        <CustomButton
          onPress={onForgotPasswordPress}
          text="Forgot Password?"
          type="TERTIARY"
        />

        <SocialMediaButtons />

        <CustomButton
          onPress={onSignUpPress}
          text="Don't have an account? Create one"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
