import React from "react";
import {View,Text} from 'react-native'
import { styles } from './styles'

export function Songs(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>AudioLibrary</Text>
        </View>
    )
}