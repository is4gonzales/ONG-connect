import React, { useState } from "react";
import {ScrollView, Text, Image, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function Doacao() {
    const [anonimo, setAnonimo] = useState(false);
    const router = useRouter();

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
                source={require("../assets/images/doacoes.png")}
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
        fontWeight: "bold"
        , color: "#fff"
        , fontSize: 25
    },
    imagemDoacao: {
        width: "100%",
        height: 300,
        borderRadius: 10
    },
    check: {
        color: "#862544ff",
        fontSize: 25,
        marginBottom: 10
    },
    login: {
        color: "#862544ff",
        textDecorationLine: "underline",
        marginTop: 10,
        textAlign: "center",
        fontSize: 25
    },
});