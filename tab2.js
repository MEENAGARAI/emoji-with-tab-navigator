import React from 'react';
import {Text , View,StyleSheet,TouchableOpacity, }from 'react-native'

export default class Instagram extends React.Component{
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.headingStyle}>Example of React Native Communication</Text>
            
            {/*To make a phone call phonecall(phoneNumber, prompt) */}
            <TouchableOpacity 
              style = {styles.button}
              onPress={() => Communications.phonecall('9699563068', true)}>
                <Text style={styles.text}>
                  Make Phone Call
                </Text>
            </TouchableOpacity>
     
            {/*To send the mail function(to, cc, bcc, subject, body)*/}
            <TouchableOpacity 
              style = {styles.button}
              onPress={() => Communications.email(['meenagarai@gmail.com', 'amitsarkar102@gmail.com'],null,null,'Demo Subject','Demo Content for the mail')}
               >
                <Text style={styles.text}>Send an Email  </Text>
            </TouchableOpacity>
     
            {/*To send the text message function(phoneNumber = null, body = null)*/}
            <TouchableOpacity 
              style = {styles.button}
              onPress={() => Communications.text('0123456789', 'Test Text Here')}>
                <Text style={styles.text}>
                  Send a Text Message
                </Text>
            </TouchableOpacity>
     
            {/*To open a web URL function(address = null)*/}
            <TouchableOpacity 
              style = {styles.button}
              onPress={() => Communications.web('https://aboutreact.com')}>
                <Text style={styles.text}>
                  Open https://aboutreact.com
                </Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
     
    var styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(253,253,253)',
        padding: 16,
      },
      headingStyle: {
        fontSize: 25,
        textAlign: 'center',
        padding: 30,
      },
      button: {
        justifyContent: 'center',
        width : 300,
        backgroundColor:"#307cae",
        marginTop : 20,
      },
      text: {
        fontSize: 18,
        textAlign : 'center',
        padding : 10,
        color : '#ffffff',
      },
    });