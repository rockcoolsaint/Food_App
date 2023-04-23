import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import LandingScreen from './src/screens/LandingScreen';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';

// const switchNavigator = createSwitchNavigator({
//   landingStack: {
//     screen: createStackNavigator({
//       Landing: LandingScreen,
//     }, {
//       defaultNavigationOptions: {
//         headerShown: false,
//       }
//     })
//   },

//   // Home tab Icon
//   homeStack: createBottomTabNavigator({
//     home: {
//       screen: createStackNavigator({
//         HomePage: HomeScreen,
//         // SearchPage: SearchScreen,
//         // RestaurantPage: RestaurantScreen,
//         // FoodDetailPage: FoodDetailScreen
//       },{
//         defaultNavigationOptions: {
//           headerShown: false
//         }
//       }),
//       navigationOptions: {
//         tabBarIcon: ({ focused, tintColor}) => {
//           let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png') 
//           return <Image source={icon} style={styles.tabIcon} />
//         }
//       }
//     },

//     // Offer tab Icon
//     offer: {
//       screen: createStackNavigator({
//         HomePage: HomeScreen,
//         // SearchPage: SearchScreen,
//         // RestaurantPage: RestaurantScreen,
//         // FoodDetailPage: FoodDetailScreen
//       },{
//         defaultNavigationOptions: {
//           headerShown: false
//         }
//       }),
//       navigationOptions: {
//         tabBarIcon: ({ focused, tintColor}) => {
//           let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png') 
//           return <Image source={icon} style={styles.tabIcon} />
//         }
//       }
//     },

//     // Offer tab Icon
//     Cart: {
//       screen: createStackNavigator({
//         HomePage: HomeScreen,
//         // SearchPage: SearchScreen,
//         // RestaurantPage: RestaurantScreen,
//         // FoodDetailPage: FoodDetailScreen
//       },{
//         defaultNavigationOptions: {
//           headerShown: false
//         }
//       }),
//       navigationOptions: {
//         tabBarIcon: ({ focused, tintColor}) => {
//           let icon = focused == true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png') 
//           return <Image source={icon} style={styles.tabIcon} />
//         }
//       }
//     },

//     // Account tab Icon
//     Account: {
//       screen: createStackNavigator({
//         HomePage: HomeScreen,
//         // SearchPage: SearchScreen,
//         // RestaurantPage: RestaurantScreen,
//         // FoodDetailPage: FoodDetailScreen
//       },{
//         defaultNavigationOptions: {
//           headerShown: false
//         }
//       }),
//       navigationOptions: {
//         tabBarIcon: ({ focused, tintColor}) => {
//           let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png') 
//           return <Image source={icon} style={styles.tabIcon} />
//         }
//       }
//     }
//   })
// })

// const AppNavigation = createAppContainer(switchNavigator);

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Welcome" component={LandingScreen} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused, color}) => {
                let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png') 
                return <Image source={icon} style={styles.tabIcon} />
              }
            }}
            name="Home" component={HomeScreen} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused, color}) => {
                let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png') 
                return <Image source={icon} style={styles.tabIcon} />
              }
            }}
            name="Offer" component={HomeScreen} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused, color}) => {
                let icon = focused == true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png') 
                return <Image source={icon} style={styles.tabIcon} />
              }
            }}
            name="Cart" component={HomeScreen} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused, color}) => {
                let icon = focused == true ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png') 
                return <Image source={icon} style={styles.tabIcon} />
              }
            }}
            name="Account" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  }
});
