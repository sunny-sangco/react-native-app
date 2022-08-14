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

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, serNewPassword] = useState("");
  const navigation = useNavigation();
  
  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  const onBackToSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={serNewPassword}
        />

        <CustomButton
          onPress={onSubmitPressed}
          text="Submit"
          type="PRIMARY"
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

export default NewPasswordScreen;
