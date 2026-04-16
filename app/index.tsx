import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

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
        <TouchableOpacity style={styles.botao} onPress={() => router.push("/projetos")}>
          <Text style={styles.textoBotao}>Conheça nosso Trabalho</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => router.push("/doacao")}>
          <Text style={styles.textoBotao}>Quero Fazer Uma Doação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => router.push("/cadastro")}>
          <Text style={styles.textoBotao}>Fazer Parte Dessa História</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.login}>Já possuo uma conta</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e397af64",
    padding: 36,
  },
  topo: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 60,
  },
  logo: {
    width: 650,
    height: 350,
    resizeMode: "contain",
    marginTop: -90,
  },
  centro: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  slogan: {
    fontSize: 25,
    color: "#862544ff",
    textAlign: "center",
    marginTop: 150,
  },
  botoes: {
    flex: 3.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  botao: {
    backgroundColor: "#d6507dff",
    padding: 23,
    borderRadius: 10,
    marginBottom: 15,
    width: 360,
    alignItems: "center",
  },
  textoBotao: {
    fontWeight: "bold",
    color: "#862544ff",
    fontSize: 23,
  },
  login: {
    color: "#862544ff",
    textDecorationLine: "underline",
    marginTop: 8,
    textAlign: "center",
    fontSize: 25,
  },
});