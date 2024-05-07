import { View, Image } from "react-native";

import Logo from '../../assets/tarefas/Logolista';
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function Topo(){
    return(
        <View>
            <Image source={Logo} style={estilos.imagem} />
            <Text style={estilos.titulo}>Lista de Tarefas</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho:{
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        padding: 25,
    },
    imagem: {
        top: 7,
        width: 45,
        heigth: 45,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        linneHeight: 26,
        marginLeft: 55,
        top: 20,
    }
})