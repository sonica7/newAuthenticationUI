import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();
  const onArrowBackPressed = () => {
    navigation.navigate('SignUp');
  };
  const confirmPressed = data => {
    navigation.navigate('StartShopping');
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text onPress={onArrowBackPressed}>
          <FontAwesomeIcon icon={faArrowLeft} size={22} />
        </Text>
        <Text style={styles.title}>Account Validation</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>
          We've sent a verification code to your phone. The code is valid for
          90s
        </Text>
        <OTPInputView
          style={styles.otp}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
          editable={true}
        />
      </View>
      <View style={styles.footer}>
        <CustomButton text="Confirm" onPress={handleSubmit(confirmPressed)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  mainContainer: {
    paddingHorizontal: 20,
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footer: {
    paddingHorizontal: 20,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  title: {
    width: '90%',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Rubik-SemiBold',
  },
  text: {
    color: '#000',
    marginTop: 40,
  },
  otp: {
    width: '100%',
    height: 70,
    paddingHorizontal: 10,
  },
  borderStyleBase: {
    width: 35,
    height: 45,
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    color: '#000',
    fontFamily: 'Rubik-Regular',
  },
  borderStyleHighLighted: {
    borderBottomWidth: 2,
  },
  underlineStyleHighLighted: {
    borderBottomWidth: 2,
  },
});

export default SignUpScreen;
