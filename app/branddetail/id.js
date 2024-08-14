import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import brandsList from '../brands.json';
import imageMappings from '../imageMappings';

export default function BrandSingle() {
    const { id } = useLocalSearchParams();
    const data = brandsList.listBrand.find(
        (item) => item.id === id
    );

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={imageMappings[data.image]}
            />
            <View style={styles.containerSingle}>
                <Text style={styles.titleBrand}>{data.name}</Text>
                <Text style={styles.description}>{data.description}</Text>
            </View>
        </ScrollView>
    );
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
    titleBrand: {
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
