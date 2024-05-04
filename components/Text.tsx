import { type Size, useTheme } from '@/theme';
import type { FC } from 'react';
import { Text as RNText, type TextProps } from 'react-native';

type Props = TextProps & {
  size?: Size;
};

export const Text: FC<Props> = ({ size, style, children, ...props }) => {
  const { foregroundColor, fontSize: fontSizeMap } = useTheme();

  return (
    <RNText style={[{ color: foregroundColor, fontSize: fontSizeMap[size ?? 'm'] }, style]} {...props}>
      {children}
    </RNText>
  );
};
