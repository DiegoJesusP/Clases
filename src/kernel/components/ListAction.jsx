
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Divider, Icon} from '@rneui/base'
const ListAction = (props) => {
    const {action, tittle, iconName} = props;
  return (
    <TouchableOpacity onPress={action}>
        <View style={StyleSheet.container}>
      <Text>ListAction</Text>
      <Icon
      type='material-community'
      name={iconName}
      size={22}
      ></Icon>
    </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      background: '#FFF',
      padding: 16,
      flexDireccion: 'row',
      justifyContent: 'space-between',
      borderBottomWidth:1,
      borderBlockColor: 'grey',
    },
})