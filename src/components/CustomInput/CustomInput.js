import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  icon,
  secureTextEntry,
  editable,
  alignment,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderBottomColor: error ? 'red' : 'black'},
              styles[`input_${alignment}`],
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              icon={icon}
              secureTextEntry={secureTextEntry}
              editable={editable}
              alignment={alignment}
            />
            <View>{icon}</View>
          </View>
          {error && (
            <Text style={[styles.error, styles[`error_${alignment}`]]}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingVertical: 10,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Rubik-Regular',
  },
  input: {
    fontSize: 15,
    width: '95%',
  },
  input_inline20: {
    width: '20%',
  },
  input_inline75: {
    width: '75%',
  },
  error: {
    fontSize: 10,
    fontFamily: 'Rubik-Regular',
    color: 'red',
    marginTop: 8,
    width: '100%',
  },
  error_inline75: {
    marginLeft: '25%',
    marginTop: 0,
  },
});

export default CustomInput;
