import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";

const phraseGenerator = () => {
  var numeroAleatorio = Math.random(); //função para gerar numeros aleatorios
  numeroAleatorio = Math.floor(numeroAleatorio * 5); //definindo a quantidade e arredodamento
  var frases = Array(); //array de frases
  frases[0] = "se nada der certo, tente outra vez!";
  frases[1] = "o caminho é um só";
  frases[2] = "não se esqueça, temos sorte!";
  frases[3] = "sem amor, eu nada seria";
  frases[4] = "tudo vai, tudo é fase";

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./img/logo.png")} />
        <TouchableOpacity style={styles.button} onPress={phraseGenerator}>
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
    paddingHorizontal: 50,
    marginTop: 20
  },
  textButton: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
