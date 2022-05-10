import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { useAuth } from '@hooks/auth';

import { ProductNavigationProps } from '@src/@types/navigation';

import { PIZZA_TYPES } from '@utils/pizzaTypes';

import { ProductProps } from '@components/ProductCard';
import { GoBackButton } from '@components/GoBackButton';
import { RadioButton } from '@components/RadioButton';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { 
  Container, 
  Content, 
  Form, 
  FormRow, 
  Header, 
  InputGroup, 
  Label, 
  Photo, 
  Price, 
  Sizes,
  Title
} from './styles';

type PizzaResponse = ProductProps & {
  prices_sizes: {
    [key: string]: number;
  }
}

export function Order() {
  const [pizza, setPizza] = useState<PizzaResponse>({} as PizzaResponse);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [tableNumber, setTableNumber] = useState('');
  const [isSendingOrder, setIsSendingOrder] = useState(false);

  const { user } = useAuth();

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as ProductNavigationProps;

  const amount = size ? pizza.prices_sizes[size] * quantity : '0,00';

  async function handleOrder() {
    if (!size) {
      return Alert.alert('Pedido', 'Selecione o tamanho da pizza.');
    }

    if (!quantity) {
      return Alert.alert('Pedido', 'Selecione a quantidade de pizza.');
    }

    if (!tableNumber) {
      return Alert.alert('Pedido', 'Selecione o número da mesa.');
    }
  
    setIsSendingOrder(true);

    firestore() 
      .collection('orders')
      .add({
        waiter_id: user?.id,
        table_number: tableNumber,
        pizza: pizza.name,
        image: pizza.photo_url,
        size,
        quantity,
        amount,
        status: 'Preparando',
      })
      .then(() => navigation.navigate('home'))
      .catch(() => {
        Alert.alert('Pedido', 'Não foi possível realizar o pedido.');

        setIsSendingOrder(false);
      });
  } 

  useEffect(() => {
    if (id) {
      firestore()
        .collection('pizzas')
        .doc(id)
        .get()
        .then(response => setPizza(response.data() as PizzaResponse))
        .catch(() => Alert.alert('Pedido', 'Não foi possível carregar o produto.'));
    }
  }, [id]);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Content>
        <Header>
          <GoBackButton />
        </Header>

        <Photo source={{ uri: pizza.photo_url }} />

        <Form>
          <Title>{pizza.name}</Title>
          
          <Label>Selecione um tamanho</Label>

          <Sizes>
            {
              PIZZA_TYPES.map(item => (         
                <RadioButton 
                  key={item.id}
                  title={item.name}
                  onPress={() => setSize(item.id)}
                  selected={item.id === size} 
                />
              ))
            }
          </Sizes>

          <FormRow>
            <InputGroup>
              <Label>Número da mesa</Label>

              <Input
                value={tableNumber}
                keyboardType="numeric" 
                onChangeText={setTableNumber}
              />
            </InputGroup>

            <InputGroup>
              <Label>Quantidade</Label>

              <Input
                keyboardType="numeric" 
                onChangeText={(value) => setQuantity(Number(value))}
              />          
            </InputGroup>
          </FormRow>

          <Price>
            Total: R$ {amount}
          </Price>

          <Button 
            title="Confirmar pedido"
            onPress={handleOrder}
            isLoading={isSendingOrder}
          />
        </Form>
      </Content>
    </Container>
  );
}
