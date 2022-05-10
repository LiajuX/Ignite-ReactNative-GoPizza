import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  Container, 
  Radio, 
  RadioButtonProps, 
  Selected, 
  Title 
} from './styles';

type Props = TouchableOpacityProps & RadioButtonProps & {
  title: string;
}

export function RadioButton({ title, selected = false, ...rest }: Props) {
  return (
    <Container 
      selected={selected} 
      activeOpacity={0.8}
      {...rest}
    >
      <Radio selected={selected}>{selected && <Selected />}</Radio>

      <Title>{title}</Title>
    </Container>
  );
}
 