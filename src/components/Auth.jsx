import {Text, TouchableOpacity, View} from "react-native";

function Auth({onAuthenticate}) {
    return (
        <View>
            <TouchableOpacity
                onPress={onAuthenticate}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Auth;
