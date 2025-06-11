import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigation.replace('Dashboard'))
      .catch(err => Alert.alert('Erro', err.message));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 20, borderBottomWidth: 1 }}
      />
      <Button title="Entrar" onPress={login} />
      <View style={{ marginTop: 10 }}>
        <Button title="Criar Conta" onPress={() => navigation.navigate('Registro')} />
      </View>
    </View>
  );
}