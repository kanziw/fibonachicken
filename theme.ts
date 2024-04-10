import { PixelRatio, StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
type Theme = 'light' | 'dark';

const decideByTheme = <T>(theme: Theme, lightValue: T, darkValue: T) => (theme === 'light' ? lightValue : darkValue);

export const useTheme = () => {
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions();
  const theme: Theme = useColorScheme() === 'dark' ? 'dark' : 'light';

  // dark: darcular theme
  // ref by https://github.com/kevinvn1709/vscode-dracula-color-theme/blob/a50f875631175ff53edea1b342fb1dcbb82f928c/themes/dracula-color-theme.json
  const backgroundColor = decideByTheme(theme, 'white', '#2B2B2B');
  const foregroundColor = decideByTheme(theme, 'black', '#D4D4D4');

  const pixcelRatio = PixelRatio.get();

  const fontSize: Record<Size, number> = {
    xs: 4 * pixcelRatio,
    s: 6 * pixcelRatio,
    m: 10 * pixcelRatio,
    l: 14 * pixcelRatio,
    xl: 20 * pixcelRatio,
  };

  return {
    theme,

    deviceWidth,
    deviceHeight,

    backgroundColor,
    foregroundColor,

    fontSize,

    ...StyleSheet.create({
      center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  };
};
