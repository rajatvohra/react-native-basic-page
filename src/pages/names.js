import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";
import  { styles } from './squares';





const  Names= ()=>{

   const [Data,setData]=useState([]);
   useEffect(()=>{
      fetch("https://randomuser.me/api/?results=100&inc=name")
   .then((response) => response.json())
   .then((response) => setData(response.results))
   .catch((error) => console.log("error", error));
   },[]);

   renderSeparator = () => {
      return (
          <View
              style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "blue",
              }}
          />
      );
  };


   return (
      <View style={styles.container}>
         <FlatList
         data={Data}
         renderItem={({item}) => <Text style={styles.item}   >{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>}
         keyExtractor={(item) => `${item.name.title}+${item.name.first}+${item.name.last}+${Math.random()}`}
         ItemSeparatorComponent={this.renderSeparator}
         />
      </View>
   );
};

export default Names;