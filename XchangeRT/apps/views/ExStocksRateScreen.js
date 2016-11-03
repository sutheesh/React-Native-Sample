'use strict';

import React,{Component} from 'react'
import {View,Text,StyleSheet,ListView} from 'react-native'
import StatusBar from './statusBar'
    
export default class ExStocksRateScreen extends Component{
    constructor(props){
        super(props);
        this._renderRow.bind(this);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            
            dataSource: ds.cloneWithRows(this.props.dataSource)
        }
    }
    render(){
        return(
        
            <View style={{flex:1}}>
                <Text style={[styles.baseCurrencyView,this.props.style]}>Base Currency:: {this.props.baseCurrency}</Text>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowValue)=>this._renderRow(rowValue) }
                />
            </View>  
                
        );
    }

    _renderRow(rowValue){
        return (<View style={styles.tableBorder}>
            <Text style={styles.detailsText} >{rowValue.currency} : {rowValue.value}</Text>
        </View> )
    }
    
}

const styles = StyleSheet.create({
    
    baseCurrencyView:{
        top:64,
        height:65,
        lineHeight:65,
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'red'
    },
    tableBorder:{
        height:50,
        borderBottomWidth:0.3,
        borderBottomColor:'grey',
        marginLeft:15
    },
    detailsText:{
        flex:1,
        fontSize:14,
        lineHeight:50
    }

});