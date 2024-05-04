import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import { FontAwesome } from '@expo/vector-icons';
import { Linking, StyleSheet, View } from 'react-native';

export default function ContactsModal() {
  const { foregroundColor } = useTheme();

  return (
    <RootView style={styles.container}>
      <View style={styles.question}>
        <Text>Q: 왜 치킨 종류가 이것밖에 없나요?</Text>
      </View>
      <View style={styles.answer}>
        <Text>👉 제가 먹는 것만 먹어서 그렇습니다</Text>
      </View>
      <View style={styles.comments}>
        <Text>
          추가하고 싶은 메뉴가 있다면 <Text onPress={() => Linking.openURL('mailto: kanziwoong+fibonachicken@gmail.com')}>kanziwoong@gmail.com</Text>으로 메일 주세요 :)
        </Text>
        <Text>
          혹시 엔지니어시라면 <FontAwesome name="github" size={24} color={foregroundColor} onPress={() => Linking.openURL('https://github.com/kanziw/fibonachicken')} />을 통해 직접
          기여해주셔도 좋습니다!
        </Text>
      </View>
    </RootView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
  question: {
    marginVertical: 8,
  },
  answer: {
    marginLeft: 8,
    marginVertical: 8,
  },
  comments: {
    marginVertical: 28,
    marginHorizontal: 20,
  },
});
