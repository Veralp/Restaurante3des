import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fundo: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
    },
    pedido: {
        backgroundColor: '#AA7700',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        margin: 20,
        width: 350,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    textVal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#520',
    },
    button1: {
        height: 42,
        backgroundColor: '#996600',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    button2: {
        height: 42,
        backgroundColor: '#774400',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    }
});

export default styles;