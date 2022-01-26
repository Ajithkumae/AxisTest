import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../Utils/theams';
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: 20,
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
  containerStyle: {
    borderWidth: 0.5,
    borderColor: COLORS.gray,
  },
  outerCircleStyle: {
    borderWidth: 0.5,
    overflow: 'hidden',
    borderColor: COLORS.gray,
  },
  fundViewHeader: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  inducator: {
    width: 4,
    height: '100%',
    marginHorizontal: 7,
    borderRadius: 3,
  },
  reportView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginBottom: 20,
  },
  progressBarReport: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    height: FONTS.h4_5,
  },
  fontTxt: {
    fontSize: FONTS.h1_1,
    fontWeight: 'bold',
  },
  lightFontTxt: {
    fontSize: FONTS.h1_1,
    opacity: 0.5,
  },
});

export default styles;
