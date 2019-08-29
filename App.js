import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text1}>Cabeçalho</Text>
        <Text style={styles.Text2}>Conteúdo</Text>
        <Text style={styles.Text3}>Rodapé</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: "#DA70D6",
    height: 600
  },
  Text1: {
    flex: 1,
    fontSize: 40,
    backgroundColor: "#08509B",
    textAlign: "center"
  },
  Text2: {
    flex: 4,
    fontSize: 40,
    backgroundColor: "#2A48FA",
    textAlign: "center"
  },
  Text3: {
    flex: 2,
    fontSize: 40,
    backgroundColor: "#00ced1",
    textAlign: "center"
  }
});
