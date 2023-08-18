import { View, Text, FlatList } from 'react-native';
import styles from './styles'

export default function ItemPedido({ item }) {
    return (
        <FlatList
            data={item}
            renderItem={({ item }) => (
                <View style={styles.pedido}>
                    <Text style={styles.text}>Quantidade: {item.quantidade}</Text>
                    <Text style={styles.textBold}>Produto: {item.cardapio.produto}</Text>
                    <Text style={styles.text}>Descrição: {item.cardapio.descricao}</Text>
                </View>
            )}
        />
    )
}