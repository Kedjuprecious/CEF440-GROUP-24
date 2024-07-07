import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";

const Splash = ({ navigation }) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000, // 10 seconds
      useNativeDriver: false,
    }).start(() => {
      navigation.replace("Onboarding", { screenIndex: 0 }); // Navigate to Onboarding screen after 30 seconds
    });
  }, [navigation]);

  const loaderWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logos.png")}
        style={styles.logo}
      />
      <View style={styles.loaderContainer}>
        <Animated.View style={[styles.loader, { width: loaderWidth }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  loaderContainer: {
    width: "50%",
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    overflow: "hidden",
  },
  loader: {
    height: "100%",
    backgroundColor: "#ffc600",
  },
});

export default Splash;
