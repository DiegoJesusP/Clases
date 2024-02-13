import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usted ha entrado a los restaurantes</Text>
      <Text> 
        <Icon
        name='gamepad'
        type='font-awesome'
        color='grey'
        size={40}
        ></Icon>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//un entero
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Puedes cambiar el color de fondo según tus preferencias
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Puedes ajustar el color del texto
    textAlign: 'center',
  },
})
