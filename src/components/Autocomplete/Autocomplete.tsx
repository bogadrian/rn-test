import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useAutocomplete } from './UseAutocpmplete';

// Don't use the api key here. do this in backend. this is just for testing purposes
const GOOGLE_PLACES_API_KEY = '<your api key here>'; // never save your real api key in a snack!

export const Input = () => {
  const {
    address,
    setAddress,
    setError,
    setStarted,
    error,
    started,
    isGermany,
    handleNavigation
  } = useAutocomplete();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please add your address</Text>
      <Text style={styles.error}>
        {address?.description &&
          !isGermany &&
          'Sorry, you only can chose a german address!'}
      </Text>
      <Text style={styles.error}>
        {error && 'Sorry, there was an error serching for the address!'}
      </Text>

      {started && (
        <ActivityIndicator size="large" color="#ff00d9" style={styles.loader} />
      )}

      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en' // language of the results
        }}
        onPress={data => {
          setAddress(data);
          setStarted(false);
        }}
        preProcess={text => {
          if (text.length > 0) {
            setStarted(true);
          }
          return text;
        }}
        onFail={() => setError(true)}
        debounce={400}
        textInputProps={{
          onChangeText: text => {
            setStarted(false);
            setAddress(null);
          }
        }}
      />
      {address?.description && isGermany && (
        <View style={styles.button}>
          <Button title="Next" onPress={handleNavigation} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',
    marginTop: 100,
    zIndex: 5
  },
  error: { textAlign: 'center', fontSize: 12, color: '#f31361' },
  button: {
    borderWidth: 2,
    borderColor: '#4c0a37',
    borderRadius: 10,
    width: '60%',
    alignSelf: 'center',
    marginBottom: 280,
    zIndex: -5
  },
  loader: { alignSelf: 'center', marginBottom: 5 },
  title: {
    fontSize: 20,
    color: '#4c0a37',
    textAlign: 'center',
    marginBottom: 5
  }
});
