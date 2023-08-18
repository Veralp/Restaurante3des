import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.fundo}
                source={require('../../../assets/splash.png')}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('EntregasScreen')}>
                <Text style={styles.text}>Entregas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;