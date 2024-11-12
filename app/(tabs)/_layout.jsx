import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <View>
      <Image style={{width: 30}}
        source={icon}
        resizeMode="contain"
        className="w-1 h-1"
        tintColor={'#BF6724'}
      />
    </View>
  )

}

const TabLayout = () => {
  return (
   <>
    <Tabs>


      <Tabs.Screen
        name="Home"
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.Home}
            color={'#BF6724' }
            name="Home"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="Search"
        options={{
          title:'Search',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.Search}
            color={'#BF6724'}
            name="Search"
            focused={focused}
           />
          )
        }}
      />
      
      
    <Tabs.Screen
        name="Bookmarks"
        options={{
          title:'Bookmarks',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.Bookmarks}
            color={color}
            name="Bookmarks"
            focused={focused}
           />
          )
        }}
      />
     
     <Tabs.Screen
        name="Profile"
        options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.Profile}
            color={color}
            name="Profile"
            focused={focused}
           />
          )
        }}
      />
    </Tabs>
   </>
  )
}

export default TabLayout