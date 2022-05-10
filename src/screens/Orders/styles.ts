import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND}
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT
}))`
  align-items: center;

  width: 100%;

  padding: ${getStatusBarHeight() + 32}px 0 32px;
`;

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE}

    font-family: ${theme.FONTS.TITLE};
  `};
`;
