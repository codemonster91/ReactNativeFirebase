import React,{useContext,useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView } from 'react-native';
import { AppColor, AppFont } from './style/AppColor';
import { widthToDp, heightToDp, numberToDp } from './utils/Responsive';
import { AuthContext } from './auth/AuthProvider';
import { RoundCornerButton } from './common';

const LoginScreen = ({navigation}) => {
    const {user, logout} = useContext(AuthContext);
    
    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const navigateToSignUp = ()=>{
        navigation.navigate('SignupScreen')
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.root}>
            <View style={styles.loginView}>
                
                <Text style={{alignSelf:'center',fontSize:numberToDp(14),fontFamily:AppFont.medium}}>Welcome userId : {user.uid}</Text>
                <RoundCornerButton title='Logout' onButtonTapp={()=> logout()} />
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
   
})
export default LoginScreen;