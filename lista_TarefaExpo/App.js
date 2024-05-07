import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Topo from './src/componentes/Topo';
import Lista from './src/componentes/Lista';

export default function App() {
  return (
    <>
      <Topo />
      <View>
        <Lista />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
