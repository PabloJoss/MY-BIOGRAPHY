import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import TextComponent from './components/TextComponent';

const App = () =>{
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Mi biografia</Text>
      <Image style={styles.text} source={requiere('./assets/img/arthur.jpg')}/>
      <TextComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487eb0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#dfe6e9',
  }

});

export default App;