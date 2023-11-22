import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <View>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: "#fFf"
          },
          headerTintColor: "#fff",
          headerBackground: () => (
            <View style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "pink"
            }}>
              <LinearGradient
                // Background Linear Gradient
                colors={['rgba(10,60,80,1)', 'rgba(10,180,100,1)']}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
              />
            </View>
          )
        }}
      />
      <Text>Home</Text>
    </View>
  )
}