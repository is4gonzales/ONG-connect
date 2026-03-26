import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.topo}>
        <Image
          source={require("../assets/images/connect-logo.png")}
          style={styles.logo}
        />
      </View>


      <View style={styles.centro}>
        <Text style={styles.slogan}>
         Escrevendo hoje o amanhã de quem mais precisa.
        </Text>
      </View>

  
      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => console.log("Ver projetos")}
        >
          <Text style={styles.textoBotao}>Conheça nossa Trabalho</Text>
        </TouchableOpacity>

  <TouchableOpacity
          style={styles.botao}
          onPress={() => console.log("voluntário")}
        >
          <Text style={styles.textoBotao}>Quero Fazer Uma Doaçãos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => console.log("voluntário")}
        >
          <Text style={styles.textoBotao}>Fazer Parte Dessa História</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.login}>Ja possuo uma conta</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e397af64", 
  },

  topo: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 60, 
  },

  logo: {
    width: 600,
    height: 300,
    resizeMode: "contain",
  },

  centro: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  slogan: {
    fontSize: 20,
    color: "#862544ff",
    textAlign: "center",
    marginTop: 100,
  },

  botoes: {
    flex:3.90,
    justifyContent: "center",
    alignItems: "center",
  },

  botao: {
    backgroundColor: "#d6507dff", // rosa da logo
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: 280,
    alignItems: "center",
  },

  textoBotao: {
    fontWeight: "bold",
    color: "#862544ff",
    fontSize: 20,
  },

  login: {
    color: "#862544ff",
    textDecorationLine: "underline",
    marginTop: 2,
  }

});