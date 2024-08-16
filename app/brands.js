import { Text, ScrollView, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import brandsList from './brands.json';
import imageMappings from './imageMappings';

export default function Brands() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Marcas
            </Text>

            {brandsList.listBrand.map((item) => (
                <View key={item.id} style={styles.itemButton}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Image source={imageMappings[item.image]} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.titleBrand}>{item.id}. {item.name}</Text>
                            </View>
                        </View>
                        <Link
                            href={{
                                pathname: "/brandsingle/id",
                                params: { id: item.id }
                            }}
                            style={styles.itemLink} 
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
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    itemLink: {
        backgroundColor: '#0066CC', 
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        marginTop: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 15,
        textAlign: 'center'
    },
    linkText: {
        color: '#FFFFFF', 
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
    titleBrand: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#87CEEB' 
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        color: '#fff', 
        lineHeight: 18,
        textAlign: 'left',
    },
});
