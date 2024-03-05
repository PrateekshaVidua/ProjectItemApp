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

const FilterForm: React.FC<{ onFilter: (filters: Result) => void }> = ({ onFilter }) => {
  const [Location, setLocation] = useState('');
  const [Kms, setKms] = useState('');
  const [Model, setModel] = useState('');
  const [YearOfManufacture, setYearOfManufacture] = useState('');

  const handleFilter = () => {
    onFilter({Location, Model, Kms, YearOfManufacture  });
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={Location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Model"
        value={Model}
        onChangeText={setModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Kms"
        value={Kms}
        onChangeText={setKms}
      />
      <TextInput
        style={styles.input}
        placeholder="YearOfManufacture"
        value={YearOfManufacture}
        onChangeText={setYearOfManufacture}
      />
      <Button title="Filter" onPress={handleFilter} />
    </View>
  );
};
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
export default FilterForm