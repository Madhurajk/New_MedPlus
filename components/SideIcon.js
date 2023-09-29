import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GifIcon } from 'react-native-heroicons/outline';
// import Icon from 'react-native-ico-material-design';


var iconHeight = 26;
var iconWidth = 26;

const styles = StyleSheet.create({
    navContainer:{
     position:'absolute',
     alignItems:'center',
     bottom:20,
     backgroundColor:'blue'
    },
 
    navBar:{
     flexDirection:'row',
     width:'90%',
     justifyContent:'space-evenly',
     borderRadius:40,
     backgroundColor:'blue'
    },
    IconBehave:{
     padding:14
    }
 });
 


const SideIcon =()=> {

//     <View style={styles.navContainer}>
//     <View style={styles.nav}>
//       {/* <Pressable android_ripple={{borderless:true, radius:50}}>
//         <Icon name="menu-button" height={iconHeight} width={iconWidth}/>

//       </Pressable> */}
//       <GifIcon />
//     </View>
//   </View>
<View>
<Text>Hiiiiiiiiiiiiii</Text>
</View>
}
export default SideIcon

