import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';

import { Input, Success } from './src/components';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Success: { address: string };
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'Success'
>;

type P = RouteProp<RootStackParamList, 'Success'>;

export default function App() {
  return (
    <View style={styles.container} data-testid="app">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Input} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  }
});
