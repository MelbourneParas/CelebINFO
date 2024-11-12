import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
    <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/219/219970.png' }} 
        style={styles.image} 
      />
      <Text style={styles.profileName}>Melbourne Paras</Text>
      <Text style={styles.profileInfo}>Live in Sangi, Toledo City</Text>
      <Text style={styles.profileInfo}>Single</Text>
      <Text style={styles.profileInfo}>May 25, 2004</Text>
      <Text style={styles.sectionTitle}>Recent Searches:</Text>
      <View style={styles.recentSearches}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#BF6724',
    textAlign: 'center',
  },
  profileInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: '#BF6724',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 50,

  },
});

export default ProfileScreen;