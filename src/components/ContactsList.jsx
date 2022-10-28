import ListItem from "./ListItem"
import {ScrollView, View, StyleSheet} from "react-native";
import {ContactsContext} from "../contexts/ContactsContext";
import {useContext} from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    }
});


function ContactList() {
    const {contacts} = useContext(ContactsContext);

    return (
        <View style={styles.container}>
            <ScrollView>
                {contacts.map((item) => (
                    <ListItem key={item.id} contact={item}></ListItem>
                ))}
            </ScrollView>
        </View>
    );
}

export default ContactList;
