import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";

export default function App() {

  const [tela, setTela] = useState("home");
  const [anonimo, setAnonimo] = useState(false);

  //inicio
  if (tela === "home") {
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
          <TouchableOpacity style={styles.botao} onPress={() => setTela("projetos")}>
            <Text style={styles.textoBotao}>Conheça nosso Trabalho</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => setTela("doacao")}>
            <Text style={styles.textoBotao}>Quero Fazer Uma Doação</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => setTela("cadastro")}>
            <Text style={styles.textoBotao}>Fazer Parte Dessa História</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.login}>Ja possuo uma conta</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  //cadastro
  if (tela === "cadastro") {
    return (
      <ScrollView style={styles.container}>

        <Text style={styles.titulo}>Cadastro</Text>

        <Image
          source={require("../assets/images/connect-logo.png")}
          style={styles.logoCadastro}
        />

        <Text style={styles.descricao}>
          Ao fazer parte da Connect, você ajuda a transformar vidas e levar esperança
          para crianças e famílias que precisam. Juntos podemos construir um futuro melhor.
        </Text>

        <Text style={styles.descricao}>Cadatrar-se:</Text>

        <TextInput style={styles.inputGrande} placeholder="Nome" />
        <TextInput style={styles.inputGrande} placeholder="Email" />
        <TextInput style={styles.inputGrande} placeholder="CPF" keyboardType="numeric" />
        <TextInput style={styles.inputGrande} placeholder="Telefone" keyboardType="phone-pad" />
        <TextInput style={styles.inputGrande} placeholder="Crie uma Senha" secureTextEntry />

        <TouchableOpacity style={styles.botaoForm}>
          <Text style={styles.textoBotaoForm}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTela("home")}>
          <Text style={styles.login}>Voltar</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }

  //projetos
  if (tela === "projetos") {
    return (
      <ScrollView style={styles.container}>

        <Text style={styles.titulo}>Nossos Projetos</Text>

        <View style={styles.cardGrande}>
          <Image
            source={require("../assets/images/projeto-1.png")}
            style={styles.cardImageGrande}
          />
          <Text style={styles.cardTitleGrande}>Projeto Educação</Text>
          <Text style={styles.cardTextGrande}>
            Mais de 200 crianças já foram ajudadas com educação, alimentação
            e apoio emocional através da nossa ONG.
          </Text>
        </View>

        <View style={styles.cardGrande}>
          <Image
            source={require("../assets/images/projetos-2.png")}
            style={styles.cardImageGrande}
          />
          <Text style={styles.cardTitleGrande}>Projeto Comunidade</Text>
          <Text style={styles.cardTextGrande}>
            Levamos suporte e dignidade para famílias em situação de vulnerabilidade.
          </Text>
        </View>

        <TouchableOpacity onPress={() => setTela("home")}>
          <Text style={styles.login}>Voltar</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }

  //doação
  if (tela === "doacao") {
    return (
      <ScrollView style={styles.container}>

        <Image
          source={require("../assets/images/connect-logo.png")}
          style={styles.logoCadastro}
        />

        <Text style={styles.titulo}>Faça uma Doação</Text>

        <Text style={styles.descricao}>
          Sua doação ajuda a levar educação, alimentação e esperança para
          quem mais precisa. Cada contribuição faz a diferença!
        </Text>

        <Image
          source={require("../assets/images/doacoes.png")} // Ajuste para a imagem que deseja exibir aqui
          style={styles.imagemDoacao}
        />

        <TouchableOpacity onPress={() => setAnonimo(!anonimo)}>
          <Text style={styles.check}>
            {anonimo ? "☑" : "☐"} Doar anonimamente
          </Text>
        </TouchableOpacity>

        {!anonimo && (
          <>
            <TextInput style={styles.inputGrande} placeholder="Nome" />
            <TextInput style={styles.inputGrande} placeholder="Email" />
          </>
        )}

        <TextInput
          style={styles.inputGrande}
          placeholder="Valor da doação"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botaoForm}>
          <Text style={styles.textoBotaoForm}>Doar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTela("home")}>
          <Text style={styles.login}>Voltar</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e397af64",
    padding: 20,
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
    padding: 25,
    borderRadius: 10,
    marginBottom: 12,
    width: 400,
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
    marginTop: 10,
    textAlign: "center",
    fontSize: 25,
  },

  titulo: {
    fontSize: 40,
    color: "#862544ff",
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "bold",
  },

  descricao: {
    textAlign: "center",
    color: "#862544ff",
    marginBottom: 25,
    fontSize: 25,
    lineHeight: 26,
  },

  logoCadastro: {
    width: 500,
    height: 300,
    alignSelf: "center"
  },

  inputGrande: {
    backgroundColor: "#fcfcfc8b",
    padding: 20,
    borderRadius: 13,
    marginBottom: 15,
    fontSize: 19,
  },

  botaoForm: {
    backgroundColor: "#d6507dff",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },

  textoBotaoForm: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 25,
  },

  cardGrande: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 50,
    padding: 25,
  },

  cardImageGrande: {
    width: "100%",
    height: 220,
    borderRadius: 10,
  },

  cardTitleGrande: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#862544ff",
    marginTop: 10,
  },

  cardTextGrande: {
    fontSize: 23,
    color: "#862544ff",
    marginTop: 5,
    lineHeight: 22,
  },

  imagemDoacao: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 1,
  },

  check: {
    color: "#862544ff",
    fontSize: 25,
    marginBottom: 10,
  }

});