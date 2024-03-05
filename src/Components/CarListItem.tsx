import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Divider from "./Divider";

interface Car {
  Model:string,
  Color:string,
  YearOfManufacture:string,
  InsuranceVaildUpto:string,
  Kms:string,
  Location:string,
  NoOfOwners:string,
  Transmission:string,
  ExternalFitments:string,
  Photo:string,
  
}

interface CarItemProps {
  car: Car;
  onPress: () => void;
}

const ChatItem: React.FC<CarItemProps> = ({ car, onPress }) => {

  // const onPress = () => {
  //   // Navigate to another screen when item is pressed
  //   navigation.navigate('SchoolDetails',car); // Navigate to 'DetailsScreen' passing chat object as a route parameter
  // };
  return (
    <TouchableOpacity onPress={onPress} testID="chat-item">
      <View>
        <View style={[styles.item]}>
        <Image
          source={{uri:car.Photo}}
           style={{width:200, height:200, resizeMode:'stretch'}}
           
           />
          <View style={[styles.information]}>
            <Text testID="name" style={[styles.name]}>
              {car.Model}
            </Text>
            <Text
              testID="summary"
              style={[styles.summary]}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {car.Color}
            </Text>
          </View>
          <View>
            <Text style={[styles.time]} testID="time">
              {car.YearOfManufacture}
            </Text>
            <Text style={[styles.time]} testID="time">
              {car.InsuranceVaildUpto}
            </Text>
            <Text style={[styles.time]} testID="time">
              {car.Kms}
            </Text>
            <Text style={[styles.time]} testID="time">
              {car.Location}
            </Text>
            <Text style={[styles.time]} testID="time">
              {car.NoOfOwners}
            </Text>
            <Text style={[styles.time]} testID="time">
              {car.ExternalFitments}
            </Text>
            <Text style={[styles.time]} testID="time">
              {car.Transmission}
            </Text>
          
          </View>
        </View>
        <Divider />
      </View>
    </TouchableOpacity>
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

export default ChatItem;
