import { StyleSheet } from 'react-native';
const estiloInicial = StyleSheet.create ({
  
    titulo: {
        fontFamily: "arapey",
        color: '#35352F',
        textAlign: "center",
        fontSize: 23,
        marginTop: 5,
        marginBottom: 0,
        letterSpacing: 2,
    },
    
    imagem: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 15,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    borda: {
        backgroundColor: '#e6ffe6',
        width: '95%',
        height: '80%',
        borderRadius: 10,
        alignContent: 'center',
    },

    botaoTexto: {
        color: '#181212',
        fontFamily: 'arapey',
        fontSize: 18,
        letterSpacing: 2,
        marginTop: 20,
        marginBottom: 20,
    },

    botaoPrincipal: {
        marginTop: 10,
        marginBottom: 0,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: '#88BE88',
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",

    },

    subtexto: {
        fontFamily: 'arapey',
        fontSize: 15,
        textAlign: 'center',
        color: '#48483E',
        marginBottom: 15,
        marginTop: 20,
    },

    nome: {
        fontFamily: 'arapey',
        fontSize: 15,
        textAlign: 'center',
        color: '#85B385',
        marginTop: 9,
    }

});
export default estiloInicial;