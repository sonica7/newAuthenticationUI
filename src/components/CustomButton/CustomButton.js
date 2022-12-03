import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 4,
    fontWeight: 16,
    marginTop: 20,
  },
  container_PRIMARY: {
    backgroundColor: '#000',
  },
  container_SECONDARY: {
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
  },
  container_TERTIARY: {
    backgroundColor: '#FFF',
    width: 'auto',
    paddingVertical: 0,
    paddingHorizontal: 4,
    marginVertical: 0,
    borderRadius: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  text: {
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
  text_SECONDARY: {
    fontFamily: 'Rubik-Medium',
    color: '#000',
  },
  text_TERTIARY: {
    color: '#000',
  },
});

export default CustomButton;
