import styled, { css } from 'styled-components/native';

export const Image = styled.Image`
  width: 160px;
  height: 160px;

  border-radius: 80px;
`;

export const Placeholder = styled.View`
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;

  border-radius: 80px;
  border: 1px dashed ${({ theme }) => theme.COLORS.SECONDARY_900};

  background-color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const PlaceholderText = styled.Text`
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};

    font-family: ${theme.FONTS.TEXT};
  `};
`;
