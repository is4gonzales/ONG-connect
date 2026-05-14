import React from "react";

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function ONGCard({ ong, onPress }: any) {

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>

      <Image
        source={ong.imagem}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        {ong.nome}
      </Text>

      <Text style={styles.causa}>
        {ong.causa}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  imagem: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#862544ff",
  },

  causa: {
    fontSize: 18,
    color: "#862544ff",
    marginTop: 5,
  },

});