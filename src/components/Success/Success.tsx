import { View, StyleSheet, Text, Button } from 'react-native';
import { useSuccess } from './UseSuccess';

export const Success = () => {
  const { navigation, country, city } = useSuccess();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your address is:</Text>
      <View style={styles.address}>
        <Text style={styles.text}>Country: {country}</Text>
        <Text style={styles.text}>City: {city}</Text>
      </View>
      <View style={styles.button}>
        <Button title="Home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',

    alignItems: 'center'
  },
  address: {
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    width: '90%',
    backgroundColor: '#d3d3d3'
  },
  text: { fontSize: 20 },
  title: {
    fontSize: 20,
    color: '#4c0a37',
    textAlign: 'center',
    marginBottom: 5
  },
  button: {
    borderWidth: 2,
    borderColor: '#4c0a37',
    borderRadius: 10,
    width: '60%',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 200,
    zIndex: -5
  }
});
