import { FlatList, View, StyleSheet, Text} from "react-native";

import tarefas from "../../src/mocks/Tarefas";

export default function Lista(){
    
    const renderizar = ({item}) =>{
    <View style={estilo.item}>
        <View style={estilo.TituloImagem}>
                <Image source={item.imagem } style={estilo.imagem}/>
                <Text style={estilo.titulo}>{item.imagem}</Text>
            </View>
            <Text style={estilo.info}>{item.descricao}</Text>
        </View>
    }
    return(
        <View style={estilo.container}>
            <FlatList
                data={tarefas}
                renderItem={renderizar}
                heyExtractor={item => item.id}
            />
        </View>
    )
};


const estilo = StyleSheet.create(
    {
    container:{
        flex: 1,
        backgroundColor: '#f3f3',
        justifyContent: 'center',
        margin:10,
        marginTop:15,
        
    },

    item:{
        backgroundColor:'#9bf2ea',
        padding:20,
        marginTop:5,
        marginVertical:8,
        borderRadiu:10,

    },

    titulo:{
        FontSize:24,
        marginLeft:10
    },

    tituloimagem:{
        flexDirection: 'row'
    },

    info:{
      flexDirection: 'column',
      FontSize:16,
    },

    imagem:{
        width:40,
        height:40,
    }
}

);