import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

const Settings = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <View>
                <Text>Settings</Text>
            </View>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})