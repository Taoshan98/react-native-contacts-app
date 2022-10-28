import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as LocalAuthentication from 'expo-local-authentication';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState, useContext} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ContactsProvider from "./src/contexts/ContactsContext";
import ContactStack from "./src/stacks/ContactsStack";

const contacts = [
    {id: 1, name: 'John', phone: '111', email: "a@a.it", avatar: "icon.png", favorite: false},
    {id: 2, name: 'Paul', phone: '111', email: "a@a.it", avatar: "icon.png", favorite: false},
    {id: 3, name: 'Ringo', phone: '111', email: "a@a.it", avatar: "icon.png", favorite: false},
    {id: 4, name: 'George', phone: '111', email: "a@a.it", avatar: "icon.png", favorite: false},
];

const Tab = createBottomTabNavigator();

export default function App() {
    // const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    // const [isAuthenticated, setIsAuthenticated] = useState(true);

    // useEffect(() => {
    //     (async () => {
    //         const compatible = await LocalAuthentication.hasHardwareAsync();
    //         setIsBiometricSupported(compatible);
    //     })();
    // }, []);

    // function onAuthenticate() {
    //     const auth = LocalAuthentication.authenticateAsync({
    //         promptMessage: 'Authenticate',
    //         fallbackLabel: 'Enter Password',
    //     });
    //     auth.then(result => {
    //             setIsAuthenticated(result.success);
    //             console.log(result);
    //         }
    //     );
    // }

    return (
        <ContactsProvider value={contacts}>
            <NavigationContainer>
                {/* <Stack.Navigator>
                {isAuthenticated
                    ?
                    <>
                        <Stack.Screen
                            name="Contacts"
                            options={{title: 'Contacts List'}}>
                            {() => <ContactList contacts={contacts}></ContactList>}

                        </Stack.Screen>
                    </>

                    :
                    <Stack.Screen
                        name="Login"
                        options={{title: 'Login'}}>
                        {() => <Auth onAuthenticate={onAuthenticate}/>}
                    </Stack.Screen>
                }
            </Stack.Navigator>*/}

                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#e91e63',
                        labelStyle: {fontSize: 12},
                    }}>
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Contacts',
                            tabBarIcon: ({color, size, focused}) => {
                                let iconName;
                                iconName = focused ? 'people' : 'people-outline';
                                return <Ionicons name={iconName} size={size} color={color}/>;
                            },
                        }}
                        name="Contacts" component={ContactStack}/>
                </Tab.Navigator>

            </NavigationContainer>
        </ContactsProvider>
    );
}



