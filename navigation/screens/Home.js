import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    // Retrieve data from local storage
    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) { 
                return value;
            } else { 
                alert("Could not find item");
            }
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => { 
        alert(getData('1'));
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            
        </View>
    )
}