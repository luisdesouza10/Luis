import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../context'; 
import { StatusBar } from 'expo-status-bar';

export const  MainPage = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    
    <View style={styles.Container}>
      <StatusBar  
          backgroundColor="#404040"
          barStyle="light-content" />
      <View style={styles.View}>
        <Text style={styles.HomeText}>
          Logado com sucesso! Pressione o botão sair para retornar a tela de login.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.HomeButton}
          title="Sair" onPress={() => signOut()}>
          <Text style={styles.HomeButtonText} >
            Sair
        </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
  
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  HomeButton: {
    width: 295,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
    backgroundColor: '#529DDC',
    marginTop: 520,
  },
  HomeButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  HomeText: {
    color: 'white',
    marginTop: 150,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 17
  },
  View: {
    marginTop: 100,
    marginBottom: -100,
    textAlign: "center",
  },
})