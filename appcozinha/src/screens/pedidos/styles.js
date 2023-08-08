import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pedido: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: 300,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        height: 42,
        backgroundColor: '#FFBB00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10,
    },
});

export default styles;