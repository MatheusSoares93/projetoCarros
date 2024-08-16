import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function About2() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Sobre o Aplicativo</Text>
                <Text style={styles.description}>
                    Este aplicativo é dedicado aos carros e marcas que mais admiro. Aqui você encontrará informações detalhadas sobre alguns dos veículos mais icônicos e marcas que redefiniram o mundo automotivo. 
                </Text>
                <Text style={styles.description}>
                    Desde o lendário Nissan Skyline R34 GTR até outras máquinas que deixaram sua marca na história, este aplicativo é uma celebração da engenharia automotiva, potência e design.
                </Text>
                <Text style={styles.description}>
                    Navegue para descobrir mais sobre os carros, suas especificações e a história por trás das marcas que os criaram. Este é um espaço para entusiastas como você, que compartilham a paixão por velocidade, estilo e inovação.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    content: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Roboto-Light',
        fontWeight: 'bold',
        color: '#87CEEB',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontFamily: 'Roboto-Light',
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 15,
    },
});