import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { ProductNavigationProps } from '@src/@types/navigation';
import { ProductProps } from '@components/ProductCard';

import { GoBackButton } from '@components/GoBackButton';
import { Photo } from '@components/Photo';
import { Input } from '@components/Input';
import { InputPrice } from '@components/InputPrice';
import { Button } from '@components/Button';

import { 
  Container, 
  Content, 
  DeleteButton, 
  DeleteButtonLabel, 
  Form, 
  Header, 
  InputGroup, 
  InputGroupHeader, 
  Label, 
  MaxCharacters, 
  PickImageButton, 
  PlaceholderView, 
  Title, 
  Upload
} from './styles';

type PizzaResponse = ProductProps & {
  photo_path: string;
  prices_sizes: {
    p: string;
    m: string;
    g: string;
  }
}

export function Product() {
  const [photoPath, setPhotoPath] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeP, setPriceSizeP] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeG, setPriceSizeG] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params as ProductNavigationProps

  async function handleImagePicker() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  } 

  async function handleAddPizza() {
    if (!image.trim()) {
      Alert.alert('Cadastro', 'Selecione a imagem da pizza');
    }
    
    if (!name.trim()) {
      Alert.alert('Cadastro', 'Informe o nome da pizza');
    }

    if (!description.trim()) {
      Alert.alert('Cadastro', 'Informe a descrição da pizza');
    }

    if (!priceSizeP.trim() || !priceSizeM.trim() || !priceSizeG.trim()) {
      Alert.alert('Cadastro', 'Informe o preço de todos os tamanhos de pizza');
    }

    setIsLoading(true);

    const fileName = new Date().getTime();
    const reference = storage().ref(`/pizzas/${fileName}`);

    await reference.putFile(image);

    const photoURL = await reference.getDownloadURL();

    firestore()
      .collection('pizzas')
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(), // used to search for a pizza
        description,
        prices_sizes: {
          p: priceSizeP,
          m: priceSizeM,
          g: priceSizeG,
        },
        photo_url: photoURL,
        photo_path: reference.fullPath,
      })
      .then(() => navigation.navigate('home'))
      .catch(() => {
        setIsLoading(false);
          
        Alert.alert('Cadastro', 'Nao foi possível cadastrar a pizza.')
      });
  }

  function handleDeletePizza() {
    firestore()
      .collection('pizzas')
      .doc(id)
      .delete()
      .then(() => {
        storage()
          .ref(photoPath)
          .delete()
          .then(() => navigation.navigate('home'));
      });
  }

  useEffect(() => {
    if (id) {
      firestore()
        .collection('pizzas')
        .doc(id)
        .get()
        .then(response => {
          const product = response.data() as PizzaResponse;

          setPhotoPath(product.photo_path);
          setImage(product.photo_url);
          setName(product.name);
          setDescription(product.description);
          setPriceSizeP(product.prices_sizes.p);
          setPriceSizeM(product.prices_sizes.m);
          setPriceSizeG(product.prices_sizes.g);
        })
    }
  }, [id]);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Content>
        <Header>
          <GoBackButton />

          <Title>Cadastrar</Title>

          {
            id ? 
              <DeleteButton onPress={handleDeletePizza}>
                <DeleteButtonLabel>Deletar</DeleteButtonLabel>
              </DeleteButton> 
              : <PlaceholderView />
          }
        </Header>

        <Upload>
          <Photo uri={image} />

          <PickImageButton 
            type="secondary"
            title="Carregar" 
            onPress={handleImagePicker}
          />
        </Upload>

        <Form>
          <InputGroup>
            <Label>Nome</Label>   

            <Input
              value={name}
              onChangeText={setName}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>  
            
              <MaxCharacters>0 de 60 caracteres</MaxCharacters>
            </InputGroupHeader>

            <Input 
              value={description}
              multiline
              maxLength={60}
              style={{ height: 80 }}
              onChangeText={setDescription}
            />
          </InputGroup>

          <InputGroup>
            <Label>Tamanho e preços</Label>

            <InputPrice 
              size="P" 
              value={priceSizeP}
              onChangeText={setPriceSizeP}
            />
            
            <InputPrice 
              size="M" 
              value={priceSizeM}
              onChangeText={setPriceSizeM}
            />
            
            <InputPrice 
              size="G" 
              value={priceSizeG}
              onChangeText={setPriceSizeG}
            />
          </InputGroup>
        
          {
            !id &&
            <Button 
              title="Cadastrar pizza" 
              isLoading={isLoading} 
              onPress={handleAddPizza}
            />
          }
        </Form>
      </Content>
    </Container>
  );
}
