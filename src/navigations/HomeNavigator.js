import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/CreateContact';
import ContactDetails from '../screens/ContactDetails';
import Settings from '../screens/Settings';

import {
  CONTACT_LIST,
  CONTACT_DETAILS,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
