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
    backgroundColor: '#FF0000', 
    padding: 20, 
    marginBottom: 20, 
  },
  titleContainer: {
    marginBottom: 20, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#ffffff', 
  },
  imageContainer: {
    alignItems: 'center', 
  },
  image: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20, 
  },
  textComponentContainer: {
    backgroundColor: '#FF0000', 
    padding: 20, 
    borderRadius: 10, 
  },
});

export default App;

