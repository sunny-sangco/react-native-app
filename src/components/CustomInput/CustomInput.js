import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInputs = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
        <View style={[styles.container,{borderColor: error ? 'red' : '#e8e8e8'}]}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onblur={onBlur}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
        </View>
        {error && (
        <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
        )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInputs;
