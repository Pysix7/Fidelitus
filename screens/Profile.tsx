import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
