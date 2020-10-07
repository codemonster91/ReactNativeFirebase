import React,{useContext} from 'react';
import { View,Text } from 'react-native';
import BlogContext from './context/BlogContext';

const IndexScreen = ()=>{
    const value = useContext(BlogContext);
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>{'value'}</Text>
        </View>
    );
}

export default IndexScreen;