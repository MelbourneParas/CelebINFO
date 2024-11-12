import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const BookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Liked</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Saved</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // This arranges the buttons in a row
    justifyContent: 'space-around', // Spreads the buttons evenly
    alignItems: 'center',
    flexWrap: 'wrap', // Allows buttons to wrap to a new line if necessary
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#BF6724',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 140, // Adjust button width for better fit in a row
  },
  buttonText: {
    color: 'white',
    fontSize: 20, // Adjust font size to fit button in a row layout
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BookmarksScreen;