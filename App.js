import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import TextComponent from './components/TextComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Mi biografía</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('./assets/img/arthur.jpeg')} />
          </View>
        </View>
        <View style={styles.textComponentContainer}>
          <TextComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  contentContainer: {
    backgroundColor: '#FF0000', // Fondo rojo fosforescente
    padding: 20, // Añadir espacio alrededor del contenedor
    marginBottom: 20, // Espacio para separar el contenido de TextComponent
  },
  titleContainer: {
    marginBottom: 20, // Espacio para separar el título de la imagen
  },
  title: {
    fontSize: 24, // Ajustar el tamaño del título
    fontWeight: 'bold',
    color: '#ffffff', // Cambiado el color del texto para que sea visible en el fondo rojo
  },
  imageContainer: {
    alignItems: 'center', // Centrar la imagen horizontalmente
  },
  image: {
    width: 150, // Ajustar el ancho de la imagen
    height: 150, // Ajustar la altura de la imagen
    borderRadius: 75, // Hacer la imagen circular
    marginBottom: 20, // Espacio para separar la imagen del texto
  },
  textComponentContainer: {
    backgroundColor: '#FF0000', // Fondo rojo fosforescente
    padding: 20, // Espacio alrededor del componente de texto
    borderRadius: 10, // Bordes redondeados
  },
});

export default App;

