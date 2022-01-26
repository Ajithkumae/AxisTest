import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import InputText from '../../Components/InputText';
import {setLogin} from '../../Redux/Action/loginAction';
import {images} from '../../Utils/images';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, keyboardHideType, keyboardShowType} from '../../Utils/theams';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {userNameState} = useSelector(state => state.loginReducer);
  const login = async val => {
    dispatch(setLogin(val));
    console.log('userNameState ', userNameState);
  };
  const [enableKeyboard, setEnableKeyboard] = useState(0);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const kwsl = Keyboard.addListener(keyboardShowType, e =>
      setEnableKeyboard(e.endCoordinates.height),
    );
    const kwhl = Keyboard.addListener(keyboardHideType, () =>
      setEnableKeyboard(0),
    );
    return () => {
      kwsl.remove();
      kwhl.remove();
    };
  }, [enableKeyboard]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.BackgroundImg}
        style={styles.backgroundImg}>
        <Image source={images.AxisBankIcon} style={styles.icon} />
        <Text
          style={
            !enableKeyboard > 0 ? styles.title : styles.enableKeboardTitleView
          }>
          SSB Business App
        </Text>
        <View
          style={[
            styles.loginView,
            enableKeyboard > 0 && {marginTop: heightPercentageToDP(6)},
          ]}>
          <Text style={styles.loginTitle}>Login</Text>
          <View style={styles.inputTextView}>
            <InputText
              placeholder={'User Id'}
              value={userName}
              onChangeText={val => setUserName(val)}
            />
          </View>
          <View style={styles.inputTextView}>
            <InputText
              placeholder={'Password'}
              value={password}
              onChangeText={val => setPassword(val)}
            />
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => login(userName)}>
            <LinearGradient
              colors={[COLORS.red, '#9C0C10']}
              style={styles.linearGradient}>
              <Text style={styles.btnTitle}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
