import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.main}>
            <Pressable onPress={() => navigation.navigate("Feed")} style={styles.pressable}>
                <Text style={styles.text}>
                    FEED
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