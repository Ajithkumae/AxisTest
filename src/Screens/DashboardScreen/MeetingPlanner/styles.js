import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../Utils/theams';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingBottom: 20,
    marginHorizontal: '3%',
  },
  pageTitle: {
    fontSize: FONTS.h4,
    margin: '3%',
  },
  flex: {flex: 1},
  trackViewHeader: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  fontTxt: {
    fontSize: FONTS.h1_1,
    fontWeight: 'bold',
  },
  lightFontTxt: {
    fontSize: FONTS.h1_1,
    opacity: 0.5,
  },
  cardHeadTitle: {
    borderBottomWidth: 1,
    width: 40,
    borderBottomColor: COLORS.appColor,
  },
  cardView: {
    borderWidth: 0.5,
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    paddingRight: 20,
    width: 150,
    height: 100,
  },
  cardRightView: {
    height: 40,
    width: 20,
    borderRadius: 15,
    marginLeft: -7,
    borderWidth: 0.2,
  },
  cardLeftView: {
    height: 30,
    width: 15,
    borderWidth: 0.2,
    borderRadius: 20,
  },
  icon: {
    height: FONTS.h10,
    width: FONTS.h10,
  },
  iconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  iconBtnSty: {
    marginLeft: 10,
    color: COLORS.appColor,
  },
  tabView: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabBtn: {
    padding: 10,
  },
  resultView: {
    alignItems: 'center',
    marginTop: 20,
  },
  cardTxt: {
    flex: 1,
    paddingLeft: 10,
  },
  searchView: {
    borderBottomWidth: 1,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
});

export default styles;
