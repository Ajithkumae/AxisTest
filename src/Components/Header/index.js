import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../Utils/images';
import {COLORS, FONTS, ICONSIZE} from '../../Utils/theams';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Text
 * @description Custom coponent for common InputTextField
 * @param {props} leftBtn - menu Icon
 * @param {props} user - User name
 *
 */

const Header = props => {
  const {leftBtn, user} = props;

  return (
    <ImageBackground source={images.HeaderImg} style={styles.headerImg}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <TouchableOpacity onPress={() => leftBtn?.()}>
            <Icon name={'menu'} color={COLORS.white} size={FONTS.h4} />
          </TouchableOpacity>

          <Image
            source={images.AxisBankIcon}
            style={{
              height: 20,
              width: 90,
              marginLeft: ICONSIZE.h2,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: '2%',
          }}>
          <Icon
            name={'person-outline'}
            color={COLORS.appColor}
            size={FONTS.h3}
            style={styles.userIcon}
          />
          <Text>Hello! {user}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;
