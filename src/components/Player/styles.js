import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        backgroundColor:theme.colors.primary,
        padding:20,
        paddingTop:0,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        elevation:8,
        shadowColor:theme.colors.secondary,
        shadowOpacity:0.3,
        shadowOffset: {width: 2, height: -10},
    },
    header:{
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:16,
        color:theme.colors.textColor,
    },  
    main:{
        justifyContent:'center',
        alignItems:'center'
    },
    albumArt:{
        width:300,
        height:300,
    },
    footer:{
        justifyContent:'center',
        marginBottom:20,
    },
    textContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    trackName:{
        color:theme.colors.textColor,
        fontSize:20,
        fontFamily:theme.fonts.text500,
    },
    trackArt:{
        borderRadius:120,
    },
    trackAlbum:{
        color:theme.colors.textColorLight,
        fontSize:16,
        fontFamily:theme.fonts.text400,
    },
    trackStatus:{
        width:320,
        height:3,
        backgroundColor:theme.colors.inative3,
        justifyContent:'center',
        alignItems:'flex-start',
        borderRadius:100,
        overflow:'hidden'
    },
    trackPosition:{
        width:100,
        height:3,
        backgroundColor:theme.colors.active,
    },
    timeContainer:{
        margin:50,
    },
    trackTime:{
        width:320,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:50,
        marginTop:-50,
    },
    time:{
        color:theme.colors.textColorLight,
        
    }
})
