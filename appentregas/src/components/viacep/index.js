import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles'

export default function Endereco({ item }) {
    const [endereco, setEndereco] = useState({});
    //Função para consultar o CEP na API viacep
    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${item}/json/`, { method: 'GET' })
            .then(resp => resp.json())
            .then(data => {
                setEndereco(data);
            });
    }, []);
    return (
        <View style={styles.pedido}>
            <Text style={styles.text}>logradouro: {endereco.logradouro}</Text>
            <Text style={styles.text}>Bairro: {endereco.bairro}</Text>
            <Text style={styles.text}>Cidade: {endereco.localidade},UF: {endereco.uf}</Text>
        </View>
    );
}