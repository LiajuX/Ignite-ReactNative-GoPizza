import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

export function GoBackButton({ ...rest }: TouchableOpacityProps) {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  return (
    <Container {...rest} onPress={navigation.goBack}>
      <Entypo name="chevron-small-left" size={24} color={COLORS.TITLE} />
    </Container>
  );
}
