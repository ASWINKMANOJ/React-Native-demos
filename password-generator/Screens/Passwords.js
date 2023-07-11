import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Passwords = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <View>
                <Text>Passwords</Text>
            </View>
        </SafeAreaView>
    )
}

export default Passwords

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})