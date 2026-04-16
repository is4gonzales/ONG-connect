import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

export default function Dashboard() {
  const { userName } = useLocalSearchParams();
  const router = useRouter();

  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [outro, setOutro] = useState("");

  function toggleOpcao(opcao: string) {
    if (selecionados.includes(opcao)) {
      setSelecionados(selecionados.filter(item => item !== opcao));
    } else {
      setSelecionados([...selecionados, opcao]);
    }
  }

  function sair() {
    router.replace("/");
  }

  const opcoes = [
    "Educação",
    "Alimentação",
    "Apoio Social",
    "Doação de roupas",
    "Saúde",
    "Atividades recreativas"
  ];

  return (
    <ScrollView style={styles.container}>

      <Image
        source={require("../assets/images/connect-logo.png")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        Bem-vindo(a), {userName}! 
      </Text>

      <Text style={styles.descricao}>
        Você agora faz parte de algo maior. ♡
        {"\n\n"}
        Nossa missão é transformar vidas através da educação,
        solidariedade e apoio às famílias que mais precisam.
      </Text>

      <Text style={styles.descricao}>
        Como você quer ajudar?
      </Text>

      {opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.botao,
            selecionados.includes(opcao) && { opacity: 0.6 }
          ]}
          onPress={() => toggleOpcao(opcao)}
        >
          <Text style={styles.textoBotao}>
            {selecionados.includes(opcao) ? "■" : "☐"} {opcao}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.descricao}>Pretende ajudar de outro jeito?</Text>

      <TextInput
        style={styles.inputGrande}
        placeholder="Descreva como deseja ajudar..."
        value={outro}
        onChangeText={setOutro}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Selecionar</Text>
      </TouchableOpacity>

    <TouchableOpacity onPress={sair}>
        <Text style={styles.login}>Sair</Text>
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
    width: 600,
    height: 300,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#862544ff",
    marginBottom: 10,
  },

  descricao: {
    fontSize: 20,
    textAlign: "center",
    color: "#862544ff",
    marginBottom: 20,
  },

  inputGrande: {
    backgroundColor: "#e397af79",
    padding: 20,
    borderRadius: 13,
    marginBottom: 15,
    fontSize: 18,
  },

  botao: {
    backgroundColor: "#d6507dff",
    padding: 18,
    borderRadius: 10,
    marginBottom: 11,
    alignItems: "center",
  },

  textoBotao: {
    color: "#862544ff",
    fontSize: 20,
    fontWeight: "bold",
  },

  login: {
    color: "#862544ff",
    textDecorationLine: "underline",
    marginTop: 20,
    textAlign: "center",
    fontSize: 22,
  },
});