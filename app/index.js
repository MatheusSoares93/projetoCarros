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
            <Link href="/products" style={styles.button} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Ver carros
                </Text>
              </Pressable>
            </Link>

            <Link href="/about2" style={styles.button} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Sobre
                </Text>
              </Pressable>
            </Link>
          </View>

          <View style={styles.row}>
            <Link href="/brands" style={styles.button} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Marcas
                </Text>
              </Pressable>
            </Link>

            <Link href="/flex2" style={styles.button} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Body Kit
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
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginVertical: 10, 
  },
  button: {
    width: 150, 
    marginHorizontal: 10, 
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
