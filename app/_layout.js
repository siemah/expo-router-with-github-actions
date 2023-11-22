import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

export default function Mainlayout() {
  return (
    <Stack
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#f4211e',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // }}
    >
      <Stack.Screen name="home" options={{}} />
      <Stack.Screen name="settings" options={{
        header: () => null
      }} />
      <Stack.Screen name="tab" options={{
        header: () => null,
        presentation: "formSheet"
      }} />
    </Stack>
  )
}