import AsyncStorage from '@react-native-community/async-storage';

const apiUrl = "https://delivery.leaderaplicativos.com.br/api/api-token-auth/";

export async function loginHandler(email, password) {

  let user = {
    email: email,
    password: password
  }

  try {

    let response = await fetch
      (apiUrl, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
      console.log(user);
    await storageToken(response.token);

  } catch (e) {
    alert("E-mail ou Senha incorretos.");
  }

}

export async function storageToken(token) {

  await AsyncStorage.setItem("token", JSON.stringify(token));

}
