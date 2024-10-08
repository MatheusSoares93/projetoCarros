import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import list from '../products.json';
import imageMappings from '../imageMappings';

export default function CarSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listProduct.find((item) => item.id === id);

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
                <Text style={styles.titleProduct}>  {data.title} </Text>
                <Text style={styles.description}> {data.description} </Text>
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
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
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