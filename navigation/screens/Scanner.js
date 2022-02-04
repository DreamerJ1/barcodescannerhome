import * as React from "react";
import {View, Text} from 'react-native';

export default function Scanner() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress = {() => alert('This is the "Scanner" screan')} style = {{ fontSize: 26, fontWeight: 'bold' }}>
                Scanner Screen
            </Text>
        </View>
    )
}