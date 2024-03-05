import React,{useState, useEffect} from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import Divider from "../Components/Divider";




import { useDispatch, useSelector } from 'react-redux';
import { editItem,  initializeDemoData, loadItems} from '../Store/CarSlice';
import { RootState } from '../Store/store';

import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import SchoolListItem from '../Components/CarListItem'
import CarModel from '../Components/CarModel';
import { RouteProp, useRoute } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import FilterForm from "../Components/FilterForm";
import ResultList from "../Components/ResultList";
import { ScrollView } from "react-native-gesture-handler";

type RootStackParamList = {
  CarList: { Location: string;
      Kms: string;
    Model: string;
    YearOfManufacture: string;};
  };

  interface Result {
    Location: string;
    Kms: string;
  Model: string;
  YearOfManufacture: string;
  }

// Extract the route prop type using RouteProp
type MyTextRouteProp = RouteProp<RootStackParamList, 'CarList'>;
   
const CarItem: React.FC<RootStackParamList> = () => {
  const route = useRoute<MyTextRouteProp>();
  const [newItemText, setNewItemText] = useState('');
  const [editData, setEditData] = useState({});
  const [editItemText, setEditItemText] = useState('');
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [filePath, setFilePath] = useState('');
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const items = useSelector((state: RootState) => state.items.items);
  const [filteredData, setFilteredData] = useState(items);
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
  const handleFilter = ({ Location, Model, Kms, YearOfManufacture }: Result) => {
    const filteredResults = items.filter(result => {
      let condition = true;
      if (Location && result.Location !== Location) {
        condition = false;
      }
      if (Kms && result.Kms !== Kms) {
        condition = false;
      }
      if (Model && result.Model !== Model) {
        condition = false;
      }
      if (YearOfManufacture && result.YearOfManufacture !== YearOfManufacture) {
        condition = false;
      }
      return condition;
    });
    setFilteredData(filteredResults);
  };
 

  useEffect(() => {
    // Load items from AsyncStorage when the app starts
    dispatch(loadItems());
    // // Initialize demo data
    dispatch(initializeDemoData());
  }, [dispatch]);
   
  return (
    <View  testID="chat-item">
       <FilterForm onFilter={handleFilter} />
       <ScrollView style={{marginBottom:100}}>
       <ResultList results={filteredData} />
       </ScrollView>

    </View>
  );
};


const styles = StyleSheet.create({
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  shadowTL: {
    shadowColor: "#fff",
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 64,
    width: "100%",
    height: "100%",
  },
  shadowBR: {
    shadowColor: "#b4d0fc",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 64,
    width: "100%",
    height: "100%",
  },
  information: {
    flex: 1,
    flexDirection: "column",
    marginRight: 20,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  summary: {
    fontSize: 12,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 68,
    borderWidth: 4,
    borderColor: "#dde8fa",
  },
  time: {
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default CarItem;
