import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Utils/theams';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerImg: {
    height: hp(8),
    width: '100%',
    justifyContent: 'center',
  },
});

export default styles;
