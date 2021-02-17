import React, { useState } from 'react'
import { View, Text , TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Video from 'react-native-video';
import styles from './CardItem.style';
const CardItem = ({ cardItem }) => {
  const heart = <FontAwesome5 name="heart" size={30} color="#fff" />;
  const cmt = <FontAwesome5 name="stack-exchange" size={30} color="#fff" />;
  const share = <FontAwesome5 name="reply-all" size={30} color="#fff" />;
  const play = <FontAwesome5 name="play" size={30} color="#fff" />;
  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.CardItem}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <View style={{flex:1,position:'relative'}}>
      
      <Video source={cardItem.link}   // Can be a URL or a local file.
        //    ref={(ref) => {
        //      this.player = ref
        //    }}                                      // Store reference
        //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //    onError={this.videoError}               // Callback when video cannot be loaded
        style={{ flex: 1, backgroundColor: '#ccc' }}
        resizeMode="cover"
        // paused={true}
        controls={false}
        repeat={true}
        paused={paused}
        
      />
      <View style={styles.sideBarRight}>
        <TouchableOpacity>
        <View style={styles.optionView}>
          {heart}
          <Text style={styles.textInfo}>{cardItem.like}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.optionView}>
          {cmt}
          <Text style={styles.textInfo}>{cardItem.comment}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.optionView}>
          {share}
          <Text style={styles.textInfo}>{cardItem.share}</Text>
        </View>
        </TouchableOpacity>
      </View>
     {paused?<View style={{position:'absolute',top:'50%',left:'50%'}}>
        <Text>{play}</Text>
      </View> :null } 
      </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default CardItem
