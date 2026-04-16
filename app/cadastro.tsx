import React, { useState } from "react";
import {ScrollView, Text, Image, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function Cadastro() {
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");

 function cadastrar() {
    if (
        !nome.trim() ||
        !email.trim() ||
        !cpf.trim() ||
        !telefone.trim() ||
        !senha.trim()
    ) {
        alert("Preencha todos os campos!");
        return;
    }
        const id = Math.random().toString(36).substring(2, 9);

        router.push({
            pathname: "/dashboard",
            params: {
                userName: nome,
                voluntarioId: id,
            },
        });
    }

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

            <TextInput
                style={styles.inputGrande}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.inputGrande}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.inputGrande}
                placeholder="CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={setCpf}
            />

            <TextInput
                style={styles.inputGrande}
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={setTelefone}
            />

            <TextInput
                style={styles.inputGrande}
                placeholder="Crie uma Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.botaoForm} onPress={cadastrar}>
                <Text style={styles.textoBotaoForm}>Cadastrar</Text>
            </TouchableOpacity>

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
        padding: 20
    },
    titulo: {
        fontSize: 40,
        color: "#862544ff",
        textAlign: "center",
        marginBottom: 25,
        fontWeight: "bold"
    },
    descricao: {
        textAlign: "center",
        color: "#862544ff",
        marginBottom: 25,
        fontSize: 25
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
        fontSize: 19
    },
    botaoForm: {
        backgroundColor: "#d6507dff",
        padding: 16,
        borderRadius: 12,
        marginTop: 10,
        alignItems: "center"
    },
    textoBotaoForm: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 25
    },
    login: {
        color: "#862544ff",
        textDecorationLine: "underline",
        marginTop: 10,
        textAlign: "center",
        fontSize: 25
    },
});