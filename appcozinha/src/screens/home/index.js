import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Página Home</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PedidosScreen')}>
                <Text>Pedidos</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;