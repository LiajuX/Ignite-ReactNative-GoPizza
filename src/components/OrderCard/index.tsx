import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  Container,
  Description,
  Image,
  Name,
  StatusContainer,
  StatusLabel
} from './styles';

export type OrderProps = {
  id: string;
  pizza: string;
  image: string;
  table_number: string;
  quantity: string;
  status: 'Preparando' | 'Pronto' | 'Entregue';
}

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
}

export function OrderCard({ index, data, ...rest }: Props) {
  return (
    <Container 
      index={index} 
      activeOpacity={0.6}
      {...rest}
    >
      <Image source={{ uri: data.image }} />

      <Name>{data.pizza}</Name>

      <Description>
        Mesa {data.table_number} • Qnt: {data.quantity}
      </Description>

      <StatusContainer status={data.status}>
        <StatusLabel status={data.status}>
          {data.status}
        </StatusLabel>
      </StatusContainer>
    </Container>
  );
}
