import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial () {
    return (
        <View style={estiloInicial.container}>
              
            <View style={estiloInicial.borda}>
                <Image style = {estiloInicial.imagem} source={{uri: 'https://i.imgur.com/8kzPZuE.png'}}/>
                <Text style={estiloInicial.titulo}>VEGANISMO</Text>  
                <Text style={estiloInicial.subtexto}>Seja bem-vindo à sua fonte segura de informações{"\n"}
                sobre o veganismo.</Text>
 
                <TouchableOpacity style={estiloInicial.botaoPrincipal}>
                    <Text style={estiloInicial.botaoTexto}>SOBRE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoPrincipal}>
                    <Text style={estiloInicial.botaoTexto}>DETALHES</Text>
                </TouchableOpacity>
                <View style={{borderBottomWidth: 0.5, borderBottomColor: '#85B385', width: 125,
                 alignSelf: 'center', marginTop: 45,}}/>
                <Text style={estiloInicial.nome}>Layra da Silva Fernandes Carvalho{"\n"}
                Todos os direitos reservados.</Text>
            </View> 
        </View>
    )
    }
    export default Inicial;