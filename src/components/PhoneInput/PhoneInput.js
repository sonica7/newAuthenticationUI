import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const PhoneInput = ({control, name, rules = {}, placeholder}) => {
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
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
            />
          </View>
          {error && (
            <Text style={styles.error}>{error.message || 'Error'}</Text>
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
  error: {
    fontSize: 10,
    fontFamily: 'Rubik-Regular',
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: 8,
  },
});

export default PhoneInput;
