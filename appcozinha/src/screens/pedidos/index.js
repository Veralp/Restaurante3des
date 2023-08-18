import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles'
import ItemPedido from '../../components/item';

const PedidosScreen = ({ navigation }) => {

    const [pedidos, setPedidos] = useState([]);
    const uri = 'http://localhost:3000/pedido';
    useEffect(() => {
        fetch(uri + '/cozinha', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setPedidos(data);
            });
    }, []);

    const concluirPedido = (id, clienteId) => {
        const corpo = {
            id: id,
            dataCozinha: new Date(),
        }
        if (clienteId == 1) corpo.dataEntrega = new Date();

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo)
        };
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 202) {
                    navigation.navigate('HomeScreen');
                } else {
                    alert('Erro ao concluir pedido!');
                }
            });
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.fundo}
                source={require('../../../assets/splash.png')}
            />
            <FlatList
                data={pedidos}
                renderItem={({ item }) => (
                    <View style={styles.pedido}>
                        <Text style={styles.text}>Id: {item.id}</Text>
                        <Text style={styles.text}>
                            Data: {item.dataPedido.toString().slice(0, 10) + " "}
                            Hora: {item.dataPedido.toString().slice(11, 16)}
                        </Text>
                        <Text style={styles.text}>Entrega: {item.clienteId == 1 ? "Não" : "Sim"}</Text>
                        <ItemPedido item={item.itens} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => concluirPedido(item.id, item.clienteId)}
                        >
                            <Text style={styles.buttonText}>Concluído</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default PedidosScreen;