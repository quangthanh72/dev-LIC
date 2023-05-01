import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './Screens/StartScreen.js';

export default function App() {
  return <Start/>;
}

const styles = StyleSheet.create({
  CSSContainer:{
    flex: 1,
    backgroundColor: '6368D0',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});
