'use strict';

import React,{Component} from 'react';
import {View,Image,NativeModules,StyleSheet,Text,TouchableHighlight} from 'react-native';
import DashBoardScreen from './DashBoardScreen'
export default class WelcomeScreen extends Component {
    
    constructor(props){
        super(props)
        this.authenticate = this.authenticate.bind(this);
        this._onPressButton = this._onPressButton.bind(this);
    }
    
    render(){
        NativeModules.TouchIDManager.authenticateTID('Please Authenticate..',this.authenticate)
        return(
            <Image source={require('../image/loginBg.jpg')} style={styles.containerScreen}>
                <View style={styles.mainScreen}>
                    <Text style={styles.touchIdText}>Login With Touch ID </Text>
                    <TouchableHighlight onPress={this._onPressButton} style={styles.touchId}>
                        <Image source={require('../image/Touch_ID.png')} style={{ width:50,height:50}}/>
                    </TouchableHighlight>    
                </View>
            </Image>
        
        );
    }

    _onPressButton(){
        NativeModules.TouchIDManager.authenticateTID('Please Authenticate..',this.authenticate)
        
    }
    authenticate(object){
        if(object.status == "success"){
            this.props.navigator.resetTo({
             component:DashBoardScreen,
            // title:"Stocks Rate",
             index:"dashBoard",
             navigationBarHidden:true,
             backButtonTitle :'back'
            });
        }
    }

}

const styles = StyleSheet.create({ 
    containerScreen:{
        flex:1,
        flexDirection:'column',
        width:null,
        height:null,
    },
    mainScreen:{
    
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.42)',
        justifyContent:'center',
        alignItems:'center'
        
    
    },
    touchId:{
        width:50,
        height:50,
        backgroundColor:'rgba(255, 0, 0, 0.72)',
        borderRadius:25
        
    },
    touchIdText:{
        color: 'gold',
        height:200,
        fontSize:20,
        textAlign:'center',
//     lineHeight:300
   }
})