import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        height:80,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.colors.primary, 
        borderTopWidth:3,
        borderTopColor:theme.colors.border,
        elevation:10,
        shadowColor:theme.colors.border,
        shadowOpacity:0.8,
        shadowOffset: {width: 0, height: -4}
    },
    btnContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color:theme.colors.textColor
    },
    btnPlay:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        maxWidth:70,
        height:70,
        borderWidth:1,
        borderRadius:60,
        borderColor:theme.colors.active,
        backgroundColor:theme.colors.active,
        margin:-10,
    },
    btnBack:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        maxWidth:70,
        height:50,
        borderWidth:1,
        borderLeftColor:theme.colors.active,
        borderTopColor:theme.colors.active,
        borderBottomColor:theme.colors.active,
        borderRightWidth:0,
        borderTopLeftRadius:  60,
        borderBottomLeftRadius:  60,
    },
    btnNext:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        maxWidth:70,
        height:50,
        borderWidth:1,
        borderTopColor:theme.colors.active,
        borderBottomColor:theme.colors.active,
        borderRightColor:theme.colors.active,
        borderLeftWidth:0,
        borderTopRightRadius:  60,
        borderBottomRightRadius:  60,
    }
})