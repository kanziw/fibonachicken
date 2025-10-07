import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import React, { type FC, type PropsWithChildren, useState } from 'react';
import { Pressable, type TextProps, View, type ViewProps } from 'react-native';

type Props = {
  title: string;
  style?: ViewProps['style'];
  titleStyle?: TextProps['style'];
  containerStyle?: ViewProps['style'];
};

export const ExpandableSection: FC<PropsWithChildren<Props>> = ({ title, style, titleStyle, containerStyle, children }) => {
  const { fontSize } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const Title: FC<PropsWithChildren> = ({ children }) => <Text style={[{ fontWeight: '600' }, titleStyle]}>{children}</Text>;
  const arrow = expanded ? <Title>&#9660;</Title> : <Title>&#9654;</Title>;

  let containerMarginLeft = fontSize.m;
  if (titleStyle && 'fontSize' in titleStyle && titleStyle.fontSize) {
    containerMarginLeft = titleStyle.fontSize;
  }

  return (
    <View style={style}>
      <Pressable onPress={() => setExpanded(!expanded)}>
        <Title>
          {arrow} {title}
        </Title>
      </Pressable>
      {expanded && <View style={[{ marginLeft: containerMarginLeft }, containerStyle]}>{children}</View>}
    </View>
  );
};

const Title: FC<PropsWithChildren<{ style?: TextProps['style'] }>> = ({ style, children }) => <Text style={[{ fontWeight: '600' }, style]}>{children}</Text>;
