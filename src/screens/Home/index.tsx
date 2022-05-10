import React, { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useAuth } from '@hooks/auth';

import { Search } from '@components/Search';
import { ProductCard, ProductProps } from '@components/ProductCard';

import happyEmoji from '@assets/happy.png';

import { 
  Conatiner, 
  Greeting, 
  GreetingEmoji, 
  GreetingText, 
  Header, 
  MenuHeader, 
  MenuItemsCounter, 
  MenuTitle, 
  NewProductButton, 
  SignOutButton
} from './styles';

export function Home() {
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState('');

  const { user, signOut } = useAuth();

  const navigation = useNavigation();

  const { COLORS } = useTheme();
  
  function fetchPizzas(value: string) {
    const formattedValue = value.toLocaleLowerCase().trim();
    
    firestore()
      .collection('pizzas')
      .orderBy('name_insensitive')
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then(response => {
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        }) as ProductProps[];

        setPizzas(data);
      })
      .catch(() => Alert.alert('Consulta', 'Não foi possível realizar a busca das pizzas disponíveis no cardápio.'));
  }

  function handleSearch() {
    fetchPizzas(search);
  }

  function handleSearchClear() {
    setSearch('');
    fetchPizzas('');
  }

  function handleOpenPizzaDetails(id: string) {
    const route = user?.isAdmin ? 'product' : 'order';

    navigation.navigate(route, { id });
  }

  function handleAddPizza() {
    navigation.navigate('product', {});
  }

  useFocusEffect(
    useCallback(() => {
      fetchPizzas('');
    }, [])
  );

  return (
    <Conatiner>
      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Olá, {user?.isAdmin ? 'Admin' : 'Garçom'}</GreetingText>
        </Greeting>

        <SignOutButton onPress={signOut}>
          <MaterialIcons name="logout" color={COLORS.TITLE} size={24} />
        </SignOutButton>
      </Header>

      <Search 
        value={search}
        onSearch={handleSearch}
        onClear={handleSearchClear}
        onChangeText={setSearch}
      />

      <MenuHeader>
        <MenuTitle>Cardápio</MenuTitle>

        <MenuItemsCounter>
          {pizzas.length} {pizzas.length === 1 ? 'pizza' : 'pizzas'}
        </MenuItemsCounter>
      </MenuHeader>

      <FlatList
        data={pizzas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard 
            data={item} 
            onPress={() => handleOpenPizzaDetails(item.id)}
          />
        )}
        contentContainerStyle={{
          marginHorizontal: 24,
          paddingTop: 20,
          paddingBottom: 125,
        }}
        showsVerticalScrollIndicator={false}
      />

      {
        user?.isAdmin && (
          <NewProductButton 
            title="Cadastrar pizza"
            type="secondary"
            onPress={handleAddPizza}
          />
        )
      }
    </Conatiner>
  );
}
