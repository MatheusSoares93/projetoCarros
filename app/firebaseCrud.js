import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, StyleSheet } from 'react-native';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import * as Notifications from 'expo-notifications'; // Importação do módulo de notificações

// Configure a notificação padrão
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default function App() {
    const [carros, setCarros] = useState([]);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [preco, setPreco] = useState('');

    const fetchCarros = async () => {
        try {
            const carrosCollection = collection(db, 'carros');
            const carrosSnapshot = await getDocs(carrosCollection);
            const carrosList = carrosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCarros(carrosList);
        } catch (error) {
            console.error("Erro ao buscar carros: ", error);
        }
    };

    const addCarro = async () => {
        if (!marca || !modelo || !preco) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios');
            return;
        }
        try {
            const newCarro = {
                marca,
                modelo,
                preco // Certifique-se de que a propriedade seja "preco"
            };
            await addDoc(collection(db, 'carros'), newCarro);
            setMarca('');
            setModelo('');
            setPreco('');
            fetchCarros();

            // Enviar notificação após adicionar o carro
            sendNotification(); // Chamada para enviar a notificação
        } catch (error) {
            console.error("Erro ao adicionar carro: ", error);
        }
    };

    const sendNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Carro Adicionado",
                body: `Você adicionou um novo carro: ${marca} ${modelo} por R$${preco}!`,
            },
            trigger: null,
        });
    };

    const deleteCarro = async (carroId) => {
        Alert.alert(
            'Confirmar',
            'Você tem certeza que deseja deletar este carro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Deletar',
                    onPress: async () => {
                        try {
                            await deleteDoc(doc(db, 'carros', carroId));
                            fetchCarros();
                        } catch (error) {
                            console.error("Erro ao deletar carro: ", error);
                        }
                    }
                }
            ]
        );
    };

    useEffect(() => {
        fetchCarros();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Preços de Carros</Text>

            <View style={styles.form}>
                <TextInput
                    placeholder="Marca"
                    value={marca}
                    onChangeText={setMarca}
                    style={styles.input}
                    placeholderTextColor="#999"
                />
                <TextInput
                    placeholder="Modelo"
                    value={modelo}
                    onChangeText={setModelo}
                    style={styles.input}
                    placeholderTextColor="#999"
                />
                <TextInput
                    placeholder="Preço"
                    value={preco}
                    onChangeText={setPreco}
                    style={styles.input}
                    keyboardType="numeric"
                    placeholderTextColor="#999"
                />
                <Button title="Adicionar Carro" onPress={addCarro} color="#0066CC" />
            </View>

            {carros.map(carro => (
                <View key={carro.id} style={styles.itemContainer}>
                    {carro.marca && (
                        <Text style={styles.titleBrand}>Marca: {carro.marca}</Text>
                    )}
                    {carro.modelo && (
                        <Text style={styles.description}>Modelo: {carro.modelo}</Text>
                    )}
                    {carro.preço && (
                        <Text style={styles.description}>Preço: R${carro.preço}</Text>
                    )}
                    <Button title="Deletar" onPress={() => deleteCarro(carro.id)} color="red" />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000', 
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#87CEEB', 
        fontSize: 20,
    },
    form: {
        marginVertical: 20,
        backgroundColor: '#333', 
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    input: {
        borderWidth: 1,
        borderColor: '#666',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#555',
        color: '#fff', 
    },
    itemContainer: {
        backgroundColor: '#333', 
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
    titleBrand: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#87CEEB', 
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        color: '#fff', 
        lineHeight: 18,
    },
});
