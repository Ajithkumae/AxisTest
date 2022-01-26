import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../../../Utils/theams';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {images} from '../../../Utils/images';

const meetingData = [
  {
    title: 'NTB',
    linear_gradient: {
      color1: COLORS.white,
      color2: COLORS.black,
    },
  },
  {
    title: 'PLATINUM',
    linear_gradient: {
      color1: COLORS.lightBlue,
      color2: COLORS.lightBlue2,
    },
  },
  {
    title: 'GOLD',
    linear_gradient: {
      color1: COLORS.lightGold1,
      color2: COLORS.lightGold2,
    },
  },
  {
    title: 'SILVER',
    linear_gradient: {
      color1: COLORS.lightSilver1,
      color2: COLORS.lightSilver2,
    },
  },
  {
    title: 'BRONZE',
    linear_gradient: {
      color1: COLORS.lightBronze1,
      color2: COLORS.lightBronze2,
    },
  },
];

const MeetingPlanner = props => {
  const {userNameState} = useSelector(state => state.loginReducer);
  const [btnHighligt, setBtnHighligt] = useState('This_Week');

  const IconTextBtn = ({icon, name}) => {
    return (
      <TouchableOpacity style={styles.iconBtn}>
        <Icon name={icon} color={COLORS.appColor} size={FONTS.h2} />
        <Text style={styles.iconBtnSty}>{name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Header
        leftBtn={() => props.navigation.openDrawer()}
        user={userNameState}
      />
      <Text style={styles.pageTitle}>Meeting Planing</Text>
      <ScrollView horizontal={true}>
        <IconTextBtn icon={'calendar-outline'} name={'SheduleMeeting'} />
        <IconTextBtn icon={'document-attach-outline'} name={'LogMeeting'} />
        <IconTextBtn icon={'refresh-outline'} name={'PastMeeting'} />
      </ScrollView>
      <View style={styles.container}>
        <View style={styles.trackViewHeader}>
          <View style={styles.cardHeadTitle}>
            <Text>To Do</Text>
          </View>
          <View style={styles.searchView}>
            <TextInput placeholder="Search" />
            <Icon name={'search'} color={COLORS.appColor} size={FONTS.h3} />
          </View>
        </View>

        <View style={styles.tabView}>
          <TouchableOpacity onPress={() => setBtnHighligt('This_Week')}>
            <Text
              style={[
                styles.tabBtn,
                btnHighligt === 'This_Week' && {color: COLORS.appColor},
              ]}>
              This Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBtnHighligt('This_Next')}>
            <Text
              style={[
                styles.tabBtn,
                btnHighligt === 'This_Next' && {color: COLORS.appColor},
              ]}>
              Next Week
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true}>
          {meetingData.map((item, index) => {
            return (
              <View style={styles.cardView} key={index}>
                <LinearGradient
                  colors={[
                    item.linear_gradient.color1,
                    item.linear_gradient.color2,
                  ]}
                  style={styles.cardRightView}
                />
                <Text style={styles.cardTxt}>
                  {item.title}
                  {'\n'}MEETING
                </Text>
                <View style={styles.cardLeftView} />
                <View style={styles.cardLeftView} />
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.resultView}>
          <Image source={images.searchIcon} style={styles.icon} />
          <Text style={[styles.fontTxt, {fontSize: FONTS.h2}]}>
            No Records Found
          </Text>
          <Text
            style={[
              styles.lightFontTxt,
              {fontSize: FONTS.h1_9, textAlign: 'center'},
            ]}>
            The records you were looking for was not found
          </Text>
        </View>
      </View>
    </View>
  );
};
export default MeetingPlanner;
