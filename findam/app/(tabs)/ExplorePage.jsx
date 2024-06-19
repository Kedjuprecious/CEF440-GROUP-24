
import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import ImageItem from '../../componentDashboard/ImageItem';
import Header from '../../componentDashboard/Header';

const ExplorePage = () => {
    const data = [
        {
          id: '1',
          image: require('../../assets/images/bg_img2.png'),
          description: 'Item 1',
        },
        {
          id: '2',
          image: require('../../assets/images/bg_img2.png'),
          description: 'Item 2',
        },

        {
            id: '3',
            image: require('../../assets/images/bg_img2.png'),
            description: 'Item 2',
          },
          {
            id: '4',
            image: require('../../assets/images/bg_img2.png'),
            description: 'Item 2',
          },
          {
            id: '5',
            image: require('../../assets/images/bg_img2.png'),
            description: 'Item 2',
          },
          {
            id: '6',
            image: require('../../assets/images/bg_img2.png'),
            description: 'Item 2',
          },
          {
            id: '7',
            image: require('../../assets/images/bg_img2.png'),
            description: 'Item 2',
          },
          {
            id: '8',
            image: require('../../assets/images/bg_img2.png'),
            description: 'Item 2',
          },
      ];

  return (
    <SafeAreaView style={styles.container}>
        <Header/>
      <FlatList
        data={data}
        renderItem={({ item }) => <ImageItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
 
  },
  list: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default ExplorePage;
