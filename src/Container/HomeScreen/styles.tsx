//@ts-ignore
import ScaleSheet from 'react-native-scalesheet';
import color from '../../Constants/Colors'


export const styles = ScaleSheet.create({
    sfArea:{
        flex:1,
       backgroundColor:color.ORANGE
    },
    bgUpperArrow:{
        // justifyContent:"flex-start",
        alignSelf:"flex-end", 
        position:"absolute"
    },
    bgLowerArrow:{
        alignSelf:"#141414", 
        position:"absolute"
    }

})