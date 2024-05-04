import { type BrandID, findBrand } from '@/db';
import { useTheme } from '@/theme';
import { ThemeProvider, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import type { Route } from '@react-navigation/routers';
import { Stack } from 'expo-router/stack';

export default function AppLayout() {
  const { navigationTheme } = useTheme();
  return (
    <ThemeProvider value={navigationTheme}>
      <Stack screenOptions={({ route }) => ({ headerTitle: routeToTabHeader(route) })}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="tags" />
      </Stack>
    </ThemeProvider>
  );
}

const routeToTabHeader = (route: Partial<Route<string>>) => {
  switch (getFocusedRouteNameFromRoute(route)) {
    case 'calculator':
      return '계산기';
    case 'findings':
      return '찾기';
    case 'favorites':
      return '즐겨찾기';
  }

  const [routeName, screenName, params] = parseRouteAndScreenName(route);
  switch (routeName) {
    case '':
      return '';
    case 'tags':
      switch (screenName) {
        case 'boneless':
          return '순살';
        case 'seasoned':
          return '양념';
        case '[brandId]':
          return findBrand(params.brandId as BrandID).name;
      }
  }

  console.warn(`Unhandled route and screen: ${routeName} / ${screenName} / ${JSON.stringify(params)}`);

  return 'Unknown';
};

const parseRouteAndScreenName = (route: Partial<Route<string>>): [string, string, Record<string, unknown>] => {
  if (!route.name || !route.params || !('screen' in route.params)) {
    return ['', '', {}];
  }
  // @ts-ignore
  return [route.name, route.params.screen as string, route.params.params ?? {}];
};
