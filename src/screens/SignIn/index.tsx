import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useAuth } from '@hooks/auth';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import brandImg from '@assets/brand.png';

import { 
  Brand, 
  Container, 
  Content, 
  ForgotPasswordButton, 
  ForgotPasswordLabel, 
  Title 
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const { isLogging, signIn, forgotPassword } = useAuth();

  function handleSignIn() {
    signIn(email, password);

    setEmail('');
    setPassword('');
  }

  function handleForgotPassword() {
    forgotPassword(email);

    setEmail('');
  }

  return (
    <Container>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImg} />

          <Title>Login</Title>

          <Input
            value={email}
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input
            value={password}
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />
          
          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button 
            title="Entrar" 
            type="secondary"
            isLoading={isLogging} 
            onPress={handleSignIn}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
} 
