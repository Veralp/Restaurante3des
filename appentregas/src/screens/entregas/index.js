import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles'
import ItemPedido from '../../components/item';
import Endereco from '../../components/viacep';

const EntregasScreen = ({ navigation }) => {

    const [pedidos, setPedidos] = useState([]);
    //const uri = 'http://localhost:3000/pedido';
    const uri = 'http://172.16.1.162:3000/pedido';

    useEffect(() => {
        fetch(uri + '/entrega', { method: 'GET' })
            .then(resp => resp.json())
            .then(data => {
                setPedidos(data);
            });
    }, []);

    const concluirPedido = (id, clienteId) => {
        const corpo = {
            id: id,
            dataEntrega: new Date()
        }

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
                        <Text style={styles.text}>
                            Hora que saiu da cozinha: {item.dataCozinha.toString().slice(11, 16)}
                        </Text>
                        <Text style={styles.text}>Cliente: {item.cliente.nome}</Text>
                        <Text style={styles.text}>Telefones: {item.cliente.telefones}</Text>
                        <Endereco item={item.cliente.enderecoCep} />
                        <Text style={styles.text}>CEP: {item.cliente.enderecoCep}, Num: {item.cliente.enderecoNumero}, Complemento: {item.cliente.enderecoComplemento}</Text>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={() => navigation.navigate('MapScreen')}>
                            <Text style={styles.text}>Mapas</Text>
                        </TouchableOpacity>
                        <ItemPedido item={item.itens} />
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={() => concluirPedido(item.id, item.clienteId)}
                        >
                            <Text style={styles.buttonText}>Concluir Entrega</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default EntregasScreen;