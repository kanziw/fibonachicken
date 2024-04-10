import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import type { FC } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

type Props = ViewProps & {
  title: string;
};

export const Header: FC<Props> = ({ title, style, ...viewProps }) => {
  const { fontSize } = useTheme();
  return (
    <View style={[styles.container, style]} {...viewProps}>
      <Text style={{ fontSize: fontSize.l }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
