import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, Dimensions, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import COLORS from '../constants/colors';
import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import SlideBoxImage from '../components/SlideBoxImages';
import SideIconMenus from '../components/SideIconMenus';
import MenuIcons from '../components/MenuIcons';


const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  item:{
    backgroundColor:'white'
  }

});

const Home = () => {
  return (
      <ScrollView style={style.item}>
     
        <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}} >
            <TouchableOpacity>
            <Image source={require('../assets/doc.png')} style={{height: wp(8), width: wp(8), marginTop: height*0.05}} />
              </TouchableOpacity>
             <BellIcon size="34" color="black" style={{ marginTop: height*0.05, marginLeft:height*0.32}} />
              <TouchableOpacity>
             <ShoppingCartIcon size="35" color="blue" style={{ marginTop: height*0.05}} />
            </TouchableOpacity>
       </View>

         <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
            <MapPinIcon size="25" color="green" />
            <Text className="font-semibold text-base">
              4th Cross, Banasankari, Bangalore 571613
            </Text>
            </View>
        
{/* search bar */}

 <View className="mx-5 shadow" style={{marginTop: height*0.01}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search Medicines & General products...' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: COLORS.secondary}}>
              <MagnifyingGlassIcon size="40" strokeWidth={2} color="grey" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <SlideBoxImage />
        </View>

        {/* <View>
          <SideIconMenus />
        </View> */}


    <Text>{"\n"}</Text>

       {/* categories */}
        <View className="mb-4">
          <Categories />
        </View>


       {/* side view */}

          <View>
          <MenuIcons />
          </View> 

        

        {/* destinations */}
        {/* <View>
          <Destinations />
        </View> */}
      </ScrollView>
  )
}

export default Home