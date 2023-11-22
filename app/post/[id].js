import { View, Text, Button, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useSegments, useLocalSearchParams, Stack } from 'expo-router'

export default function Post(props) {
  const { id: postId } = useLocalSearchParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const _post = await response.json();
      setPost(_post);
    }
    loadData();

    return () => {

    }
  }, [])

  return (
    <View style={{ padding: 16 }}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: post?.title || 'Loading..',
          headerBackTitleVisible: false,
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: '#f4211a', textTransform: "capitalize" },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: "#fefe41",
            textTransform: "capitalize"
          },
        }}
      />
      {
        post === null && (
          <ActivityIndicator
            size={"large"}
            color={"#f0f"}
          />
        )
      }
      <View style={{ flexDirection: "column", gap: 16 }}>
        <Text style={{ fontSize: 16, color: "#303" }}>{post?.body}</Text>
        <Link
          href={"/"}
          asChild
        >
          <Button
            title='Back to blog'
          />
        </Link>
      </View>
    </View>
  )
}