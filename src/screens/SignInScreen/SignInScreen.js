import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/images/shop-image.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-regular-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons/faEyeSlash';

const SignInScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const onSignInPressed = data => {
    console.log(data);
    // validate user
    navigation.navigate('StartShopping');
  };
  const onForgotPasswordPressed = () => {
    //Reset password screen needed
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>1, 2, 3 Ready To Go!</Text>
      </View>
      <View style={styles.mainContainer}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <CustomInput
          name="email"
          placeholder="E-mail Address*"
          control={control}
          rules={{required: 'E-mail is required'}}
        />
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
          rules={{required: 'Password is required'}}
        />
      </View>
      <View style={styles.footer}>
        <CustomButton
          text="Sign Up"
          onPress={onSignUpPressed}
          type="SECONDARY"
        />
        <CustomButton text="Log In" onPress={handleSubmit(onSignInPressed)} />
        <View style={styles.intro}>
          <Text>Forgot Password?</Text>
          <CustomButton
            text="Reset here"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />
        </View>
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
    alignItems: 'center',
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
  logo: {
    width: '90%',
    maxWidth: 300,
    maxHeight: 200,
    marginTop: 30,
  },
  intro: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    fontFamily: 'Rubik-Regular',
  },
});

export default SignInScreen;
