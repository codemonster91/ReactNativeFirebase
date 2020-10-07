import React,{useContext,useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView } from 'react-native';
import { InputField, RoundCornerButton } from './common';
import { AppColor, AppFont } from './style/AppColor';
import { widthToDp, heightToDp, numberToDp } from './utils/Responsive';
import { AuthContext } from './auth/AuthProvider';

const LoginScreen = ({navigation}) => {
    const {login} = useContext(AuthContext);
    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const navigateToSignUp = ()=>{
        navigation.navigate('SignupScreen')
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.root}>
            <View style={styles.loginView}>
                <Text style={styles.loginText}>{'SIGN IN'}</Text>
                <InputField placeholder='Email' 
                value={userEmail}
                onTextChange={dataValue => setUserEmail(dataValue)}
                iconType='mail'
                />
                <InputField placeholder='Password' isSecure={true} 
                iconType='lock'
                value={userPassword}
                    onTextChange={dataValue => setUserPassword(dataValue)}
                />

                <RoundCornerButton title='Login' onButtonTapp={()=> login(userEmail,userPassword)} />
                <View style={styles.signUpView}>
                <TouchableOpacity onPress={navigateToSignUp}>
                    <Text style={styles.dontHaveText}>{'Don\'t have account'} <Text style={styles.signup}>Signup</Text> </Text>
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
export default LoginScreen;