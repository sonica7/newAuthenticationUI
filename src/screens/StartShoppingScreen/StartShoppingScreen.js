import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/start-image.png';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignOut} from '@fortawesome/free-solid-svg-icons/faSignOut';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const startShoppingPressed = () => {
    //add navigation later
  };
  const onLogOutPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text onPress={onLogOutPress}>
          <FontAwesomeIcon icon={faSignOut} size={22} />
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Welcome To The Future</Text>
        <Text style={styles.text}>
          All set! You're now ready to join us in the world of smart shopping.
        </Text>
      </View>
      <View style={styles.footer}>
        <CustomButton text="Start Shopping" onPress={startShoppingPressed} />
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  mainContainer: {
    paddingHorizontal: 20,
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    paddingHorizontal: 20,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  logo: {
    width: '90%',
    maxWidth: 300,
    maxHeight: 200,
    marginVertical: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    marginBottom: 20,
    fontFamily: 'Rubik-SemiBold',
  },
  text: {
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
  },
});

export default SignUpScreen;
