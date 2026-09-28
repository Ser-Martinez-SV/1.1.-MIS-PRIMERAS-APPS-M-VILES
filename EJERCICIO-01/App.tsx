import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      <Text style={styles.course}>Curso 2026/2027</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#64748b',
  },
  course:{
    marginTop: 8,
    fontSize: 14,
    color: '#63a1fd',
  }
});