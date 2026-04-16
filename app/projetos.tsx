import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Projetos() {
    const router = useRouter();

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
    cardGrande: {
        backgroundColor: "#e397af7f",
        borderRadius: 15,
        marginBottom: 50,
        padding: 25
    },
    cardImageGrande: {
        width: "100%",
        height: 220,
        borderRadius: 10
    },
    cardTitleGrande: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#862544ff",
        marginTop: 10
    },
    cardTextGrande: {
        fontSize: 23,
        color: "#862544ff",
        marginTop: 5,
        lineHeight: 22
    },
    login: {
        color: "#862544ff",
        textDecorationLine: "underline",
        marginTop: 10,
        textAlign: "center",
        fontSize: 25
    },
});