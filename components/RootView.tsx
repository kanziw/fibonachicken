import { useTheme } from '@/theme';
import type { FC } from 'react';
import type { ViewProps } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export const RootView: FC<ViewProps> = ({ children, style, ...props }) => {
  const { backgroundColor } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[{ backgroundColor, marginBottom: insets.bottom }, style]} {...props}>
      {children}
    </SafeAreaView>
  );
};
