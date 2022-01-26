import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../../Utils/theams';
const styles = StyleSheet.create({
  container: {
    paddingBottom:"6%"
  },
  pageTitle: {
    fontSize: FONTS.h4,
    margin: '3%',
  },
  optionsBtn: {
    backgroundColor: COLORS.appColor,
    padding: 15,
    margin: 5,
    borderRadius: 5,
  },
  bodyView: {
    margin: '2%',
  },
});

export default styles;
