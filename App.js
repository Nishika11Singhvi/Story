import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/tabNavigator'
import DrawerNavigator from './navigation/drawNavigation';

export default function App() 
{
  return(
    <NavigationContainer>
      <DrawerNavigator/>
  </NavigationContainer>
  )
}