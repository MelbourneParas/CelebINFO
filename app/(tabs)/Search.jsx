import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput   
 style={styles.searchInput} placeholder="Search" />
      <Text style={styles.searchItem}>L i z a  S o b e r a n o</Text>
      <Text style={styles.searchItem}>E m i n e m</Text>
      <Text style={styles.searchItem}>M i c h a e l  J o r d a n</Text>
      <Text style={styles.searchItem}>Z a y n  M a l i k</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  searchInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 100,
    width: '100%',
    borderRadius: 1100,
    textAlign: 'center',
    fontSize: 20,
    opacity: 0.5
  },
  searchItem: {
    fontSize: 20,
    marginBottom: 80,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    alignItems: 'center',
  },
});

export default SearchScreen;