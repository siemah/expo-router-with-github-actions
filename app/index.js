import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function LogoTitle() {
  return (
    <Link href={"/home"} asChild>
      <TouchableOpacity>
        <Image
          style={{ width: 30, height: 30 }}
          src={'https://reactnative.dev/img/tiny_logo.png'}
        />
      </TouchableOpacity>
    </Link>
  );
}

export default function Page() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const _posts = await response.json();
      setPosts(_posts.slice(0, 10));
    }
    loadData();

    return () => {

    }
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: 'My home',
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>
          This is the first page of your app.
          <Link href={"/settings"}>
            Settings
          </Link>
        </Text>
        <View>
        <Link href={"/tab"}>
            Tabs
          </Link>
        </View>
        {
          posts.length === 0 && (
            <ActivityIndicator
              size={"large"}
              color={"#ff00ff"}
            />
          )
        }
        <ScrollView
          contentContainerStyle={styles.postContainer}
        >
          {
            posts.map(post => (
              <Link
                href={`/post/${post.id}`}
                key={`blog-${post.id}`}
                style={styles.post}
              >
                {post.title}
              </Link>
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  postContainer: { flexDirection: "column", gap: 12 },
  post: {
    fontSize: 16,
    color: "#38434D",
    textDecorationLine: "underline",
    textTransform: "capitalize"
  },
});
