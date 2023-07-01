import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Feed({ navigation }) {
    return (
        <View style={styles.main}>
            <Pressable onPress={() => navigation.goBack()} style={styles.pressable}>
                <Text style={styles.text}>
                    HOME
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressable: {
        padding: 10,
        backgroundColor: '#666',
        borderRadius: 10
    },
    text: {
        fontSize: 40,
        color: 'white',
        letterSpacing: 10,
        fontWeight: '700'
    }
})