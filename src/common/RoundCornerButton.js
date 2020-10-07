import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AppFont, AppColor } from '../style/AppColor';
import { numberToDp, widthToDp, heightToDp } from '../utils/Responsive';
const RoundCornerButton = ({ title, onButtonTapp }) => {
    return (
        <TouchableOpacity style={styles.buttonContainerStyle} onPress={onButtonTapp}>

            <Text style={styles.titleStyle}>{title}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainerStyle: {
        backgroundColor: AppColor.buttonColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        alignSelf: 'center',
        elevation: 5,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        width: widthToDp('60'),
        marginTop:heightToDp('2')
    },
    buttonStyle: {

        backgroundColor: AppColor.buttonColor,
        width: 0,
        height: 0,
    },
    titleStyle: {
        fontSize: numberToDp(16),
        fontFamily: AppFont.regular,
        color: AppColor.white,
        paddingVertical: numberToDp(12),
        alignSelf: 'center'
    }
})

export  {RoundCornerButton};