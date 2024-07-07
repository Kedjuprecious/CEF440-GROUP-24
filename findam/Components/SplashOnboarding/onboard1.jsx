import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const onboard1 = ({ navigation, route }) => {
  const screenIndex = route.params?.screenIndex ?? 0; // Default to 0 if screenIndex is not passed

  const screens = [
    {
      image: require("../../assets/images/welcome.svg"),
      text: "Welcome to findam",
      slogan: "finding what's lost made easy",
    },
    {
      image: require("../../assets/images/post.svg"),
      text: "Report lost Item",
      slogan: "Report for swift Recovery",
    },
    {
      image: require("../../assets/images/sharing.svg"),
      text: "Retrieve lost Item",
      slogan: "Ace to getting your Lost Items",
    },
  ];

  const isFirstScreen = screenIndex === 0;
  const isLastScreen = screenIndex === screens.length - 1;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logos.png")}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.replace("Signup")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Image
          source={screens[screenIndex].image}
          style={styles.onboardingImage}
        />
        <Text style={styles.title}>{screens[screenIndex].text}</Text>
        <Text style={styles.slogan}>{screens[screenIndex].slogan}</Text>
      </View>
      <View style={styles.footer}>
        {!isFirstScreen && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() =>
              navigation.navigate("Onboarding", {
                screenIndex: screenIndex - 1,
              })
            }
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            if (isLastScreen) {
              navigation.replace("Signup");
            } else {
              navigation.navigate("Onboarding", {
                screenIndex: screenIndex + 1,
              });
            }
          }}
        >
          <Text style={styles.buttonText}>
            {isLastScreen ? "Finish" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  skip: {
    color: "#001D4A",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  onboardingImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    backgroundColor: "#F2F2F2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins_600SemiBold",
    color: "#001D4A",
  },
  slogan: {
    fontSize: 16,
    color: "#001D4A",
    fontFamily: "Poppins_400Regular",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  backButton: {
    backgroundColor: "#001D4A",
    padding: 10,
    borderRadius: 5,
    width: 83,
    height: 37,
  },
  nextButton: {
    backgroundColor: "#FFC600",
    padding: 10,
    borderRadius: 5,
    width: 83,
    height: 37,
    color: "#001D4A",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});

export default onboard1;
