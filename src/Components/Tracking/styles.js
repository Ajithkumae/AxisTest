import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Utils/theams';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingBottom: 20,
  },
  subContainer: {padding: '3%'},
  trackViewHeader: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  parentCardView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cardView: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    margin: 5,
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
