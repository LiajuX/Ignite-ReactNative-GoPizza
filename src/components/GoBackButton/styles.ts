import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_100};
`;