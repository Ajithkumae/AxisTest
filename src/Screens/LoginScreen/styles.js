import {StyleSheet} from 'react-native';
import {COLORS, FONTS, ICONSIZE, winHeight} from '../../Utils/theams';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backgroundImg: {
    height: winHeight > 380 ? hp(50) : hp(55),
    width: '100%',
  },
  icon: {
    height: ICONSIZE.h4,
    width: 140,
    margin: 40,
  },
  title: {
    color: COLORS.white,
    fontSize: FONTS.h4_5,
    alignSelf: 'center',
    fontWeight: '700',
    marginTop: 30,
  },
  enableKeboardTitleView: {
    color: COLORS.white,
    fontSize:FONTS.h2_5,
    alignSelf: 'flex-end',
    fontWeight: '700',
    marginRight: 40,
  },
  loginView: {
    marginTop: hp(10),
    padding: 10,
    backgroundColor: COLORS.white,
    marginHorizontal: '10%',
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 10,
    shadowColor: COLORS.gray,
    shadowOpacity: 0.2,
  },
  loginTitle: {
    color: COLORS.black,
    fontWeight: '500',
  },
  inputTextView: {
    paddingVertical: hp(2.5),
  },
  linearGradient: {
    marginTop: 40,
    height: 40,
    width: 150,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default styles;
