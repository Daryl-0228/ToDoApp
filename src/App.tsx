import {NavigationContainer} from '@react-navigation/native';
import {UserContextProvider} from 'contexts/UserContext';
import {RootStackNav} from 'navigation';
import React from 'react';

export const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStackNav />
      </NavigationContainer>
    </UserContextProvider>
  );
};
