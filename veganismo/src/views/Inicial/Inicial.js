import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';



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
                <Image source={require('../assets/vegan_icon.png')} style={estiloInicial.imagem}/>
                <Text style={estiloInicial.titulo}>Veganismo</Text>  
                <Text style={estiloInicial.subtexto}>Seja bem-vindo à sua fonte segura de informações sobre o veganismo.</Text>

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