import React from 'react';
import { Text, View, ImageBackground, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
          <Link href="/products" style={styles.button} asChild>
            <Pressable>
              <Text style={styles.buttonText}>
                Ver carros
              </Text>
            </Pressable>
          </Link>

          <Link href="/about2" style={styles.button} asChild>
            <TouchableOpacity>
              <Text style={styles.buttonText}>
                Sobre
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Link href="/brands" style={styles.button} asChild>
          <TouchableOpacity>
            <Text style={styles.buttonText}>
              Marcas
            </Text>
          </TouchableOpacity>
        </Link>
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
    width: '150px',
    margin: 15,
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
