import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faEye} from '@fortawesome/free-regular-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&´*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PHONE_REGEX = /(9[1236][0-9]{1})([0-9]{6})/;
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
  } = useForm({
    defaultValues: {
      phoneCode: '+351',
    },
  });
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [checkboxState, setCheckboxState] = useState(false);

  const onArrowBackPressed = () => {
    navigation.navigate('SignIn');
  };
  const onSignUpPressed = data => {
    console.log(data);
    navigation.navigate('AccountValidation');
  };
  const termsConditionsPressed = () => {
    console.warn('Terms and conditions');
  };
  const privacyPolicyPressed = () => {
    console.warn('Privacy policy');
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text onPress={onArrowBackPressed}>
          <FontAwesomeIcon icon={faArrowLeft} size={22} />
        </Text>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.mainContainer}>
        <CustomInput
          name="name"
          placeholder="Name*"
          control={control}
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be a maximum of 24 characters',
            },
          }}
        />
        <Text style={styles.info}>
          Enter your name as it appears on your ID
        </Text>
        <CustomInput
          name="email"
          placeholder="E-mail Address*"
          control={control}
          rules={{
            required: 'E-mail is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <View style={styles.inlineInputs}>
          <CustomInput
            name="phoneCode"
            register="phoneCode"
            control={control}
            editable={false}
            alignment="inline20"
          />
          <CustomInput
            name="phone"
            placeholder="Phone Number*"
            control={control}
            rules={{
              required: 'Phone number is required',
              pattern: {value: PHONE_REGEX, message: 'Phone is invalid'},
              maxLength: {
                value: 9,
                message: 'Phone should be a maximum of 9 digits',
              },
            }}
            alignment="inline75"
          />
        </View>
        <CustomInput
          name="password"
          placeholder="Password*"
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Text>
                <FontAwesomeIcon
                  icon={isSecureEntry ? faEye : faEyeSlash}
                  size={22}
                  color={'grey'}
                />
              </Text>
            </TouchableOpacity>
          }
          secureTextEntry={isSecureEntry}
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <Text style={styles.info}>* Required</Text>
      </View>
      <View style={styles.footer}>
        <BouncyCheckbox
          size={25}
          fillColor="#000"
          unfillColor="#EEE"
          text={
            <Text style={styles.textCheck}>
              By checking this box, I agree to Reckon.ai{' '}
              <Text style={styles.link} onPress={termsConditionsPressed}>
                Terms & Conditions
              </Text>{' '}
              and{' '}
              <Text style={styles.link} onPress={privacyPolicyPressed}>
                Privacy Policy
              </Text>
              .
            </Text>
          }
          textStyle={{textDecorationLine: 'none'}}
          iconStyle={{borderRadius: 2}}
          innerIconStyle={{borderRadius: 2, borderColor: '#EEE'}}
          isChecked={checkboxState}
          onPress={() => setCheckboxState(!checkboxState)}
        />
        <CustomButton
          text="Save and Continue"
          onPress={handleSubmit(onSignUpPressed)}
        />
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
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Rubik-SemiBold',
  },
  textCheck: {
    color: '#000',
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
  },
  inlineInputs: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  info: {
    fontSize: 10,
    paddingTop: 8,
    alignSelf: 'flex-start',
    fontFamily: 'Rubik-Regular',
  },
  link: {
    color: '#000',
    fontFamily: 'Rubik-Medium',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
