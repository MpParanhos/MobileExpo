import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './src/styles/styles';
import api from './src/services/api';
import Routes from './src/routes';

export default function App() {
 
  /*async function consulta(){
      const response = await api.get('produtos');
      console.log(response);
  }*/ /* Função que acessa o banco para receber resposta no console */

  return (
    
    <Routes/>
    
    
    /*<View style={styles.container}>
      <Text style={styles.font}>Menu</Text>
      <TextInput placeholder='Digite o código'
      style={styles.textInput}></TextInput>
      <TouchableOpacity style={styles.button}
        onPress={ ()=>{
          consulta();
        }
        }>
        <Text>Consultar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />    
    </View>*/  /* Botão para consulta ao banco no console */ 

  );
}

