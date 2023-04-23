import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { onUpdateLocation } from '../redux/reducers/userSlice'
import { SafeAreaView } from 'react-native-safe-area-context'

const screenWidth = Dimensions.get('screen').width

const LandingScreen = () => {
  const navigation = useNavigation();
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>()

  const [displayAddress, setDisplayAddress] = useState("Waiting for current Location")

  // const userLocation = useSelector((state: any) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      // Location.setGoogleApiKey(apiKey);

      console.log(status);

      let location: any = await Location.getCurrentPositionAsync();

      let { coords } = location;

      // setLocation(coords);

      console.log(coords);

      if (coords) {
        let { longitude, latitude } = coords;

        let addressResponse = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        
        console.log(addressResponse[0])
        setAddress(addressResponse[0]);
        // save to local storage
        try {
            const locationString = JSON.stringify(addressResponse[0])
            await AsyncStorage.setItem('user_location', locationString)
            // save our location in local storage
            // dispatch({
            //     type: 'ON_UPDATE_LOCATION',
            //     payload: location
            // })
            dispatch(onUpdateLocation({location: locationString}));

        } catch (error) {
            // dispatch({
            //     type: 'ON_USER_ERROR',
            //     payload: error
            // })
        }
        let currentAddress = `${addressResponse[0].city}, ${addressResponse[0].region}, ${addressResponse[0].postalCode}, ${addressResponse[0].country}`;
        setDisplayAddress(currentAddress);
        // console.log(addressResponse, 'nothing');

        if(currentAddress.length > 0) {
          setTimeout(() => {
            navigation.navigate('Home')
          }, 2000)
        }

        // Alternative way of doing the above
        // for(let item of addressResponse){
        //   setAddress(item);
        //   let currentAddress = `${item.name}, ${item.postalCode}, ${item.country}`;
        //   setDisplayAddress(currentAddress);
        //   return;
        // }
      } else {
        // something went wrong
      }

      // console.log();
    })();
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}><Text></Text></View>
      <View style={styles.body}>
        <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
        <View style={styles.addressContainer}>
          <Text>Your Delivery Address</Text>
        </View>

        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  )
}

export default LandingScreen

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: 'rgba(242,242,242,1)'
   },
  navigation: {
      flex: 2,
   },
  body: {
      flex: 9,
      justifyContent: 'center',
      alignItems: 'center',
  },
  deliveryIcon:{
      width: 120,
      height: 120
  },
  addressContainer: {
      width: screenWidth - 100,
      borderBottomColor: 'red',
      borderBottomWidth: 0.5,
      padding: 5,
      marginBottom: 10,
      alignItems: 'center',
      
  },
  addressTitle:{
      fontSize: 22,
      fontWeight: '700',
      color: '#7D7D7D'
  },
  addressText: {
      fontSize: 20,
      fontWeight: '200',
      color: '#4F4F4F'
  },

  footer: {
      flex: 1,
   }

})