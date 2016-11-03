'use strict';

import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native';


export default class StatusBar extends Component{

    render(){
        
        return(
            <View style = {[{height:20},this.props.style]}>
            </View>
        
        );
    }

}

//module.exports = Status;