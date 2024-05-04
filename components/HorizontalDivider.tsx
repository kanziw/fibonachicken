import { useTheme } from '@/theme';
import { StyleSheet, View } from 'react-native';

export const HorizontalDivider = () => {
  const { dividerColor } = useTheme();
  return <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: dividerColor }} />;
};
