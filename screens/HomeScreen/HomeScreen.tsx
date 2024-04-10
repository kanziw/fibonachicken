import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './Header';
import { HorizontalDivider } from './HorizontalDivider';

export const HomeScreen = () => {
  const { deviceWidth, deviceHeight, fontSize } = useTheme();
  const [number, setNumber] = useState(0);

  const onChangeNumber = (text: string) => {
    setNumber(Math.max(Number(text.substring(0, 8)) || 0, 0));
  };

  return (
    <SafeAreaView>
      <Header title="피보나치킨 계산기" style={{ height: deviceHeight * 0.1 }} />
      <HorizontalDivider />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { width: deviceWidth * 0.55, fontSize: fontSize.m }]}
          onChangeText={onChangeNumber}
          value={`${number}`}
          inputMode="numeric"
          autoFocus={true}
          defaultValue="0"
          autoCorrect={false}
          maxLength={8}
          textAlign="center"
        />
        <Text>명 이면..</Text>
      </View>
      <Text style={{ fontSize: fontSize.xs }}>extra small</Text>
      <Text style={{ fontSize: fontSize.s }}>small</Text>
      <Text style={{ fontSize: fontSize.m }}>medium</Text>
      <Text style={{ fontSize: fontSize.l }}>large</Text>
      <Text style={{ fontSize: fontSize.xl }}>extra large</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    columnGap: 10,
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderWidth: 1,
    padding: 10,
  },
});
