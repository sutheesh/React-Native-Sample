'use strict';

import React, {Component} from 'react';
import {AppRegistry,NavigatorIOS,StyleSheet } from 'react-native';
import DashBoardScreen from './apps/views/DashBoardScreen'
import WelcomeScreen from './apps/views/WelcomeScreen'
import ExStocksRateScreen from './apps/views/ExStocksRateScreen'

class launchView extends Component{
    
    _renderScene(route,navigator){
       var _navigator = navigator
        switch(route.index){
            case "welcomeScreen":
                return <WelcomeScreen navigator={_navigator}/>
            case "dashBoard":
                return <DashBoardScreen navigator={_navigator}/>
            case "exRate":
//                return <ExStocksRateScreen navigator={_navigator} title= {route.title} dataSource = {route.passProps.dataSource} baseCurrency = {route.passProps.baseCurrency}/>
                  return <ExStocksRateScreen navigator={_navigator} title= {route.title} {...route.passProps}/>
                
            case "stocks":
                return <ExStocksRateScreen navigator={_navigator} title= {route.title} dataSource = {route.passProps.dataSource} style={{height:0}}/>
        }
    
    }
    
    render(){
      return(
            <NavigatorIOS
            style={{ flex:1 }}
            initialRoute = {{index:"welcomeScreen",title:'',component:WelcomeScreen,navigationBarHidden:true}}
            renderScene = {this._renderScene}
          />
    
        );
    }

}

AppRegistry.registerComponent('XchangeRT', () => launchView);