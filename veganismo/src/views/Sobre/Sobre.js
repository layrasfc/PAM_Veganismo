import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import estiloSobre from './estiloSobre';

function Sobre({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    
    return (
        <View style={estiloSobre.container}>
            <View style={estiloSobre.borda}>
                <Text style={estiloSobre.titulo}>Sobre o Veganismo</Text>

                <Text style={estiloSobre.texto}>O veganismo é a prática de se abster do uso de produtos de
                origem animal, procurando excluir, na medida do possível e praticável, o uso de qualquer 
                produto de origem animal, seja na alimentação ou no vestuário. </Text>

                <Text style={estiloSobre.nome}>Layra da Silva Fernandes Carvalho</Text> 
                <Text style={estiloSobre.creditos}>Todos os direitos reservados.</Text>
            </View>
        </View>
    )
}
    export default Sobre;