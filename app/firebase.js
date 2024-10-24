// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function App() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const usersCollection = collection(db, 'carros');
            const usersSnapshot = await getDocs(usersCollection);
            const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(usersList);
        } catch (error) {
            console.error("Erro ao buscar carros: ", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Preços de Carros</Text>
            {users.map(user => (
                <View key={user.id} style={styles.itemContainer}>
                    {user.marca && (
                        <Text style={styles.titleBrand}>Marca: {user.marca}</Text>
                    )}
                    {user.modelo && (
                        <Text style={styles.description}>Modelo: {user.modelo}</Text>
                    )}
                    {user.preço && (
                        <Text style={styles.description}>Preço: R${user.preço}</Text>
                    )}
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