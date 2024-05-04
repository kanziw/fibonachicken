import { useTheme } from '@/theme';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import type { FC, PropsWithChildren } from 'react';
import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const RootView: FC<PropsWithChildren<ViewProps>> = ({ style, children, ...props }) => {
  const { backgroundColor } = useTheme();

  let headerHeight = 0;
  try {
    headerHeight = useHeaderHeight();
  } catch {}

  let tabBarHeight = 0;
  try {
    tabBarHeight = useBottomTabBarHeight();
  } catch {}
  const insets = useSafeAreaInsets();

  let paddingTop = insets.top;
  if (headerHeight > 0) {
    paddingTop = 0;
  }

  let paddingBottom = insets.bottom;
  if (tabBarHeight > 0) {
    paddingBottom = 0;
  }

  // console.log({ headerHeight, tabBarHeight, insets, paddingTop, paddingBottom });

  return (
    <View
      style={[
        {
          backgroundColor,
          paddingTop,
          paddingBottom,
          flex: 1,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
