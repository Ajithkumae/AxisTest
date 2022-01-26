import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../../Utils/theams';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ScreensName from '../../Constants/ScreensName';
import * as storage from '../../Service/cookie';
import {logout} from '../../Redux/Action/loginAction';
import {useDispatch} from 'react-redux';

const data = [
  {
    icon: 'md-pie-chart-outline',
    name: 'SSB Cockpit',
    navigation: ScreensName.SSBSCREEN,
  },
  {
    icon: 'person-outline',
    name: 'Customer 360',
    navigation: '',
  },
  {
    icon: 'md-document-text-outline',
    name: 'Meeting Planner',
    navigation: ScreensName.MEETINGSCREEN,
  },
  {
    icon: 'clipboard-outline',
    name: 'Lead Pipeline',
    navigation: '',
  },
  {
    icon: 'md-pie-chart-outline',
    name: 'Hubble Board',
    navigation: '',
  },
];

const DrawerScreen = props => {
  const dispatch = useDispatch();
  console.log('props');
  const [btnHighligt, setBtnHighligt] = useState(0);

  const onChangeScreen = (nav, inx) => {
    setBtnHighligt(inx);
    if (nav) {
      props.navigation.closeDrawer();
      props.navigation.navigate(nav);
    }
  };
  const LogOut = () => {
    dispatch(logout());
  };
  return (
    <LinearGradient
      colors={[COLORS.appColor, COLORS.red]}
      style={styles.container}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.subContainer}
            key={index}
            onPress={() => onChangeScreen(item?.navigation, index)}>
            <Icon
              name={item.icon}
              color={COLORS.white}
              size={FONTS.h4}
              style={index !== btnHighligt && styles.iconOpacity}
            />
            <Text
              style={
                index == btnHighligt ? styles.titleTxt : styles.unSelectedTitle
              }>
              {item.name}
            </Text>
            {index == btnHighligt && <View style={styles.selectedOption} />}
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity style={styles.subContainer} onPress={() => LogOut()}>
        <Icon
          name={'log-out-outline'}
          color={COLORS.white}
          size={FONTS.h4}
          style={styles.iconOpacity}
        />
        <Text style={styles.unSelectedTitle}>Sign Out</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DrawerScreen;
