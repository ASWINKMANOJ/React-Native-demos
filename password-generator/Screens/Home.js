import { StyleSheet, View, Cli } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from 'expo-clipboard';
import { useState } from "react";


export default function Home() {
    const [pass, setPass] = useState('');

    function handlePress() {
        let i;
        let password = [];
        let ind;
        let temp;
        const cL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const lL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const Num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const sp = ['!', '@', '#', '$', '%', '&', '*', '-'];

        for (i = 0; i < 2; i++) {
            ind = Math.floor(Math.random() * 26);
            password.push(cL[ind]);
        }

        for (i = 0; i < 3; i++) {
            ind = Math.floor(Math.random() * 26);
            password.push(lL[ind]);
        }

        for (i = 0; i < 2; i++) {
            ind = Math.floor(Math.random() * 10);
            password.push(Num[ind]);
        }

        for (i = 0; i < 1; i++) {
            ind = Math.floor(Math.random() * 8);
            password.push(sp[ind]);
        }

        for (i = 0; i < 8; i++) {
            ind = Math.floor(Math.random() * 8);
            temp = password[i];
            password[i] = password[ind];
            password[ind] = temp;
        }
        let final = '';
        for (i = 0; i < 8; i++) {
            final += password[i];
        }
        setPass(final);
    }

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(pass || "no input");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <TextInput
                    mode="outlined"
                    label="Username"
                    placeholder="Username..."
                    style={styles.input}
                />
                <TextInput
                    mode="outlined"
                    label="Email"
                    placeholder="Hello@example.com"
                    keyBoardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    placeholder="Password..."
                    style={styles.input}
                    value={pass}
                    onChangeText={setPass}
                    right={<TextInput.Icon icon='content-copy' onPress={copyToClipboard} />}
                />
                <Button
                    mode="contained"
                    onPress={() => handlePress()}
                >
                    Generate</Button>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    input: {
        width: 300,
        marginBottom: 20
    }
})