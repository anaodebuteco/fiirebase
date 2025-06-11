import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../../firebaseConfig';

export default function DashboardScreen({ navigation }) {
  const logout = () => {
    auth.signOut()
      .then(() => navigation.replace('Login'))
      .catch(err => alert(err.message));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Dashboard</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}