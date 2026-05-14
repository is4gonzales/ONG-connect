import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

export default function Inicio() {

  const router = useRouter();

  return (

    <View style={styles.container}>

      <View style={styles.topo}>

        <Image
          source={require("../../assets/images/connect-logo.png")}
          style={styles.logo}
        />

      </View>

      <View style={styles.centro}>

        <Text style={styles.slogan}>
          <strong>Escrevendo hoje o amanhã de quem mais precisa.</strong>
        </Text>

      </View>

      <View style={styles.botoes}>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/tabs/projetos")}
        >
          <Text style={styles.textoBotao}>
            Conheça nosso Trabalho
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/tabs/doacao")}
        >
          <Text style={styles.textoBotao}>
            Quero Fazer Uma Doação
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/tabs/cadastro")}
        >
          <Text style={styles.textoBotao}>
            Fazer Parte Dessa História
          </Text>
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
    width: 550,
    height: 300,
    resizeMode: "contain",
    marginTop: -95,
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
    marginTop: 90,
  },

  botao: {
    backgroundColor: "#d6507dff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: 360,
    alignItems: "center",
  },

  textoBotao: {
    fontWeight: "bold",
    color: "#862544ff",
    fontSize: 23,
  },

});