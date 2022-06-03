import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home' | 'Success'>;

export const useSuccess = () => {
  const navigation = useNavigation();
  const route = useRoute<Props['route']>();
  const address = route?.params?.address;
  const city = address?.split(',')[0];
  const country = address?.split(',')[1];

  return { navigation, country, city };
};
