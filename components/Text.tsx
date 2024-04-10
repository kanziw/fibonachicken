import { useTheme } from '@/theme';
import type { FC } from 'react';
import { Text as RNText, type TextProps } from 'react-native';

export const Text: FC<TextProps> = ({ style, children, ...props }) => {
  const { foregroundColor, fontSize } = useTheme();

  return (
    <RNText style={[{ color: foregroundColor, fontSize: fontSize.m }, style]} {...props}>
      {children}
    </RNText>
  );
};
