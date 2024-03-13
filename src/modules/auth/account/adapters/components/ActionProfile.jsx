//rnfs
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {Divider} from '@rneui/base'
import ListAction from '../../../../../kernel/components/ListAction'
export default function ActionProfile(props) {
    const {infoUser} = props;
    const actions = [
        {
            id:1,
            title: 'Cambiar nombre',
            iconName: 'account-circle',
            action: ()=>console.log('cambiar nombre'),
        },
        {
            id:2,
            title: 'Cambiar email',
            iconName: 'at',
            action: ()=>console.log('cambiar nombre'),
        },
        {
            id:3,
            title: 'Cambiar contraseña',
            iconName: 'key',
            action: ()=>console.log('cambiar nombre'),
        },

    ]
  return (
    <View style={styles.sdsds}>
      <Text>ActionProfile</Text>
      <FlatList
        data={actions}
        renderItem={({item}) => (
            <ListAction 
            action={item.action} 
            title={item.title}
            iconName={item.iconName}
            ></ListAction>
            )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    sdsds:{
        marginVertical: 16
    },
})