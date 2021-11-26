import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
        <View style={{flex: 1, backgroundColor: '#e6ffe6'}}> 
        <Text style={estiloInicial.titulo}>Veganismo</Text>
        </View>
    )
    }
    export default Inicial;