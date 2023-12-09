import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// local storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// react
import React, { useEffect, useState } from 'react';
import { HomeScreen, OnboardingScreen } from './screens';

// stack navigation
const Stack = createNativeStackNavigator();

export default function App() {
  const [hasOnboarded, setHasOnboarded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('onboarded')
      .then(value => {
        if (value === null) {
          AsyncStorage.setItem('onboarded', 'true');
          setHasOnboarded(true);
        } else {
          setHasOnboarded(true);
        }
      });
  }, []);
  
  return (
       <NavigationContainer>
          <Stack.Navigator>
        {hasOnboarded && (
          <Stack.Screen options={{headerShown: false}} name="OnboardingScreen" component={OnboardingScreen} />
            )}
            <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

