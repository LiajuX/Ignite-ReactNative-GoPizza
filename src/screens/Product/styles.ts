import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Button } from '@components/Button';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT
}))`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: ${getStatusBarHeight() + 32}px 24px 24px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE}

    font-family: ${theme.FONTS.TITLE};
  `};
`;

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})``;

export const DeleteButtonLabel = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE}

    font-family: ${theme.FONTS.TEXT}
  `};
`;

export const PlaceholderView = styled.View`
  width: 40px;
`;

export const Upload = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 32px 0;
`;

export const PickImageButton  = styled(Button)`
  max-width: 90px;

  margin-left: 32px;
`;

export const Form = styled.View`
  width: 100%;

  padding: 24px;
`;

export const Label = styled.Text`
  margin-bottom: 12px;

  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};

    font-family: ${theme.FONTS.TEXT};
  `};
`;

export const InputGroup = styled.View`
  width: 100%;

  margin-bottom: 16px;
`;

export const InputGroupHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const MaxCharacters = styled.Text`
  margin-bottom: 12px;

  font-size: 10px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};

    font-family: ${theme.FONTS.TEXT};
  `};
`;
