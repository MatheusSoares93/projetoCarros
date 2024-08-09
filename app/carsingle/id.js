import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import list from '../products.json';
import imageMappings from '../imageMappings';

export default function carSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listProduct.find(
        (item) => item.id === id)
    
        return (
            <ScrollView style={styles.container}>
                <Image
                    style={styles.image}
                    source={imageMappings[data.image]}
                />
                <View style={styles.containerSingle}>
                    <Text style={styles.titleProduct}>  {data.title} </Text>
                    <Text style={styles.description}> {data.description} </Text>
    
                </View>
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
    },
    image: {
        width: 400,
        height: 400,
        borderRadius: 8,
    },
    titleProduct: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#87CEEB',
        marginBottom: 10,
    },
    description: {
        marginTop: 5,
        fontSize: 16,
        color: '#fff',
        textAlign: 'justify',
        marginBottom: 10,
    },
});