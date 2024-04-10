import { Text } from '@/components/Text';
import type { FC } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

type Props = ViewProps & {
  title: string;
};

export const Header: FC<Props> = ({ title, style, ...viewProps }) => (
  <View style={[styles.container, style]} {...viewProps}>
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
