import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pedido: {
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        padding: 10,
        margin: 5,
        width: "100%",
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    textBold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default styles;