import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectLocation } from '../redux/reducers/userSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { UserState } from '../redux';

const HomeScreen = () => {
  const {location} = useSelector(selectLocation);
  console.log(JSON.parse(location))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <View style={{ marginTop: 50, flex: 4, backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
          <Text>{`${JSON.parse(location).city}, ${JSON.parse(location).region}, ${JSON.parse(location).country}`}</Text>
          <Text> Edit</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>HomeScreen</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
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