import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import estiloDetalhes from './estiloDetalhes';

function Detalhes({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    
    return (
        <View style={estiloDetalhes.container}>
            <View style={estiloDetalhes.borda}>
                <Text style={estiloDetalhes.titulo}>Detalhes do Veganismo</Text>

                <Text style={estiloDetalhes.texto}>Uma das principais preocupações de quem opta por uma 
                dieta vegetariana ou vegana está no equilíbrio para que o organismo não sinta a falta de
                 nenhum nutriente importante. Os questionamentos sobre a obtenção de proteína são alguns 
                 dos mais comuns.</Text>

                <Text style={estiloDetalhes.texto}>Os alimentos de origem animal são, em sua maioria, 
                ricos em proteína. Mas, isso não significa que eles sejam as únicas opções. Alguns 
                vegetais podem ser até mais eficientes e, quando consumidos em variedade, são melhores 
                ainda.</Text>

                <Text style={estiloDetalhes.nome}>Layra da Silva Fernandes Carvalho</Text> 
                <Text style={estiloDetalhes.creditos}>Todos os direitos reservados.</Text>
            </View>
        </View>
    )
}
    export default Detalhes;