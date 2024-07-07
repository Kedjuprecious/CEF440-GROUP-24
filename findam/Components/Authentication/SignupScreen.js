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

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignup = () => {
    // Reset errors
    setErrors({});

    // Validate inputs
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!number.trim()) {
      errors.number = "Number is required";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    // If there are errors, set them and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Proceed with signup logic
    axios
      .post("http://192.168.1.195:5000/signup", {
        name,
        email,
        number,
        password,
      })
      .then((response) => {
        console.log(response.data);
        // Navigate to home screen after successful signup
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.error(error);
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

      {/* Signup Form Section */}
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, errors.name && styles.inputError]}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        <TextInput
          style={[styles.input, errors.number && styles.inputError]}
          placeholder="Number"
          keyboardType="phone-pad"
          value={number}
          onChangeText={setNumber}
        />
        {errors.number && <Text style={styles.errorText}>{errors.number}</Text>}
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
        <View
          style={[
            styles.passwordContainer,
            errors.confirmPassword && styles.inputError,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>or signup with</Text>

      {/* Alternative Signup Section */}
      <View style={styles.alternativeSignupContainer}>
        <View style={styles.socialIconsContainer}>
          {/* Replace these with actual icons or buttons */}
          <Text>Google Icon</Text>
          <Text>Facebook Icon</Text>
          <Text>Apple Icon</Text>
        </View>
      </View>

      {/* Already have an account Section */}
      <View style={styles.signInContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.signInText}>Sign In</Text>
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
    width: 150,
    height: 70,
  },
  formContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    height: 40,

    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#D9D9D9",
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
    backgroundColor: "#ffc600",
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "100px",
  },
  buttonText: {
    color: "#001D4A",
    fontSize: 16,
    fontWeight: "bold",
  },
  alternativeSignupContainer: {
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
    color: "#ffc600",
  },
});

export default SignupScreen;
