import {Text, StyleSheet, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    button: {
        padding: 20,
        borderWidth: 0.5,
        backgroundColor: '#ffffff'
    },
});

function ListItem({contact}) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => {
                console.log("Press")
            }}>
            <Text style={styles.item} key={contact.id}>{contact.name}</Text>
        </TouchableOpacity>
    );
}

export default ListItem;
