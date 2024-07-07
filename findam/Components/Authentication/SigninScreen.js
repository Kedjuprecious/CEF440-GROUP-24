import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import axios from "axios";

const SigninScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignin = () => {
    // Reset errors
    setErrors({});

    // Validate inputs
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    // If there are errors, set them and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Proceed with signin logic
    axios
      .post("http://192.168.0.60:5000/signin", {
        name,
        password,
      })
      .then((response) => {
        console.log(response.data);
        // Navigate to home screen after successful signin
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.error(error);
        setErrors({ general: "Invalid credentials or network error" });
      });
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logos.png")}
          style={styles.logo}
        />
      </View>

      {/* Signin Form Section */}
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, errors.name && styles.inputError]}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <View
          style={[
            styles.passwordContainer,
            errors.password && styles.inputError,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <TouchableOpacity style={styles.signupButton} onPress={handleSignin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        {errors.general && (
          <Text style={styles.errorText}>{errors.general}</Text>
        )}
      </View>

      <Text style={styles.orText}>or sign in with</Text>

      {/* Alternative Signin Section */}
      <View style={styles.alternativeSigninContainer}>
        <View style={styles.socialIconsContainer}>
          {/* Replace these with actual icons or buttons */}
          <Text>Google Icon</Text>
          <Text>Facebook Icon</Text>
          <Text>Apple Icon</Text>
        </View>
      </View>

      {/* Don't have an account Section */}
      <View style={styles.signInContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signInText}>Sign Up</Text>
        </TouchableOpacity>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  formContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  alternativeSigninContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  orText: {
    marginRight: 10,
  },
  socialIconsContainer: {
    flexDirection: "row",
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signInText: {
    marginLeft: 5,
    color: "#007bff",
  },
});

export default SigninScreen;
