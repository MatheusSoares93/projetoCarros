import React from 'react';
import { Text, View, ImageBackground, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';

export default function Index() {
  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../assets/images/car.jpg')}
      style={styles.container}
    >
      <View style={styles.topOverlay} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Alguns dos carros que mais gosto
        </Text>

        <Text style={styles.description}>
          Nissan Skyline R34 GTR
        </Text>

        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <Link href="/products" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Ver Carros
                </Text>
              </Pressable>
            </Link>

            <Link href="/about2" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Sobre o App
                </Text>
              </Pressable>
            </Link>

            <Link href="/brands" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Ver Marcas
                </Text>
              </Pressable>
            </Link>
          </View>

          <View style={styles.row}>
            <Link href="/flex2" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Ver Body Kits
                </Text>
              </Pressable>
            </Link>

            <Link href="/firebase" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Banco de Preços
                </Text>
              </Pressable>
            </Link>

            <Link href="/firebaseCrud" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Adicionar Carro ao Banco
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>

      <View style={styles.bottomOverlay} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 320,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 320,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  title: {
    fontFamily: 'Roboto-Light',
    fontWeight: 'bold',
    marginBottom: 200,
    marginTop: 165,
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
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginVertical: 10,
    width: '100%',
  },
  button: {
    flex: 1,
    height: 50,
    marginHorizontal: 5,
    backgroundColor: '#0066CC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    textAlign:"center",
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});