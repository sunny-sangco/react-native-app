import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInputs = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder= {placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15, 
    fontSize: 16,
    marginVertical: 5
  },
  input: {

},
});

export default CustomInputs