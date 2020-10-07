import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AppColor, AppFont } from '../style/AppColor';
import { numberToDp, heightToDp, widthToDp } from '../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';


const InputField = ({ placeholder, isSecure = false, value, onTextChange ,iconType=''}) => {
    const { outterView, inputStyle,iconStyle } = styles;
    return (
        <View style={outterView}>
            <View style={iconStyle}>
                <AntDesign name={iconType} size={22} color={AppColor.black} />
            </View>
            <TextInput style={inputStyle}
                placeholder={placeholder}
                secureTextEntry={isSecure}
                onChangeText={onTextChange}
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    outterView: {
        height: numberToDp(50),
        flexDirection: 'row',
        alignItems:'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: AppColor.lightSilver,
        marginVertical: widthToDp(1.5)
    },
    inputStyle: {
        flex: 1,
        fontFamily: AppFont.regular,
        fontSize: numberToDp(16),
        paddingHorizontal: widthToDp(3)
    },
    iconStyle:{
        marginLeft:widthToDp(3)
    }
});

export { InputField }