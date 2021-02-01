//Versão Final 21:32
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import jwt_decode from "jwt-decode";


import { LoginPage } from "./src/LoginPage";
import { MainPage } from "./src/MainPage";
import { AuthContext } from './context';

const Stack = createStackNavigator();

const Screens = ({ token }) => (
  <Stack.Navigator headerMode="none" >

    {token ? (
      <Stack.Screen options={{ animationEnabled: true }} name="MainPage" component={MainPage}/>
    ) : (
        <Stack.Screen options={{ animationEnabled: true }} name="LoginPage" component={LoginPage}/>
      )}
  </Stack.Navigator>
)



export default () => {

  function deco(){
    var decoded = jwt_decode(token);
    alert(decoded);
  }

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
        var decoded = jwt_decode(token);
        alert(decoded);

      },

      signOut: () => {
        signOutToken();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Screens token={token} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}