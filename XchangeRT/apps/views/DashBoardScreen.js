'use strict';

import React,{Component} from 'react'
import {View,Text,Image,StyleSheet,TouchableHighlight,ActivityIndicator,StatusBar } from 'react-native'
//import StatusBar from './statusBar'
import ExStocksRateScreen from './ExStocksRateScreen'
    
export default class DashBoardScreen extends Component{
   
   constructor(props) {
        super(props);
       this._getExRate = this._getExRate.bind(this);
       this._getStocks = this._getStocks.bind(this);
       this.state={
            loading : false,
           barStyle:'light-content'
       }
    }
    
    render(){
        return(
            <Image source={require('../image/bg.jpg')} style={styles.mainScreen}>
                <StatusBar  barStyle={this.state.barStyle}/>
                <ActivityIndicator color={'white'} style={{position:'relative',top:85}} size={'large'} animating={this.state.loading}/>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight onPress={this._getExRate} style = {styles.borderRadius}>
                        <View style ={[styles.vButton,styles.exRate,styles.borderRadius]}>
                        <Text style = {[styles.textStyle,styles.borderRadius]}> ExRate </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this._getStocks} style = {styles.borderRadius}>
                        <View style ={[styles.stocks,styles.vButton,styles.borderRadius]}>
                        <Text style = {[styles.textStyle,styles.borderRadius]}>Stocks</Text>
                        </View>
                    </TouchableHighlight>
                </View>
          </Image>
        
        );
        
    }

    _getExRate(){

    this.setState({ loading : true });
     fetch('https://openexchangerates.org/api/latest.json?app_id=22d7fcaa257a429db6a77461ab986779')
      .then((response) => response.json())
      .then((responseJson) => {
         const rates = responseJson.rates;
         var data = []
         for( var key in rates){
            
             if (rates.hasOwnProperty(key)) {
                 var val = rates[key];
                 data.push({currency:key,value:val.toFixed(2)});
            }
         
         }
         this.setState({ loading : false });
         this.setState({ barStyle : 'default' });
         this.props.navigator.push({
            component:ExStocksRateScreen,
             title:"Exchange Rate",
             index:"exRate",
             navigationBarHidden:false,
             backButtonTitle :'back',
             passProps:{dataSource : data,baseCurrency:responseJson.base}
         })
         
      })
      .catch((error) => {
        console.error(error);
      });


    }

    _getStocks(){

    this.setState({ loading : true });
      fetch('https://finance.yahoo.com/webservice/v1/symbols/GOOG,NKE,WMT,YHOO,AAPL/quote?format=json&view=detail')
     .then((response) => response.json())
      .then((responseJson) => {
         const rates = responseJson.list.resources;
         var data = []
         for(var key in rates){
            
             if (rates.hasOwnProperty(key)) {
                 var val = rates[key].resource.fields;
                 data.push({currency:val.issuer_name+"    "+val.symbol,value:(1*val.price).toFixed(2)+"("+(1*val.chg_percent).toFixed(2) +"%)"});
            }
         
         }
         this.setState({ loading : false });
         this.setState({ barStyle : 'default' });
         this.props.navigator.push({
            component:ExStocksRateScreen,
             title:"Stocks Rate",
             index:"stocks",
             navigationBarHidden:false,
             backButtonTitle :'back',
             passProps:{dataSource : data,baseCurrency:responseJson.base,style:{height:0}}
         })
         
      })
      .catch((error) => {
        console.error(error);
      });


    }

}


const styles = StyleSheet.create({
    
    
 mainScreen:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
     width:null,
     height:null
  },
  buttonContainer:{
      flexDirection :'row',
      justifyContent :'space-around',   
      alignItems:'stretch'
  },
  vButton:{
    width: 150,
    height: 150,
      
  },
  stocks:{
    backgroundColor: 'rgba(0, 161, 255, 0.78)'

  },
  exRate:{
    backgroundColor: 'rgba(255, 0, 0, 0.48);'
  },
  borderRadius:{
    borderRadius: 75
  },
  textStyle:{
    textAlign:'center',
    lineHeight:150,
    color:'white',
    fontSize: 16,
    fontWeight:'bold',
      backgroundColor:'transparent'
  }

});