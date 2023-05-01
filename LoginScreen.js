import * as React from 'react';
import { TextInput,Text, View, StyleSheet,Button } from 'react-native';


 export default function LoginScreen(props) {

  const [userName, onChangeUN] = React.useState();
  const [Pass, onChangeP] = React.useState();

  const [unt, setUnt] = React.useState('Mohammad');
  const [pt, setPt] = React.useState('12345678');

  const login =()=>{
    {userName==unt&&Pass==pt&& props.navigation.navigate('Home')}

    {userName!=unt||Pass!=pt&& alert('Invild UserName or Password');props.navigation.navigate('login');}
    
  }

  
  return (
    <View style={styles.container}>
    <View style={styles.up}>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:"white",fontSize:50,fontWeight:'bold'}}>
      mango
    </Text>
    <Text style={{color:"lime",fontSize:50,fontWeight:'bold'}}>
      .
    </Text>
    </View>
     <Text style={{color:"white",fontSize:17}}>
      Login into your account
    </Text>
    <View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeUN}
        placeholder="User name"
        value={userName}
      />
    </View>
    <View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeP}
         placeholder="Password"
        value={Pass}
      />
    </View>
    <View style={{width:200}}>
    <Button
        title="Login"
        color="#30C77B"
        borderWidth
        onPress={() => login()}
      />
    </View>
    
    <View>
     
     <Text style={{color:"white",fontSize:15}}>
      Forget Password?
    </Text>
    </View>
    </View>
  
    <View style={styles.do}>
      <View>
    <Text style={{color:"#3EA0B3",fontSize:17}}>
      NOT A MEMBER YET ?
      
    </Text>
    </View>
    <View style={{width:120,borderRadius:500}}>
      <Button
        style={{}}
        title="Sign up"
        color="#3EA0B3"
        borderWidth
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
up:{
flex : 3,
backgroundColor :"#3EA0B3",
justifyContent:"space-around",
alignItems:"center",
padding: 40,
},
do:{
flex : 1,
backgroundColor :"white",
justifyContent:"space-around",
alignItems:"center",
padding: 10,
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"white",
    borderColor :"white",
    color :"black",
    placeholderTextColor:"#AABDB3",
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
    borderBottomRightRadius:4,
    borderBottomLeftRadius:4,
    width:200
  },


});
