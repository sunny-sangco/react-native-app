import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onBackToSignInPressed = () => {
   navigation.navigate('SignIn');
  };

  const onResendCodePressed = () => {
    console.warn("onResendCodePressed");
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton
          onPress={onConfirmPressed}
          text="Confirm"
          type="PRIMARY"
        />

        <CustomButton
          onPress={onResendCodePressed}
          text="Resend Code"
          type="SECONDARY"
        />

        <CustomButton
          onPress={onBackToSignInPressed}
          text="Back to Sign In"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    Color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ConfirmEmailScreen;
