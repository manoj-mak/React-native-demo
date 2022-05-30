import { useNavigation } from '@react-navigation/core'
import React,{isValidElement,useState} from'react';
import { StyleSheet, Text, TouchableOpacity,Switch,Image, View, Animated } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {

  const opacity = useState(new Animated.Value(1))[0]

  function fadeInImg() {
    Animated.timing(opacity,{
      toValue:1,
      duration:600,
      useNativeDriver:true
    }).start()

  }

  function fadeOutImg() {
    Animated.timing(opacity,{
      toValue:0,
      duration:600,
      useNativeDriver:true
    }).start()
    
  }

  //toggle part
  const[isEnabled,setIsEnabled]=useState(true);
  const[text,setText]=useState('Press the toggle to switch off insurance ');

  const toggleSwitch=()=>{
    if(isEnabled){
      fadeOutImg();
      setText('Insurance Coverage is OFF');
      
   }else{
      fadeInImg();
      setText('Insurance Coverage is ON');
      
   }
    setIsEnabled(previousState=>!previousState)
 }


  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
          
          <Animated.Image
      source={require('../assets/images/ins.png')}  style={[ {width: 200, height: 200,opacity}  ]} />

          <Image source={require('../assets/images/car.png')}  style={{width: 140, height: 140, }}/> 
     
     

          <Text style={{fontWeight:'bold',margin:40,fontSize:20,}}>{text}</Text>

          <Switch
           style={{ transform: [{ scaleX: 2.0 }, { scaleY: 2.0 }] }} 
           trackColor={{false:'grey',true:'green'}}
           thumbColor={isEnabled?'#f4f3f4':'#f4f3f4'}
           ios_backgroundColor='grey'
           onValueChange={toggleSwitch}
           value={isEnabled}
        
           />









      {/*<Text>Email: {auth.currentUser?.email}</Text>*/}
      
      <TouchableOpacity
        
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#96b3f2',
    elevation: 3,
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    elevation: 6,
    
    
  },

  
  buttonText: {
    color: 'white',
    
    fontWeight: '700',
    fontSize: 16,
  },
})
