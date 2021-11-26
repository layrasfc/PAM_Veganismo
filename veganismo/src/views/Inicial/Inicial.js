import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

<Image source={require('../assets/vegan_icon.png')} style={estiloInicial.imagem}/>

function Inicial ({navigation}) {

    const abrirSobre = () => {
        navigation.navigate('Sobre')
    }
    const abrirDetalhes = () => {
        navigation.navigate('Detalhes')
    }

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>
                <Text style={estiloInicial.titulo}>Veganismo</Text>  

                <TouchableOpacity style={estiloInicial.botaoPrincipal}>
                    <Text style={estiloInicial.botaoTexto}>Sobre</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estiloInicial.botaoPrincipal}>
                    <Text style={estiloInicial.botaoTexto}>Detalhes</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
    }
    export default Inicial;