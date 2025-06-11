import React from 'react';
import { View, Text } from 'react-native';

export default function Card({ title, content }) {
  return (
    <View style={{
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      marginBottom: 12,
    }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
}