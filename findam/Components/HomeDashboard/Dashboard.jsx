import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { useNavigation } from "@react-navigation/native";

const items = Array(20)
  .fill()
  .map((_, index) => ({
    id: index,
    image: "https://via.placeholder.com/150",
    name: `Item ${index + 1}`,
    status: "Status",
    date: "Date Posted",
  }));

const Dashboard = () => {
  const navigation = useNavigation();

  const handleShare = async (platform) => {
    const shareOptions = {
      title: "Share via",
      message: "Check out this amazing item!",
      url: "https://example.com", 
    };

    try {
      if (Sharing.isAvailableAsync()) {
        const uri = await FileSystem.downloadAsync(
          "https://via.placeholder.com/150",
          FileSystem.documentDirectory + "image.png"
        );
        await Sharing.shareAsync(uri.uri);
      } else {
        alert("Sharing is not available on this platform");
      }
    } catch (error) {
      console.log("Error sharing", error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("Claim")}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDescription}>
        <Text>{item.name}</Text>
        <Text>{item.status}</Text>
        <Text>{item.date}</Text>
        <TouchableOpacity onPress={() => handleShare("platform")}>
          <Icon name="share-alt" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={24} color="#000" />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Icon name="bell" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Body: Two-column Grid of Items */}
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.body}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Icon name="dashboard" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Icon name="plus-circle" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="user" size={24} color="#000" />
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
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  body: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  itemImage: {
    width: "100%",
    height: 100,
  },
  itemDescription: {
    padding: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});

export default Dashboard;
