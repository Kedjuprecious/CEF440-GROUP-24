import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function FromPhoneButton({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { backgroundColor: "white" },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#FCB121", height: "60px", width: "200px" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "300px",
    height: "70px",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
   
  },
  button: {
    borderRadius: 10,
    width: "60%",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
   
  },
  buttonLabel: {
    color: "#FCB121",
    fontSize: 16,
    
  },
  buttonIcon: {
    paddingRight: 8,
    
  },
});
