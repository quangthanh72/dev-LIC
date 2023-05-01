import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { View, Text ,Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const StartScreen = () => {
  return (
    <View  style={styles.container}>
    <SafeAreaView style = {{flex:1, marginTop: StatusBar.currentHeight}}>
      <Image 
      source={require('Q:\WorkSpace\library-code\dev-LIC\assets\Logo.png')}
      />
    </SafeAreaView >
    </View>
  )
}



const styles =StyleSheet.create({
    container: {
        backgroundColor: '#555ABF',
        flex: 1,
    },
})

export default StartScreen