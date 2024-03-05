// CarModel.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Modal, Button , Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CarData {
    id:any;
    Model: string;
    Color: string;
    YearOfManufacture: string;
    InsuranceVaildUpto: string;
    Kms: string;
    Location: string;
    NoOfOwners: string;
    Transmission: string;
    ExternalFitments: string;
    Photo: string;

  }
  

  interface CarModelProps {
    car: CarData;
    modalVisible:boolean;
    Photo:string;
    data:object;
    onPress: () => void;

    setModalVisible: () => void;
    PressableonPress:(data: object) => void;
  }
  
  const CarModel: React.FC<CarModelProps> = ({ car , onPress, modalVisible, setModalVisible, PressableonPress, Photo,}) => {
    const [model, setModel] = useState(car.Model);
    const [color, setColor] = useState(car.Color);
    const [year, setYear] = useState(car.YearOfManufacture);
    const [Insurance, setInsurance] = useState(car.InsuranceVaildUpto);
    const [Kms, setKms] = useState(car.Kms);
    const [Location, setLocation] = useState(car.Location);
    const [NoOfOwners, setNoOfOwners] = useState(car.NoOfOwners);
    const [Transmission, setTransmission] = useState(car.Transmission);
    const [ExternalFitments, setExternalFitments] = useState(car.ExternalFitments);
    // Add more state variables for other fields as needed
  console.log("model==>",Photo);
  
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={setModalVisible}>

      <View style={styles.container}>
        
      <View style={styles.modalView}>
        <Pressable onPress={onPress}>
        <Image source={{ uri: Photo}} style={styles.image} resizeMode='stretch'/>
        </Pressable>
       
        <TextInput
          style={styles.input}
          value={model}
          onChangeText={text => setModel(text)}
          placeholder="Model"
        />
        <TextInput
          style={styles.input}
          value={color}
          onChangeText={text => setColor(text)}
          placeholder="Color"
        />
        <TextInput
          style={styles.input}
          value={year}
          onChangeText={text => setYear(text)}
          placeholder="Year of Manufacture"
        />

<TextInput
          style={styles.input}
          value={Insurance}
          onChangeText={text => setInsurance(text)}
          placeholder="Insurance Valid Upto"
        />


<TextInput
          style={styles.input}
          value={Kms}
          onChangeText={text => setKms(text)}
          placeholder="Kms"
        />

<TextInput
          style={styles.input}
          value={Location}
          onChangeText={text => setLocation(text)}
          placeholder="Location"
        />

<TextInput
          style={styles.input}
          value={NoOfOwners}
          onChangeText={text => setNoOfOwners(text)}
          placeholder="No Of Owners"
        />

<TextInput
          style={styles.input}
          value={Transmission}
    
          onChangeText={text => setTransmission(text)}
          placeholder="Transmission"
        />

<TextInput
          style={styles.input}
          value={ExternalFitments}
          onChangeText={text => setExternalFitments(text)}
          placeholder="External Fitments"
        />

<Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={()=>{
            const data = {
                id:car.id,
                Model: model,
                Color:color ,
                YearOfManufacture: year,
                InsuranceVaildUpto: Insurance,
                Kms: Kms,
                Location: Location,
                NoOfOwners: NoOfOwners,
                Transmission: Transmission,
                ExternalFitments: ExternalFitments,
                Photo:Photo
            }
            PressableonPress(data)
        } }
      >
        <Text style={styles.textStyle}>Submit</Text>
      </Pressable>
        {/* Add more TextInput components for other fields */}
      </View>
     
      </View>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',

       justifyContent: 'center',

    marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
       
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    image: {
      width: 100,
      height: 100,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      color:'#000',
      
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
  });
  
  export default CarModel;