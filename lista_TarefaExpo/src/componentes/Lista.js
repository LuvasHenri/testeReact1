import { FlatList, View } from "react-native";

import tarefas from "../../mocks/Tarefas.js";

export default function Lista(){
    
    const renderizar = ({item}) =>{
    <View>
        <View>
                <Image source={item.imagem}/>
                <Text>{item.imagem}</Text>
            </View>
            <Text>{item.descricao}</Text>
        </View>
    }
    return(
        <View>
            <FlatList
                data={tarefas}
                renderItem={renderizar}
                heyExtractor={item => item.id}
            />
        </View>
    )
};