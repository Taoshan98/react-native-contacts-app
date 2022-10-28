import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ContactsList from "../components/ContactsList";

const Stack = createNativeStackNavigator();

function ContactStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Contacts" component={ContactsList}/>
            {/*<Stack.Screen name="Profile" component={Profile} />*/}
        </Stack.Navigator>
    );
}

export default ContactStack;
