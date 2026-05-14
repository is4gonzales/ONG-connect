import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";

export default function Perfil() {

  const {
    userName,
    interesses,
  } = useLocalSearchParams();

  const router = useRouter();

  const interessesArray =
    interesses && typeof interesses === "string"
      ? JSON.parse(interesses)
      : [];

  const [meusInteresses, setMeusInteresses] = useState<string[]>(
    interessesArray
  );

function editarInteresses() {

  router.push({
    pathname: "/tabs/dashboard",
    params: {
      userName,
    },
  });

}

  function entrarConta() {

    router.push("/tabs/cadastro");

  }

  // sem cadastro
  if (!userName) {

    return (
      <View style={styles.container}>

        <Image
          source={require("../../assets/images/connect-logo.png")}
          style={styles.logo}
        />

        <Text style={styles.titulo}>
          Meu Perfil
        </Text>

        <Text style={styles.texto}>
          Entre na sua conta para acessar suas informações de voluntário.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={entrarConta}
        >
          <Text style={styles.textoBotao}>
            Entrar na Minha Conta
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  return (

    <ScrollView style={styles.container}>

      <Image
        source={require("../../assets/images/connect-logo.png")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        Bem-vindo(a), {userName}!
      </Text>

      <Text style={styles.subtitulo}>
        Seus Interesses
      </Text>

      <Text style={styles.interesses}>

        {meusInteresses.length > 0
          ? meusInteresses.join(" • ")
          : "Nenhum interesse selecionado"}

      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={editarInteresses}
      >
        <Text style={styles.textoBotao}>
          Editar Interesses
        </Text>
      </TouchableOpacity>

      <Text style={styles.subtitulo}>
        Projetos que você realizou
      </Text>

      <View style={styles.cardProjeto}>

        <Image
          source={require("../../assets/images/perfil.png")}
          style={styles.imagemProjeto}
        />

        <Text style={styles.nomeProjeto}>
          Projeto Educação Solidária
        </Text>

        <Text style={styles.descricaoProjeto}>
          Você ajudou crianças em situação de vulnerabilidade
          participando de atividades educativas e arrecadação
          de materiais escolares para a comunidade.
        </Text>

      </View>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.login}>Voltar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e397af64",
    padding: 20,
  },

  logo: {
    width: 450,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#862544ff",
    textAlign: "center",
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#862544ff",
    marginTop: 25,
    marginBottom: 10,
  },

  texto: {
    fontSize: 22,
    color: "#862544ff",
    textAlign: "center",
    marginBottom: 15,
  },

  interesses: {
    fontSize: 22,
    color: "#862544ff",
    marginBottom: 15,
    textAlign: "center",
  },

  botao: {
    backgroundColor: "#d6507dff",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  botaoSair: {
    backgroundColor: "#862544ff",
    padding: 16,
    borderRadius: 12,
    marginTop: 25,
    marginBottom: 40,
    alignItems: "center",

    elevation: 5,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  cardProjeto: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  imagemProjeto: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 10,
  },

  nomeProjeto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#862544ff",
    marginBottom: 10,
  },

  descricaoProjeto: {
    fontSize: 19,
    color: "#862544ff",
    lineHeight: 26,
  },

  login: {
    color: "#862544ff",
    textDecorationLine: "underline",
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
  },

});