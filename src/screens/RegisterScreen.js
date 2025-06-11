import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = async () => {
    console.log('Tentando registrar usuário...');
    if (!email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      console.log('Chamando Firebase...');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuário registrado:', userCredential.user);

      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
    } catch (error) {
      console.log('Erro no registro:', error);
      Alert.alert('Erro ao registrar', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>Criar Conta</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ marginBottom: 20, borderBottomWidth: 1 }}
      />
      <Button title="Registrar" onPress={register} />
      <View style={{ marginTop: 10 }}>
        <Button title="Já tem conta? Faça login" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
