import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../context'; 

export const  MainPage = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.Container}>

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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  HomeButton: {
    width: 295,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
    borderColor: '#57cd7b',
    borderWidth: 2,
    backgroundColor: '#57cd7b',
    marginTop: 20,
  },
  HomeButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  HomeText: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17
  },
  HomeText2: {
    color: 'white',
    marginTop: 250,
    textAlign: "center"
  },
  View: {
    marginTop: 100,
    marginBottom: -100,
    textAlign: "center",
  },
  IconLogo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
})