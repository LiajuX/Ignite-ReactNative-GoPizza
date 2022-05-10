import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 104px;
  height: 104px;

  margin-right: 20px;
  border-radius: 52px;
`;

export const Details = styled.View`
  flex: 1;

  margin-left: 20px;
  padding: 18px 0;
`;

export const Identification = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;

`;

export const Name = styled.Text`
  flex: 1;

  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};
    
    font-family: ${theme.FONTS.TITLE};
  `};
`;

export const Description = styled.Text`
  font-size: 12px;
  line-height: 20px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_500};
    
    font-family: ${theme.FONTS.TEXT};
  `};
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;

  margin: 12px 0 12px 124px;

  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;
