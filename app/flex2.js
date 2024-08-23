import React from 'react';
import { Text, ScrollView, View, Image } from "react-native";
import { Link } from "expo-router";
import list from './bodykits.json'; 
import imageMappings from './imageMappings'; 

export default function flex() {
    return (
        <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#000' }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#87CEEB', fontSize: 20 }}>
                Marcas de Body Kit
            </Text>

            {list.listBodykits.map((item) => (
                <View key={item.id} style={{ marginBottom: 20, borderRadius: 8, overflow: 'hidden' }}>
                    <View style={{ backgroundColor: '#333', borderRadius: 8, padding: 10, flexDirection: 'column', width: '100%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={imageMappings[item.image]} style={{ width: 170, height: 100, borderRadius: 8 }} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#87CEEB' }}>
                                    {item.id}. {item.title}
                                </Text>
                            </View>
                        </View>
                        <Link
                            href={{
                                pathname: "/bodykitsingle/id",
                                params: { id: item.id }
                            }}
                            style={{ backgroundColor: '#0066CC', paddingVertical: 15, paddingHorizontal: 20, marginTop: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 15, textAlign: 'center' }}
                        >
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>
                                Ver Detalhes
                            </Text>
                        </Link>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}
