import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

const listBackgroundColors = {
  1: "#192A56",
  2: "#EEC213",
  3: "#EA7773",
  4: "#BB2CD9",
  5: "#2C3335",
  6: "#45CE30",
  7: "#AE1438",
  8: "#0A3D62",
  9: "#7CEC9F",
  10: "#F9DDA4"
}

const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav')
}

export default class App extends React.Component {
  

  playSound = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then( async playbackStatus => {
        setTimeout(() => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      } 
      )
      .catch (error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.gridContainer} >
          <Image 
          style = {styles.logo}
          source = {require('./assets/logo.png')}
          />
          <ScrollView>


         
          <View style = {styles.rowContainer} >
            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[1] },styles.item]}
            onPress = { () => {
              this.playSound("one")
            }}
            >
              <Text style = {styles.itemText} >One</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[2] },styles.item]}
            onPress = { () => {
              this.playSound("two")
            }}
            >
              <Text style = {styles.itemText} >Two</Text>
            </TouchableOpacity>
          </View>

          <View style = {styles.rowContainer} >
            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[3] },styles.item]}
            onPress = { () => {
              this.playSound("three")
            }}
            >
              <Text style = {styles.itemText} >Three</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[4] },styles.item]}
            onPress = { () => {
              this.playSound("four")
            }}
            >
              <Text style = {styles.itemText} >Four</Text>
            </TouchableOpacity>
          </View>

          <View style = {styles.rowContainer} >
            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[5] },styles.item]}
            onPress = { () => {
              this.playSound("five")
            }}
            >
              <Text style = {styles.itemText} >Five</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[6] },styles.item]}
            onPress = { () => {
              this.playSound("six")
            }}
            >
              <Text style = {styles.itemText} >Six</Text>
            </TouchableOpacity>
          </View>

          <View style = {styles.rowContainer} >
            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[7] },styles.item]}
            onPress = { () => {
              this.playSound("seven")
            }}
            >
              <Text style = {styles.itemText} >Seven</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[8] },styles.item]}
            onPress = { () => {
              this.playSound("eight")
            }}
            >
              <Text style = {styles.itemText} >Eight</Text>
            </TouchableOpacity>
          </View>

          <View style = {styles.rowContainer} >
            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[9] },styles.item]}
            onPress = { () => {
              this.playSound("nine")
            }}
            >
              <Text style = {styles.itemText} >Nine</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {[{ backgroundColor: listBackgroundColors[10] },styles.item]}
            onPress = { () => {
              this.playSound("ten")
            }}
            >
              <Text style = {styles.itemText} >Ten</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
          {/* scrollview */}
        </View>
      </View>
    );
  }
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
  },

  gridContainer: {
    flex: 1,
    margin: 5
  },

  logo: {
    marginTop: 15,
    alignSelf: "center"
  }, 

  rowContainer: {
    flexDirection: "row"
  },

  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    borderRadius: 5

  },

  itemText: {
    fontSize: 20,
    color: "#fff",

  }
});
