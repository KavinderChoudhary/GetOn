import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import {styles} from './styles'
import img from '../../Constants/imageGenerator'

export const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.sfArea}>
        <View>  
        <Image  style={styles.bgUpperArrow} source={img.bgImageUpper}  />
              
        
            <Image   style={{justifyContent:'flex-start', alignSelf:"flex-start",marginTop:"150%",alignContent:"center"}} source={img.bgImageLower}  />

        </View>
        </SafeAreaView>
    )
}