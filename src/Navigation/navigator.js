import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreensName from '../Constants/ScreensName';
import LoginScreen from '../Screens/LoginScreen';
import {SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from '../Screens/DrawerScreen';
import SsbCockPit from '../Screens/DashboardScreen/SsbCockPit';
import MeetingPlanner from '../Screens/DashboardScreen/MeetingPlanner';
import * as storage from '../Service/cookie';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from '../Redux/Action/loginAction';

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AfterLoginNavigator = () => (
  <Drawer.Navigator drawerContent={props => <DrawerScreen {...props} />}>

    <Drawer.Screen
      name={ScreensName.SSBSCREEN}
      component={SsbCockPit}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name={ScreensName.MEETINGSCREEN}
      component={MeetingPlanner}
      options={{
        headerShown: false,
      }}
    />
  </Drawer.Navigator>
);

const Navigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth();
  }, []);
  const {userNameState} = useSelector(state => state.loginReducer);
  const checkAuth = async () => {
    const User = await storage.getItem('userName');
    console.log('userdata', User);
    if (User !== null) {
      dispatch(setLogin(User));
    }
  };
  return (
    <NavigationContainer>
      <SafeAreaView />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!userNameState ? (
          <RootStack.Screen
            name={ScreensName.LOGINSCREEN}
            component={LoginScreen}
          />
        ) : (
          <RootStack.Screen
            name={ScreensName.AFTERLOGINSCREEN}
            component={AfterLoginNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
