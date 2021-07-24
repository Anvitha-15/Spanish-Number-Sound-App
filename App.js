import React from "react"
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native"
import Sound from "react-native-sound"
// import Sound from "react-native-sound"


const soundList = [
  require("./assets/one.wav"),
  require("./assets/two.wav"),
  require("./assets/three.wav"),
  require("./assets/four.wav"),
  require("./assets/five.wav"),
  require("./assets/six.wav"),
  require("./assets/seven.wav"),
  require("./assets/eight.wav"),
  require("./assets/nine.wav"),
  require("./assets/ten.wav"),
]

const App = () => {
  const playSound = (sound) =>{
    const soundV = new Sound(sound, Sound.MAIN_BUNDLE, (err) =>{
      if(err){
        console.log("Not able to play the sound")
      }
    });
    setTimeout(()=>{
      soundV.play();
    }, 1000);

    soundV.release();
  };
  
  return(
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")} />

      <View style={styles.gridContainer}>
        {soundList.map((sound)=>(

          <TouchableOpacity style={styles.box} key={sound} onPress={()=>{playSound(sound)}}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>

        ))}
      </View>
    </ScrollView>
  )
}

export default App;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#141E61"
  },
  logo:{
    alignSelf: "center",
    marginTop: 40,
  },
  gridContainer:{
    flex: 1,
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  box:{
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    width: "44%",
    marginVertical: 6,
    backgroundColor: "#000",
    borderRadius: 10,
    elevation: 5,
  },
  text:{
    fontSize: 30,
    color:"#CDF3A2"
  }
})
