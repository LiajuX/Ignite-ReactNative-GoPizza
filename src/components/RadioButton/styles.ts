import styled, { css } from 'styled-components/native';

export type RadioButtonProps = {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<RadioButtonProps>`
  width: 104px;
  height: 82px;

  padding: 14px 16px;
  border-radius: 8px;

  ${({ theme, selected }) => css`
    border: ${selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE};

    background-color: ${selected ? theme.COLORS.SUCCESS_50 : theme.COLORS.TITLE};
  `}; 
`;

export const Radio = styled.View<RadioButtonProps>`
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  margin-bottom: 16px;
  border: 1px solid ${({ theme, selected }) => 
  selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SECONDARY_900};
  border-radius: 10px;
`;

export const Selected = styled.View`
  width: 8px;
  height: 8px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900}
`;

export const  Title = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};

    font-family: ${theme.FONTS.TITLE};
  `}; 
`;
