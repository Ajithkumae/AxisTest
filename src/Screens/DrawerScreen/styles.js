import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Utils/theams';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  selectedOption: {
    width: 10,
    backgroundColor: COLORS.white,
    height: '100%',
  },
  titleTxt: {
    color: COLORS.white,
    flex: 1,
    fontSize: FONTS.h2_3,
  },
  unSelectedTitle: {
    opacity: 0.5,
    color: COLORS.white,
    fontSize: FONTS.h2_3,
  },
  iconOpacity: {
    opacity: 0.5,
  },
});

export default styles;
