import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}><Text>Navigation</Text></View>
      <View style={styles.body}>
        <Text>HomeScreen</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  navigation: {
    flex: 2,
    backgroundColor: 'red'
  },
  body: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan'
  }
})