import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { View, Text , StyleSheet, SafeAreaView, StatusBar} from 'react-native'
import React from 'react'

const StartScreen = () => {
  return (
    <SafeAreaView style = {{flex:1, marginTop: StatusBar.currentHeight}}>
      <Text>StartScreen</Text>
    </SafeAreaView >
  )
}



const styles =StyleSheet.create({
    container: {
        backgroundColor: '6368D0',
        flex: 1,
    },
})

export default StartScreen