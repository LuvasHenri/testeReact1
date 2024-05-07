import { FlatList, StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  const times = [
    {nome: 'Corinthians', titulos: 2, descricao: "É um ótimo time!"},
    {nome: 'São Paulo', titulos: 3, descricao: "É um ótimo time!"},
    {nome: 'Palmeiras', titulos: 0, descricao: "Não tem mundial!"}
  ];
 
  const renderizarItem = ({ item }) => (
    <View style={estilos.item}>
      <Text style={estilos.titulo}>{item.nome}</Text>
      <Text style={{color:'red', fontSize: 18}}>{item.titulos}</Text>
      <Text style={estilos.info}>{item.descricao}</Text>
    </View>
  );
 
  return (
    <View style={estilos.container}>
      <FlatList
        data={times}//dados que vão preencher a lista
        renderItem={renderizarItem}
        keyExtractor={item => item.nome}
      />
    </View>
  );
}
 
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   justifyContent: 'center',
   margin: 10,
   marginTop: 35
  },
  item:{
    backgroundColor: '#BFC7C8',
    padding: 20,
    marginTop: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
  },
  info: {
    fontSize: 16,
  }
});