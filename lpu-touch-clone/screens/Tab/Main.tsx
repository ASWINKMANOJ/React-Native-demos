import { Dimensions, Text, View } from "react-native"
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Data = [
    { id: "1", time: "09-10 AM", subject: "Practical / G:0 C: INT222 / R: 36-502 / S: K22WD" },
    { id: "2", time: "10-11 AM", subject: "Practical / G:0 C: INT222 / R: 36-502 / S: K22WD" },
    { id: "3", time: "12-01 PM", subject: "Lecture / G:ALL C: CSE408 / R: 36-502 / S: K22WD" },
    { id: "4", time: "01-02 PM", subject: "Tutorial / G:2 PEA305 / R: 33-509 / S: K22WD" }
];

type ItemProps = { time: string, subject: string }


export default function Main() {
    const Height = Dimensions.get('screen').height;
    const Width = Dimensions.get('screen').width;
    const Item = ({ time, subject }: ItemProps) => (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.Box, { borderWidth: 1 }]}>
                <View><Text style={{ color: "#fff", textAlign: 'center', textAlignVertical: 'center', backgroundColor: "#000", height: "40%" }}>{time}</Text></View>
                <View><Text style={{ height: "60%", textAlign: 'center', textAlignVertical: 'center', fontSize: 20 }}>{subject}</Text></View>
            </View>
        </View>
    )
    return (
        <View style={styles.mainContainer}>
            <View style={styles.List}>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => <Item time={item.time} subject={item.subject} />}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <ScrollView>
                <View style={{ height: Height }}>
                    <View style={{ height: "25%", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#333" }}>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                    </View>
                    <View style={{ height: "25%", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#333" }}>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                    </View>
                    <View style={{ height: "25%", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#333" }}>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                    </View>
                    <View style={{ height: "25%", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#333" }}>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                        <View style={{ height: "80%", borderWidth: 1, borderColor: "#fff", width: Width * .25 }}>
                            <Text style={{ textAlign: "center", textAlignVertical: 'center' }}>h</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        textAlign: "center",
        textAlignVertical: "center",
        color: "#fff",
        marginHorizontal: 5,
        borderRadius: 30,
        overflow: "hidden"
    }
})

