import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import NotificationHeader from '../../ComponentsNotification/NotificationHeader';
import NotificationBody from '../../ComponentsNotification/NotificationBody';

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      {/* <NotificationHeader /> */}
      <NotificationBody />
    </NavigationContainer>
  );
};

export default Navigation;
