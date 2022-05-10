import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Button } from '@components/Button';

export const Conatiner = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: ${getStatusBarHeight() + 32}px 20px;
`;

export const Greeting = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GreetingEmoji = styled.Image`
  width: 32px;
  height: 32px;

  margin-right: 12px;
`;

export const GreetingText = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};

    font-family: ${theme.FONTS.TITLE};
  `};
`;

export const SignOutButton = styled.TouchableOpacity``;

export const MenuHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 25px 24px 0;
  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const MenuItemsCounter = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};

    font-family: ${theme.FONTS.TEXT};
  `};
`;

export const MenuTitle = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};

    font-family: ${theme.FONTS.TITLE};
  `};
`;

export const NewProductButton = styled(Button)`
  margin: 0 24px ${getBottomSpace() + 12}px;
`;
