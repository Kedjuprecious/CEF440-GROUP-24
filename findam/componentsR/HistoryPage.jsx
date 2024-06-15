import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HistoryPage = () => {
  const [selectedTab, setSelectedTab] = useState("Transactions");

  const renderContent = () => {
    switch (selectedTab) {
      case "Transactions":
        return (
          <Text style={styles.contentText}>
            No items found for Transactions
          </Text>
        );
      case "Uploads":
        return (
          <Text style={styles.contentText}>No items found for Uploads</Text>
        );
      case "Items Claimed":
        return (
          <Text style={styles.contentText}>
            No items found for Items Claimed
          </Text>
        );
      default:
        return <Text style={styles.contentText}>No items found</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Transactions" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Transactions")}
        >
          <Text style={styles.tabText}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Uploads" && styles.activeTab]}
          onPress={() => setSelectedTab("Uploads")}
        >
          <Text style={styles.tabText}>Uploads</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Items Claimed" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Items Claimed")}
        >
          <Text style={styles.tabText}>Items Claimed</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#FCB121",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 18,
    color: "gray",
  },
});

export default HistoryPage;
