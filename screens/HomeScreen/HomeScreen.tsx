import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import * as WebBrowser from 'expo-web-browser';
import { Alert, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { ExpandableSection } from './ExpandableSection';
import { Header } from './Header';
import { HorizontalDivider } from './HorizontalDivider';
import { useDebugInfo } from './useDebugInfo';
import { useFibonaChickenCalculator } from './useFibonaChickenCalculator';

const chickenEmoji = String.fromCodePoint(0x1f414); // 🐔
const babyChickEmoji = String.fromCodePoint(0x1f425); // 🐥
const thinkingFaceEmoji = String.fromCodePoint(0x1f914); // 🤔

export const HomeScreen = () => {
  const { deviceWidth, deviceHeight, fontSize } = useTheme();
  const { peopleCount, setPeopleCount, chickenCount, increase, decrease } = useFibonaChickenCalculator();

  const expandableSectionFontSize = { fontSize: fontSize.s };
  const originalAuthorFontSize = { fontSize: fontSize.xs };
  const { debugInfo } = useDebugInfo();

  const onChangeNumber = (text: string) => {
    setPeopleCount(Math.max(Number(text.substring(0, 8)) || 0, 0));
  };
  const onFibonaChickenPressed = () => {
    Alert.alert(
      'Debug',
      Object.entries(debugInfo)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n'),
    );
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

        <Text style={styles.chickens}>{chickenCount > 500 ? `${babyChickEmoji}: 엄마..? 어디야...` : chickenEmoji.repeat(chickenCount)}</Text>

        <ExpandableSection title="세상 만사.." style={styles.expandableSection} titleStyle={expandableSectionFontSize} containerStyle={styles.expandableSectionContainer}>
          <Text style={expandableSectionFontSize}>모든 것의 균형은 황금 비율에서 그 해답을 찾을 수 있고, 이를 수학적으로 풀어낸것이 바로 피보나치 수열이니라.</Text>
          <Text style={expandableSectionFontSize}>
            일찍이 선지자가 있어, 치킨과 피보나치 수열의 관계를 밝힌 자들이 있으니 그들의 끝을 모르는 탐구 정신과 널리 인간과 치킨을 이롭게 하려는 마음을 높이 사, 내 잠시 짬을 내어
            허접한 코드질을 하였으니 이를{' '}
            <Text style={[expandableSectionFontSize, { fontWeight: 'bold' }]} onPress={onFibonaChickenPressed}>
              피보나치킨
            </Text>{' '}
            계산기라고 부르도록 하겠다.
          </Text>
          <Text style={[originalAuthorFontSize, styles.originalAuthor]}>
            원작자:{' '}
            <Text style={[originalAuthorFontSize, styles.textUnderline]} onPress={() => WebBrowser.openBrowserAsync('https://twitter.com/scari_net')}>
              @scari_net
            </Text>
          </Text>
        </ExpandableSection>
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
    marginHorizontal: 20,
  },
  expandableSection: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 60,
  },
  expandableSectionContainer: {
    marginVertical: 10,
  },
  originalAuthor: {
    marginTop: 8,
    marginRight: 20,
    textAlign: 'right',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
});
