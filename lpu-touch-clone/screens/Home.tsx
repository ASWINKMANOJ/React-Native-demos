import { Text, View } from "react-native"
import { StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.mainContainer}>
            <Text>
                Drawer.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})

