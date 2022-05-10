import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND}
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  padding: ${getStatusBarHeight() + 32}px 24px 108px;
`;

export const Photo = styled.Image`
  position: relative;
  top: -120px;

  align-self: center;

  width: 240px;
  height: 240px;

  border-radius: 120px;
`;

export const Form = styled.View`
  width: 100%;

  margin-top: -144px;

  padding: 24px;
`;

export const Title = styled.Text`
  margin: 24px 0 46px;

  font-size: 32px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};
    
    font-family: ${theme.FONTS.TITLE};
  `};
`;

export const Label = styled.Text`
  margin-bottom: 16px;

  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};
    
    font-family: ${theme.FONTS.TEXT};
  `};
`;

export const Sizes = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 40px;
`;

export const FormRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const InputGroup = styled.View`
  width: 47%;
`;

export const Price = styled.Text`
  align-self: flex-end;

  margin: 24px 0;

  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};
    
    font-family: ${theme.FONTS.TEXT};
  `};
`;
