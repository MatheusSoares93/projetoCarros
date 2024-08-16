import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import brandsList from '../brands.json';
import imageMappings from '../imageMappings';

export default function BrandSingle() {
    const { id } = useLocalSearchParams();
    const data = brandsList.listBrand.find(
        (item) => item.id === id);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={imageMappings[data.image]}
                    resizeMode="contain" 
                />
            </View>
            <View style={styles.containerSingle}>
                <Text style={styles.titleBrand}>  {data.name} </Text>
                <Text style={styles.description}> {data.description} </Text>
            </View>
        </ScrollView>
    );
}

const { width } = Dimensions.get('window'); 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        width: width - 40, 
        height: width - 40, 
    },
    image: {
        width: '100%',
        height: '100%',
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
    errorText: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },
});