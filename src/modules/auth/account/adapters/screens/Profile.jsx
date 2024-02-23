//rnfs
import { StyleSheet, Text, View } from 'react-native'
import { getAuth } from "firebase/auth";
import React from 'react'
import { signOut } from 'firebase/auth';
import { Button } from '@rneui/themed';

export default function Profile(props) {
  const { navigation } = props;
  const auth = getAuth();
  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate('UserLogged');
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usted ha entrado a su Perfil</Text>
      <Button title="Cerrar sesión" onPress={logout} style={styles.logoutButton}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,//un entero
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // COLOR TEXTO
    textAlign: 'center',
    logoutButton: {
      marginTop: 20, // Espacio adicional arriba del botón
      backgroundColor: '#ff5733',
      paddingHorizontal: 20, // Ajusta el espacio interno horizontal del botón
    },
    btnStyle:{
      backgroundColor: '#ef524a'
    },
  },})