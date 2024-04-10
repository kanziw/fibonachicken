import { useTheme } from '@/theme';
import type { FC } from 'react';
import { type StyleProp, StyleSheet, View, type ViewStyle } from 'react-native';

export const HorizontalDivider: FC<{ style?: StyleProp<ViewStyle> }> = () => {
  const { foregroundColor } = useTheme();

  return (
    <View
      style={{
        borderBottomColor: foregroundColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
};
