import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Judul';


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Judul title="BIODATA"/>
        <Text style={styles.instructions}>Nama  : Dhanissa Nafi'ul Lathifa</Text>
        <Text style={styles.instructions}>No.Absen  : 12</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
         <Image source={require('./nissaaaa.png')} style={{width:150, height:200}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
