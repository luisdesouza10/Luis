import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';


import { LoginPage } from "./src/LoginPage";
import { MainPage } from "./src/MainPage";
import { AuthContext } from './context';

const Stack = createStackNavigator();

const Screens = ({ token }) => (
  <Stack.Navigator headerMode="none" >

     {token ? ( 
       <Stack.Screen options={{animationEnabled: true}} name="MainPage" component={MainPage}/>
    
    ) : ( 

      <Stack.Screen options={{animationEnabled: true}} name="LoginPage" component={LoginPage}/>
    
    )}
  </Stack.Navigator>
)

export default () => {

  let [token, setToken] = React.useState(null);

  async function loadData() {
    try {

      let token = await AsyncStorage.getItem('token');

      setToken(token);

    } catch (e) {

      alert(e)

    }
  }
    async function signOutToken() {
      try {
        await AsyncStorage.removeItem('token');
        setToken(null);
      } catch (e) {
        alert(e);
      }
    }
    React.useEffect(() => {
      loadData();
    }, []);
  
    const authContext = React.useMemo(() => {
      return {
        signIn: () => {
          loadData();
        },
  
        signOut: () => {
          signOutToken();
        }
      }
    }, []);
 
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Screens token={token}/>
        </NavigationContainer>
      </AuthContext.Provider>
    );
}