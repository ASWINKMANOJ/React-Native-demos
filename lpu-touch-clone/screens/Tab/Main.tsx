import { Text, View } from "react-native"
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";

const Data = [{
    id: "1",
    title: "1"
}, {
    id: "2",
    title: "2"
},
{
    id: "3",
    title: "3"
}];

type ItemProps = { title: string }

export default function Main() {
    const Item = ({ title }: ItemProps) => (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.Box}>
                <Text style={{ color: "#fff", textAlign: 'center', textAlignVertical: 'center' }}>{title}</Text>
            </View>
        </View>
    )
    return (
        <View style={styles.mainContainer}>
            <View style={styles.List}>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                    horizontal

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    List: {
        height: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Box: {
        height: 170,
        width: 300,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#000",
        color: "#fff",
        marginHorizontal: 5,
        borderRadius: 30,
    }
})

