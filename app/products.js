import { Text, ScrollView, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import list from './products.json';
import imageMappings from './imageMappings';

export default function Products() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Carros
            </Text>

            {list.listProduct.map((item) => (
                <View key={item.id} style={styles.itemButton}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Image source={imageMappings[item.image]} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.titleProduct}>{item.id}. {item.title}</Text>
                                {/* <Text style={styles.description}>{item.description}</Text> */}
                            </View>
                        </View>
                        <Link
                            href={{
                                pathname: "/carsingle/id",
                                params: { id:item.id }
                            }}
                            style={styles.itemLink} // Estilo do link para ser um botão
                        >
                            <Text style={styles.linkText}>Acessar</Text>
                        </Link>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#87CEEB', 
        fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000', 
    },
    itemButton: {
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden', 
    },
    itemContainer: {
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'column',
        width: '100%',
    },
    itemContainerDetails: {
        flexDirection: 'row', // Organiza imagem e texto lado a lado
        alignItems: 'center', // Alinha a imagem e o texto verticalmente
    },
    itemLink: {
        backgroundColor: '#0066CC', 
        paddingVertical: 15, // Espaçamento vertical do botão
        paddingHorizontal: 20, // Espaçamento horizontal do botão
        marginTop: 10, // Espaço entre o item e o botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        justifyContent: 'center', // Alinha o texto verticalmente no botão
        borderRadius: 15,
        textAlign: 'center'
    },
    linkText: {
        color: '#FFFFFF', // Texto branco
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: 170,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#87CEEB' 
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        color: '#fff', // Texto branco
        lineHeight: 18,
        textAlign: 'left',
    },
});