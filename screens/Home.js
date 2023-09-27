import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, Dimensions, TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import COLORS from '../constants/colors';
// import Categories from '../components/categories';
// import SortCategories from '../components/sortCategories';
// import Destinations from '../components/destinations';

const {width, height} = Dimensions.get('window');

const ios = Platform.OS=='ios';
const topMargin = ios? 'mt-3': 'mt-10';
const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6 "+topMargin}>
     
        <View className="mx-5 flex-row justify-between items-center mb-10" >
        <TouchableOpacity>
            <Image source={require('../assets/doc.png')} style={{height: wp(8), width: wp(8), marginTop: height*0.05}} />
          </TouchableOpacity>
        {/* avatar */}
          <Text style={{fontSize: wp(4)}} className="font-bold text-neutral-700">Banasankari,Bangalore</Text>
          <TouchableOpacity>
            <Image source={require('../assets/hero2.jpg')} style={{height: wp(12), width: wp(12), marginLeft:height*0.40}} />
          </TouchableOpacity>
        </View>

        
{/* search bar */}
<View className="mx-5 shadow" style={{marginTop: height*0.01}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search Medicines & General products...' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: COLORS.secondary}}>
              <MagnifyingGlassIcon size="40" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>


        {/* categories */}
        {/* <View className="mb-4">
          <Categories />
        </View> */}

        {/* sort categories */}
        {/* <View className="mb-4">
          <SortCategories />
        </View> */}

        {/* destinations */}
        {/* <View>
          <Destinations />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home