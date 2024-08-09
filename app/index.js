import React from 'react';
import { Text, View, ImageBackground, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {
  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou um carregamento ou mensagem
  }

  return (
    <ImageBackground 
      source={require('../assets/images/car.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Alguns dos carros que mais gosto
        </Text>

        <Text style={styles.description}>
          {/* <Icon name="car" size={30} color="#fff" />  */}
          Nissan Skyline R34 GTR
        </Text>

        <Link href="/products" style={styles.button} asChild>
          <Pressable>
            <Text style={styles.buttonText}>
              Ver carros
            </Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Ajuste o valor para controlar a transparência
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
     alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Light',
    fontWeight: 'bold',
    marginBottom: 200,
    marginTop: 250,
    color: '#fff',
    fontSize: 20,
  },
  description: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#fff',
    fontSize: 20,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#0066CC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
