import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, _View } from 'react-native';

export default function App() {
  const times = [
    {nome: 'Paysandu', titulos:57, descricao:"É um otimo time" },
    {nome: 'São Paulo', titulos:29, descricao:"É um otimo time" },
    {nome: 'Palmeiras', titulos:54, descricao:"É um time que disputa o Paulistão" },
  ];

  const rendenrizarItem = ({item}) => (
    <View style={estilos.item}>
      <Text style={estilos.titulo}>{item.nome}</Text>
      <Text style={{color:'red', fontSize: 18}}>{item.titulos}</Text>
      <Text style={estilos.info}>{item.descricao}</Text>
    </View>
  ) 

  return (
    <View style={estilo.container}>
      <FlatList
      data={times}//dados que vão preencher a lista
      renderItem={renderizarItem}
      keyExtractor={item => item.nome}
      />      
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item:{
    backgroundColor:'bfc7c8',
    padding: 20,
    marginTop:10,
    marginVertical:8,
    borderRadius:10
  },
  
  titulos:{
    fontSize: 24,
  },

  info:{
    fontSize: 16,
  }


});
