import { StyleSheet } from 'react-native';
const estiloDetalhes = StyleSheet.create ({
  
    titulo: {
        fontFamily: "georgia",
        color: '#060606',
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 20,
    },

    texto: {
        fontFamily: "georgia",
        color: '#181212',
        fontSize: 18,
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

});
export default estiloDetalhes;