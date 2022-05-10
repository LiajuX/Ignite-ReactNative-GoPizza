import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native'; 

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 56px;

  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: 12px;

  background-color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Size = styled.View`
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  margin-right: 18px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Label = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};

    font-family: ${theme.FONTS.TEXT}
  `};
`;

export const Input = styled(TextInput)`
  flex: 1;

  padding-left: 8px;
`;
