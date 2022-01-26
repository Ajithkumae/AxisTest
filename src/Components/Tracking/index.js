import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../Components/Header';
import {COLORS, FONTS} from '../../Utils/theams';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Tracking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.trackViewHeader}>
        <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>
          Interaction Tracking
        </Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
          As on 17 Sep 2020
        </Text>
        <View style={styles.parentCardView}>
          <View style={styles.cardView}>
            <View>
              <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>0</Text>
              <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
                Meeting WTD
              </Text>
            </View>
            <Icon
              name={'md-chatbubbles-outline'}
              color={COLORS.appColor}
              size={FONTS.h4}
            />
          </View>

          <View style={styles.cardView}>
            <View>
              <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>0</Text>
              <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
                Meeting MTD
              </Text>
            </View>
            <Icon
              name={'md-chatbubbles-outline'}
              color={COLORS.appColor}
              size={FONTS.h4}
            />
          </View>

          <View style={styles.cardView}>
            <View>
              <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>0</Text>
              <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
                Meeting YTD
              </Text>
            </View>
            <Icon
              name={'md-chatbubbles-outline'}
              color={COLORS.appColor}
              size={FONTS.h4}
            />
          </View>
          <View style={styles.cardView}>
            <View>
              <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>{0}%</Text>
              <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
                Percentage portfolio{'\n'}coverage MTD
              </Text>
            </View>
            <Icon
              name={'md-chatbubbles-outline'}
              color={COLORS.appColor}
              size={FONTS.h4}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tracking;
