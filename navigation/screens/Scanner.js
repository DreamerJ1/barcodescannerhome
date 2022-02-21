import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Scanner() {
    // Create permissions and scanning const
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(null);

    // Request permission for camera use
    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Store the data found
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('1', value);
        } catch (e) {
            alert(e);
        }
    }

    // Output what the scanner has scanned
    const handleBarcodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        storeData(data);
    };

    // Permission alerts
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    } else if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // Return this to the screen
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
                style = {StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />}
        </View>
    );
}