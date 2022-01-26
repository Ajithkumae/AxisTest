import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../../Components/Header';
import styles from './styles';
import FundBase from '../../../Components/FundBase';
import Tracking from '../../../Components/Tracking';
import {COLORS} from '../../../Utils/theams';
import {useSelector} from 'react-redux';

const options = [
  'Portfolio',
  'Renewal & irrgularities Acquisition',
  'Business Perfomance',
  'KRA',
];

const SsbCockPit = props => {
  const [btnHighligt, setBtnHighligt] = useState(0);
  const {userNameState} = useSelector(state => state.loginReducer);

  const onChangeScreen = inx => {
    setBtnHighligt(inx);
  };
  return (
    <View style={styles.container}>
      <Header
        leftBtn={() => props.navigation.openDrawer()}
        user={userNameState}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>SSB Cockpit</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {options.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionsBtn,
                  {
                    backgroundColor:
                      index !== btnHighligt ? COLORS.white : COLORS.appColor,
                  },
                ]}
                onPress={() => onChangeScreen(index)}>
                <Text
                  style={{
                    color: index !== btnHighligt ? COLORS.black : COLORS.white,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={styles.bodyView}>
          <FundBase />
        </View>
        <View style={styles.bodyView}>
          <Tracking />
        </View>
      </ScrollView>
    </View>
  );
};
export default SsbCockPit;
