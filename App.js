/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CardItem from './src/components/CardItem';
import stylesCard from './src/components/CardItem/CardItem.style';
const { Height } = Dimensions.get('window');
// import {vh} from 'react-native-viewport-units'; 

const App = () => {
  const [data, setData] = useState([
    {
      id: '355',
      like: '9261',
      comment: '329',
      share: '122',
      link: require('./src/assets/2321568312942.mp4')
    },
    {
      id: '356',
      like: '9261',
      comment: '329',
      share: '122',
      link: require('./src/assets/2321568548639.mp4')
    },
    {
      id: '357',
      like: '9261',
      comment: '329',
      share: '122',
      link: require('./src/assets/2321568312942.mp4')
    },
    {
      id: '358',
      like: '9261',
      comment: '329',
      share: '122',
      link: require('./src/assets/2321568548639.mp4')
    },
  ])
  const home = <FontAwesome5 name="home" size={30} color="#fff" />;
  const search = <FontAwesome5 name="search" size={30} color="#fff" />;
  const plus = <FontAwesome5 name="plus" size={30} color="#000000" />;
  const chat = <FontAwesome5 name="list-alt" size={30} color="#fff" />;
  const user = <FontAwesome5 name="user" size={30} color="#fff" />;

  const renderItem = ({ item }) => {
    return (
      <CardItem cardItem={item} />
    );
  };
  return (
    <View style={styles.wrapper}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // extraData={selectedId}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height - 10}
        />
        <View style={styles.navigate}>
          <TouchableOpacity>
            <Text>{home}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{search}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.plus}>{plus}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{chat}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{user}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  listCard: {
    width: '100%',
    backgroundColor: 'yellow',
    height: '96%',
  },
  wrapper: {
    flex: 1,
    position: 'relative',
    // backgroundColor:'#ccc'
  },
  navigate: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 57,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  plus: {
    borderColor: 'white',
    borderWidth: 1,
    height: 30,
    // backgroundColor:'white'


  }
});

export default App;
