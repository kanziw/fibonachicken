import { useTheme } from '@/theme';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const Contacts = () => {
  const router = useRouter();
  const { foregroundColor } = useTheme();

  return <FontAwesome onPress={() => router.push('/contacts')} name="question-circle-o" size={24} color={foregroundColor} />;
};
