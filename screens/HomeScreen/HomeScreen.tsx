import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Header } from './Header';
import { HorizontalDivider } from './HorizontalDivider';
import { useFibonaChickenCalculator } from './useFibonaChickenCalculator';

const chickenEmoji = String.fromCodePoint(0x1f414);
const thinkingFaceEmoji = String.fromCodePoint(0x1f914);

export const HomeScreen = () => {
  const { deviceWidth, deviceHeight, fontSize } = useTheme();
  const { peopleCount, setPeopleCount, chickenCount, increase, decrease } = useFibonaChickenCalculator();

  const onChangeNumber = (text: string) => {
    setPeopleCount(Math.max(Number(text.substring(0, 8)) || 0, 0));
  };

  return (
    <RootView>
      <Header title="피보나치킨 계산기" style={{ height: deviceHeight * 0.1 }} />
      <HorizontalDivider />
      <ScrollView scrollEnabled={true} style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: deviceWidth * 0.55, fontSize: fontSize.m }]}
            onChangeText={onChangeNumber}
            value={`${peopleCount}`}
            inputMode="numeric"
            defaultValue="1"
            autoCorrect={false}
            maxLength={8}
            textAlign="center"
          />
          <Text>명 이면..</Text>
        </View>

        <View style={styles.result}>
          <Text>{chickenCount > 0 ? `${chickenCount}닭! ${chickenEmoji}` : thinkingFaceEmoji.repeat(3)}</Text>
          <Text onPress={increase}>&#9650;</Text>
          <Text onPress={decrease}>&#9660;</Text>
        </View>

        <Text style={styles.chickens}>{chickenEmoji.repeat(chickenCount)}</Text>
      </ScrollView>
    </RootView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    columnGap: 10,
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chickens: {
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 30,
  },
});
