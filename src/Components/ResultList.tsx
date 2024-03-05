import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
interface Result {
    Location: string;
    Kms: string;
  Model: string;
  YearOfManufacture: string;
  }
  
  interface Props {
    jsonData: Result[];
  }

  import CarListItem from './CarListItem'
const ResultList: React.FC<{ results: Result[] }> = ({ results }) => {
    return (
      <View style={styles.resultsContainer}>
        {results.map((result, index) => (
          <View key={index} style={styles.resultItem}>
           <CarListItem
             car={result}
           />
          </View>
        ))}
      </View>
    );
  };

  export default ResultList

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    formContainer: {
      width: '100%',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    resultsContainer: {
      width: '100%',
    },
    resultItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });