import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleShare = async (url) => {
    try {
      const localUri = await FileSystem.downloadAsync(
        url,
        FileSystem.documentDirectory + "temp.png"
      );

      if (!(await Sharing.isAvailableAsync())) {
        alert("Sharing is not available on this platform");
        return;
      }

      await Sharing.shareAsync(localUri.uri);
    } catch (error) {
      console.log("Error sharing", error);
    }
  };

  const itemsHorizontal = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Item 1",
      status: "Available",
      date: "2024-07-05",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Item 2",
      status: "Sold",
      date: "2024-07-04",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Item 3",
      status: "Pending",
      date: "2024-07-03",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Item 4",
      status: "Available",
      date: "2024-07-02",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      name: "Item 5",
      status: "Available",
      date: "2024-07-01",
    },
  ];

  const itemsVertical = [
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      name: "Item 1",
      status: "Available",
      date: "2024-06-30",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100",
      name: "Item 2",
      status: "Sold",
      date: "2024-06-29",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/100",
      name: "Item 3",
      status: "Pending",
      date: "2024-06-28",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/100",
      name: "Item 4",
      status: "Available",
      date: "2024-06-27",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/100",
      name: "Item 5",
      status: "Available",
      date: "2024-06-26",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/100",
      name: "Item 6",
      status: "Sold",
      date: "2024-06-25",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/100",
      name: "Item 7",
      status: "Available",
      date: "2024-06-24",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/100",
      name: "Item 8",
      status: "Pending",
      date: "2024-06-23",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/100",
      name: "Item 9",
      status: "Available",
      date: "2024-06-22",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/100",
      name: "Item 10",
      status: "Sold",
      date: "2024-06-21",
    },
  ];

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

      {/* Section 2: Horizontal Scroll of Items */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {itemsHorizontal.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => navigation.navigate("ClaimScreen", item)}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.itemImage}
              resizeMode="cover"
            />
            <View style={styles.itemDescription}>
              <Text>{item.name}</Text>
              <Text>{item.status}</Text>
              <Text>{item.date}</Text>
              <TouchableOpacity onPress={() => handleShare(item.image)}>
                <Icon name="share-alt" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Section 3: Vertical Scroll of Containers */}
      <View style={styles.section3}>
        <View style={styles.section3Header}>
          <TouchableOpacity>
            <Text>Seven Days</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {itemsVertical.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.containerItem}
              onPress={() => navigation.navigate("Claim", item)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.containerImage}
                resizeMode="cover"
              />
              <View style={styles.containerDescription}>
                <Text>{item.name}</Text>
                <Text>{item.status}</Text>
                <Text>{item.date}</Text>
                <TouchableOpacity onPress={() => handleShare(item.image)}>
                  <Icon name="share-alt" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon name="home" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Icon name="dashboard" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Report")}>
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
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f8f8f8",
    marginTop: 30,
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
  horizontalScroll: {
    marginBottom: 10,
    height: 20, // Adjust height as needed
  },
  itemContainer: {
    width: 150,
    height:200,
    marginTop: 40,
    marginRight: 10,
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
  section3: {
    flex: 1,
    marginBottom: 10,
  },
  section3Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  containerImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  containerDescription: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});

export default HomeScreen;
