import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import estiloDetalhes from './estiloDetalhes';


    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>
                <Text style={estiloDetalhes.titulo}>Detalhes do Veganismo</Text>

                <Text style={estiloDetalhes.texto}>Uma das principais preocupações de quem opta por uma 
                dieta vegetariana ou vegana está no equilíbrio para que o organismo não sinta a falta de
                 nenhum nutriente importante. Os questionamentos sobre a obtenção de proteína são alguns 
                 dos mais comuns.</Text>

                <Text style={estiloDetalhes.texto}>Os alimentos de origem animal são, em sua maioria, 
                ricos em proteína. Mas, isso não significa que eles sejam as únicas opções. Alguns 
                vegetais podem ser até mais eficientes e, quando consumidos em variedade, são melhores 
                ainda.</Text>
            </View>
        </View>
    )
    export default Sobre;