import { useState, useMemo } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Success'>;

export const useAutocomplete = () => {
  const navigation = useNavigation<Props['navigation']>();

  const [address, setAddress] = useState<GooglePlaceData | null>();
  const [error, setError] = useState(false);
  const [started, setStarted] = useState(false);

  const isGermany = useMemo(() => {
    const addressSplited = address?.description.split(' ');
    const lastWord = addressSplited?.[addressSplited.length - 1];
    return lastWord === 'Germany';
  }, [address]);

  const handleNavigation = () => {
    if (address) {
      navigation.navigate('Success', { address: address.description ?? '' });
    }
  };

  return {
    address,
    setAddress,
    setError,
    setStarted,
    error,
    started,
    isGermany,
    handleNavigation
  };
};
