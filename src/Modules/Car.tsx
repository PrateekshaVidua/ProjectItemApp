import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity,   Platform,
  PermissionsAndroid, Alert} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editItem,  initializeDemoData, loadItems} from '../Store/CarSlice';
import { RootState } from '../Store/store';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import CarListItem from '../Components/CarListItem'
import CarModel from '../Components/CarModel';
import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,

} from 'react-native-image-picker';
interface Response {
  headers: Headers;
  ok: boolean;
  status: number;
  statusText: string;
  // Other properties...
}
interface ImagePickerResponse {
  uri: string;
  width: number;
  height: number;
  // Other properties specific to ImagePickerResponse...
}

const App = () => {
  const [newItemText, setNewItemText] = useState('');
  const [editData, setEditData] = useState({});
  const [editItemText, setEditItemText] = useState('');
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [filePath, setFilePath] = useState('');
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const items = useSelector((state: RootState) => state.items.items);
  const navigation = useNavigation();

  const handleEditItem = (data:any) => {
    dispatch(editItem({ id: data.id!,    Model:data.Model,
    Color:data.Color,
    YearOfManufacture:data.YearOfManufacture,
    InsuranceVaildUpto:data.InsuranceVaildUpto,
    Kms:data.Kms,
    Location:data.Location,
    NoOfOwners:data.NoOfOwners,
    Transmission:data.Transmission,
    ExternalFitments:data.ExternalFitments,
    Photo:data.Photo,
    }));
    setEditItemId(null);
    setEditItemText('');
  };

 

  useEffect(() => {
    // Load items from AsyncStorage when the app starts
    dispatch(loadItems());
    // // Initialize demo data
    dispatch(initializeDemoData());
  }, [dispatch]);
  const chooseFile = (type: 'photo' | 'video'): void => {
    console.log("bjh");
    
    const options: CameraOptions = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log("response==>", response);
      
      handleResponse(response);
    });
  };

  const handleResponse = (response: Response): void => {
    interface ImageData {
      uri: string;
  
    }
    if (response.didCancel) {
      
      Alert.alert('User cancelled camera picker', '', [
        {
          text: 'Cancel',
          onPress: () => setModalVisible(true),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>  setModalVisible(true)},
      ]);
     
      return;
    } else if (response.errorCode === 'camera_unavailable') {
      Alert.alert('Camera not available on device','', [
        {
          text: 'Cancel',
          onPress: () => setModalVisible(true),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>  setModalVisible(true)},
      ]);
   
      return;
    } else if (response.errorCode === 'permission') {
      Alert.alert('Permission not satisfied','', [
        {
          text: 'Cancel',
          onPress: () => setModalVisible(true),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>  setModalVisible(true)},
      ]);
   
    
      return;
    } else if (response.errorCode === 'others') {
      Alert.alert(response.errorMessage,
        '', [
          {
            text: 'Cancel',
            onPress: () => setModalVisible(true),
            style: 'cancel',
          },
          {text: 'OK', onPress: () =>  setModalVisible(true)},
        ]);

      return;
    }

    const fetchedData: ImageData[] = response.assets.map(item => {
      setFilePath(item.uri);
    })
    setModalVisible(true)
    
      

   
  };


  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Filter Item" onPress={()=>{
navigation.navigate('CarFilter')
      }} />
      <FlatList
        style={{ marginTop: 20 }}
        data={items}
        renderItem={({ item }) => (<CarListItem
            car={item}
            onPress={()=>{
              setEditData(item)
              setModalVisible(true);
             
             
            
            }}
           
        />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {editItemId && (
        <View>
          <TextInput
            style={{ marginTop: 20, marginBottom: 10, borderBottomWidth: 1 }}
            value={editItemText}
            onChangeText={setEditItemText}
          />
          <Button title="Save" onPress={handleEditItem} />
        </View>
      )}
    {modalVisible&&( <CarModel
       modalVisible={modalVisible}
       setModalVisible={()=>{
        setModalVisible(!modalVisible);
       }}
       car={editData}
       Photo={filePath == ''?editData.Photo:filePath}

       onPress={()=>{
       
        setModalVisible(false);
        chooseFile('photo')
       }}
       PressableonPress={(e)=>{
        handleEditItem(e)
        console.log("setModalVisible",e);
        setFilePath('');
        setModalVisible(false);
       }}
      />)} 
    </View>
  );
};

export default App;