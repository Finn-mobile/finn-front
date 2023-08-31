import React from "react";
import {
    View, 
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { Feather } from '@expo/vector-icons';
import HeaderBack from "../HeaderBack";
import { useTranslation } from 'react-i18next';


const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
    
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <HeaderBack />
            <View style={styles.content}>
                <Text style={styles.username}>{t('header.hello')}, {name}!</Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
                    <Feather name="user" size={30} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2C6E49',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    username:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    buttonUser:{
        width: 54,
        height: 54,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },
})