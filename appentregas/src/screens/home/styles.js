import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    fundo: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
    },
    button: {
        backgroundColor: '#AA7700',
        padding: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: 'center',
        margin: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
});

export default styles;