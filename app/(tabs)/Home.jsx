import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2077/2077173.png' }} 
        style={styles.image} 
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>A c t o r s   &   A c t r e s s e s</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>S i n g e r</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>H i p  -  H o p    A r t i s t</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>F a m o u s   A t h l e t e s</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:   
 {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor:   
 '#BF6724',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    margin: 20,
    width: 300
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 50,
  },
});

export default HomeScreen;