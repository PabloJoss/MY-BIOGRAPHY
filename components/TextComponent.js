import {Text, View, StyleSheet} from'react-native';

const TextComponent = ()=>{
    return(
        <View>
        <Text style={styles.text}>Nombre: Pablo Josue Camorlinga Vazquez</Text>
        <Text style={styles.text}>Ocupacion: Forajido</Text>
        <Text style={styles.text}>Edad: 20</Text>
        <Text style={styles.text}>Fecha de nacimiento: 03/06/03</Text>
        <Text style={styles.text}>Estado civil: Soltero</Text>
        <Text style={styles.text}>Sobre mi:Arthur Morgan nació en 1863 como hijo de Beatrice y Lyle Morgan. 
          Siendo su padre un criminal y forajido de poca monta, fue arrestado por hurto en 1874, 
          cuando él tenía 11 años de edad. Sobre 1878, fue tomado bajo el ala de Dutch van der 
          Linde y Hosea Matthews a los catorce años. </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    text: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#dfe6e9',
    }
  
  });

export default TextComponent;