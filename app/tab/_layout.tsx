import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function _layout() {
  const tabBarIcon = (name: string) => (props: any) => {
    return (
      <Ionicons
        name={name as any}
        size={props.size}
        color={props.color}
      />
    )
  };

  return (
    <Tabs screenOptions={{
      tabBarInactiveTintColor: "#faf",
      tabBarActiveTintColor: "#f0f"
    }}>
      <Tabs.Screen name='home'
        options={{
          tabBarIcon: tabBarIcon("ios-home"),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: tabBarIcon("ios-person"),
        }}
      />
      <Tabs.Screen name='password'
        options={{ href: null }}
      />
    </Tabs>
  )
}