import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48,
  }
})`
  width: 100%;
  
  padding: 0 32px;
`;

export const Title = styled.Text`
  align-self: flex-start;

  margin-bottom: 24px;

  font-size: 32px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE}

    font-family: ${theme.FONTS.TITLE}
  `};
`; 

export const Brand = styled.Image.attrs({
  resizeMode: 'contain',
})`
  align-self: center;

  height: 340px;

  margin: 64px 0 32px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  align-self: flex-end;

  margin: 4px 0 20px;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE}

    font-family: ${theme.FONTS.TEXT}
  `};
`;
