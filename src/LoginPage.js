import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { loginHandler } from '../apiService/token';
import { AuthContext } from '../context';

export const LoginPage = ({navigation}) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {signIn} = React.useContext(AuthContext);

  // const [token, setToken] = React.useState('');
  // const [error, seterror] = React.useState('');

  async function entrar() {

    let userToken = await AsyncStorage.getItem('token');

    if (email == '' || password == '') {

      alert("Preencha TODOS os campos!");

    } else {

      await loginHandler(email, password);
      await signIn();
     
    }
  }

    return (
      <View style={styles.container}>
        <StatusBar  
          backgroundColor="#404040"
          barStyle="light-content" />
        <View style={styles.imageView} >
          <Image
            style={styles.stretch}
            source={{
              uri: 'https://leaderaplicativos.com.br/wp-content/themes/leader-theme-new/img/novos/logo-branca.png',
            }}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setPassword(password)} />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=> entrar()}>
          <Text style={styles.loginText}> Login </Text>
        </TouchableOpacity>
      </View> 
      
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: "80%",
    backgroundColor: "#999999",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  imageView: {
    marginBottom: 30
  },
  inputText: {
    height: 50,
    color: "white",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#529DDC",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  loginText: {
      color: "white",
      fontSize: 19
  },
  stretch: {
    width: 141,
    height: 80,
    resizeMode: 'stretch',
  },

});



