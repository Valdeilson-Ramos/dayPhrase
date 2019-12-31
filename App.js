import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./img/logo.png")} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 600
  },
  button: {
    backgroundColor: "#538530",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textButton: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
