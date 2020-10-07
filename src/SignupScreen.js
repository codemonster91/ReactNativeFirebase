import React,{useContext,useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView } from 'react-native';
import { InputField, RoundCornerButton } from './common';
import { AppColor, AppFont } from './style/AppColor';
import { widthToDp, heightToDp, numberToDp } from './utils/Responsive';
 import { AuthContext } from './auth/AuthProvider';

const SignupScreen = ({navigation}) => {
    const {register} = useContext(AuthContext);
    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.root}>
            <View style={styles.loginView}>
                <Text style={styles.loginText}>{'SIGN IN'}</Text>
                <InputField placeholder='First Name'
                    iconType='user'
                />
                <InputField placeholder='Mobile Number'
                iconType='mobile'
                />
                <InputField placeholder='Email Address'
                    value={userEmail}
                    onTextChange={dataValue => setUserEmail(dataValue)}
                    iconType='mail'
                />
                <InputField placeholder='Password' isSecure={true}
                iconType='lock'
                value={userPassword}
                    onTextChange={dataValue => setUserPassword(dataValue)}
                />

                <RoundCornerButton title='Signup' onButtonTapp={()=>register(userEmail,userPassword)} />
                <View style={styles.signUpView}>
                <TouchableOpacity >
                    <Text style={styles.dontHaveText}>{'Already have account'} <Text style={styles.signup}>Login</Text> </Text>
                </TouchableOpacity>
                </View>
                
            </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: AppColor.white,
    },
    loginView: {
        marginHorizontal: widthToDp('8'),
        marginVertical:heightToDp('8')
    },
    loginText: {
        alignSelf: 'center',
        fontFamily: AppFont.bold,
        fontSize: heightToDp('3'),
        marginVertical: heightToDp('3')
    },
    signUpView:{
        marginTop:heightToDp('1.5')
        ,alignItems:'center'
    },
    dontHaveText: {
        fontFamily: AppFont.medium,
        fontSize: numberToDp(12),
    },
    signup: {
        fontFamily: AppFont.bold,
        fontSize: numberToDp(14),
        color: AppColor.buttonColor
    }
})
export default SignupScreen;