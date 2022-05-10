import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { 
  Container, 
  Content, 
  Description, 
  Details, 
  Identification, 
  Image,
  Line,
  Name
} from './styles';

export type ProductProps = {
  id: string;
  photo_url: string;
  name: string;
  description: string;
}

type Props = RectButtonProps & {
  data: ProductProps;
}

export function ProductCard({ data, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Content {...rest}>
        <Image source={{ uri: data.photo_url }} />

        <Details>
          <Identification>
            <Name>{data.name}</Name>

            <Entypo name="chevron-small-right" size={24} color={COLORS.SHAPE} />
          </Identification>

          <Description>{data.description}</Description>
        </Details>
      </Content>
      
      <Line />
    </Container>
  );
}
