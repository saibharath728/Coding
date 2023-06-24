import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

interface Props {
    navigation: {
        navigate: (screen: string) => void;
    };
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;