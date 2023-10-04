import { StyleSheet, Text, SafeAreaView, Image, View, TextArea, TextInput, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.topo}>
                    <Image
                        source={require('../assets/logo-cadastrarcategoria.png')}
                    />
                </View>
                
                <View style={styles.containerLabel}>
                    <MaterialIcons name='pencil-plus' size={20} color={'#666'} />
                    <Text style={styles.label}> Observações Categoria </Text>
                </View>

                <View style={styles.containerTextInput}>
                    <TextInput
                        style={styles.inputName}
                        keyboardType='text'
                        maxLength={255}
                    />
                </View>

                <View style={styles.containerLabel}>
                    <MaterialIcons name='book-open' size={20} color={'#666'} />
                    <Text style={styles.label}> Observações Categoria </Text>
                </View>

                <View style={styles.containerTextInput}>
                    <TextInput
                        style={styles.inputObs}
                        keyboardType='e-mail'
                        multiline={true}
                        numberOfLines={10}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.botaoCadastrar}> Cadastrar </Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 26,
    },

    topo: {
        marginTop: 50,
        marginBottom: 60,
        alignItems: 'center',
    },

    containerTextInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 5,
        paddingBottom: 8,
        marginBottom: 35,
    },

    inputName: {
        padding: 10,
    },

    inputObs: {
        padding: 10,
        textAlignVertical: 'top',
    },

    containerLabel: {
        display: 'flex',
        flexDirection: 'row',
    },

    label: {
        marginBottom: 8,
        color: '#333',
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 5,
    },

    botaoCadastrar: {
        padding: 18,
        color: '#fff',
        backgroundColor: '#00b2ff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 5,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
    }
});