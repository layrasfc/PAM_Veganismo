import { StyleSheet } from 'react-native';
const estiloInicial = StyleSheet.create ({
  
    titulo: {
        fontFamily: "georgia",
        color: '#060606',
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 20,
    },

    imagem: {
        width: 150,
        resizeMode: 'contain',

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    borda: {
        backgroundColor: '#e6ffe6',
        width: '95%',
        height: '70%',
        borderRadius: 10,
    },

    botaoTexto: {
        color: '#181212',
        fontFamily: 'georgia',
        fontSize: 18,
    },

    botaoPrincipal: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#88BE88',
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
    },

    subtexto: {
        fontFamily: 'georgia',
        fontSize: 15,
        textAlign: 'center',
        color: '#322929',
    },

});
export default estiloInicial;