import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component{
    constructor(){
        super()
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal',
        }
    }

    getCameraPermissions=async()=>{
        const {status}= await Permissions.askAsync(Permissions.camera);
        this.setState({
            hasCameraPermission: status==='granted',
            buttonState:'clicked',
            scanned:'false'
        })
    }

    render(){
        const hasCameraPermission= this.state.hasCameraPermissions
        const scanned= this.state.scanned 
        const buttonState= this.state.buttonState 

        if(buttonState==='clicked'& hasCameraPermission){
            return(
                <BarCodeScanner
                 onBarcodeScanned={scanned ?undefined: this.handleBarCodeScanned}
                 style={StyleSheet.absoluteFillObject}
                />
            )
        }
        else if(buttonState==='normal'){
         return(
            <View style={styles.container}>
                <Text style={styles.displayText}>
                    {hasCameraPermission===true? this.state.scannedData: 'Request for camera permission'}
                </Text>
                <TouchableOpacity style={styles.scanButton}
                onPress={this.getCameraPermissions}
                >
                    <Text style={styles.buttonText}>Scan barcode</Text>
                </TouchableOpacity>
            </View>
         )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    displayText:{
        fontSize:15,
        textDecorationLine:'underline'
    },
    scanButton:{
        backgroundColor:'#2196F3',
        padding:10,
        margin:10
    },
    buttonText:{
        fontText:20
    }
})