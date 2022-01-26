import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '../../Utils/theams';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle';
import styles from './styles';
const data = {
  percentage: 10.0,
  amount: 15,
  dinomation: 'Cr',
  numOfCust: 5,
  numOfAcc: 5,
  PreData: {
    percentage: 10.0,
    amount: 20,
    dinomation: 'Cr',
  },
};
const FundBase = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fundViewHeader}>
        <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>Fund Base</Text>
        <TouchableOpacity>
          <Icon
            name={'chevron-forward'}
            color={COLORS.appColor}
            size={FONTS.h2_5}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <ProgressCircle
          percent={10}
          radius={70}
          borderWidth={25}
          color={COLORS.appColor}
          bgColor={COLORS.white}
          containerStyle={styles.containerStyle}
          outerCircleStyle={styles.outerCircleStyle}>
          <Text style={[styles.fontTxt, {fontSize: FONTS.h1_8}]}>
            {data.percentage}.00%
          </Text>
          <Text
            style={[
              styles.fontTxt,
              {fontWeight: 'normal', fontSize: FONTS.h1_1},
            ]}>
            Utilization
          </Text>
        </ProgressCircle>
        <View>
          <View style={styles.progressBarReport}>
            <View
              style={[styles.inducator, {backgroundColor: COLORS.lightGreen}]}
            />
            <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>
              Outstanding Amount
            </Text>
          </View>
          <View style={styles.progressBarReport}>
            <View
              style={[styles.inducator, {backgroundColor: COLORS.lightPurple}]}
            />
            <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>
              Sanction Limit
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.reportView}>
        <View>
          <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>
            Outstanding Amount
          </Text>
          <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
            18 Sep 2020
          </Text>
          <Text style={[styles.fontTxt, {fontSize: FONTS.h2}]}>₹ 0 Cr</Text>
          <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
            As of 17 Sep 2020 ₹ {data.PreData.amount}
            {data.PreData.dinomation}
          </Text>
        </View>
        <View>
          <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
            Number oF Customer
          </Text>
          <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>
            {data.numOfCust}
          </Text>
          <Text style={[styles.lightFontTxt, {fontSize: FONTS.h1_5}]}>
            Number oF Account
          </Text>
          <Text style={[styles.fontTxt, {fontSize: FONTS.h1_5}]}>
            {data.numOfAcc}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FundBase;
