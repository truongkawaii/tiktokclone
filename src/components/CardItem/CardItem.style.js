import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  CardItem: {
    backgroundColor: 'brown',
    height: Dimensions.get('window').height - 
    10,
    // height: 200,
    position: 'relative',
   
  },
  sideBarRight: {
    position: 'absolute',
    bottom: 120,
    right: 0,
    paddingHorizontal:12
  },
  textInfo:{
    color:'white'
  },
  optionView:{
    paddingBottom:10
  }
}
)
export default styles;