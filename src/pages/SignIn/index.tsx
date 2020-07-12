import React from 'react';
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';
import { Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import logoImg from '../../assets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/Feather';

const SignIn: React.FC = () => {

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={'padding'}
        enabled>


          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="senha" />
            <Button onPress={() => { console.log("entrou") }}>Entrar</Button>

            <ForgotPassword onPress={() => { console.log("entrou") }}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>

      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => { console.log("entrou") }}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>

    </>
  );
}

export default SignIn;
