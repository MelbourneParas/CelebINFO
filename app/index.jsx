import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
  <Text style={{ fontSize: 18, fontWeight: 'Roboto_MediumItalic',marginTop: 300, fontWeight: 'bold', opacity: 0.2}}>Welcome to Celebrity Info!</Text>
      <StatusBar style="auto" />
      <Link href="/Home" style={{marginTop: 400, fontWeight: 'bold',}}>Let's get this started!</Link>
      
    </View>
  );
}

