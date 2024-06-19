import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import ExplorePage from '../app/(tabs)/ExplorePage';






const RecentImage = () => {
    const navigation = useNavigation();

    const data = [
      {
        id: '1',
        image: require('../assets/images/camid.png'),
        status: 'Lost',
        Type: 'id card',
        Date: '12/03/24',
      },
      {
        id: '2',
        image: require('../assets/images/pp.png'),
        status: 'found',
        Type: 'Passport',
        Date: '10/03/24',
      },
      {
        id: '3',
        image: require('../assets/images/shoe.png'),
        status: 'found',
        Type: 'shoe',
        Date: '10/02/24',
      },
      {
      id: '4',
      image: require('../assets/images/bg_img2.png'),
      status: 'Lost',
      Type: 'Birth certificate',
      Date: '10/01/24',
    }

    ];
    
  return (
    <View>
        <View style={{backgroundColor:'#FFAD0F' , marginTop: 5}}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12
          }}>
          <Text style={{ color: '#FFF',  fontWeight: '500', fontSize: 20}}>Today</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ExplorePage')}>
          <Text style={{ color: 'blue', textDecorationLine: 'none', color: '#FFF',  fontWeight: '500', fontSize: 20 }} >See More </Text>
        </TouchableOpacity>
        </View>
        <FlatList data={data} renderItem={({item}) => (
          <View style={styles.container}>
          <Image source={item.image} style={styles.image}/>
          <View style={styles. description}>
          <Text> Status: {item.status}</Text>
          <Text>Type: {item.Type}</Text>
          <Text>Date: {item.Date}</Text>
          </View>
        </View>  
        )} 
        keyExtractor={(item) => item.id.toString()}
       horizontal={true}
       style={{paddingVertical: 5}}
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{gap:10, paddingHorizontal: 12}}
       ItemSeparatorComponent={() => <View style={{
        height:2,
        backgroundColor:'#FFFFFF'
       }}>
       </View>}
        />
        </View>
    </View>
  )
}



const styles = StyleSheet.create({

    container: {
      backgroundColor: '#FFF',
      height: 280,
      marginHorizontal: 5,
      marginVertical: 5,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      display:'flex',
      borderRadius:5,
      width:200,
    },
    
   
  description: {
    margin: 10,
    fontSize: 24,
    paddingTop:6,
   
  },

  image: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    borderRadius: 5,
    resizeMode: 'cover', 
    aspectRatio: 1,
  },
})


export default RecentImage;