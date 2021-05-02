import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const styles =StyleSheet.create(
   {
      container:{
         backgroundColor:"white",
         flex: 1,
         flexDirection:"row",
         justifyContent:"space-around",
         alignItems:"center",
         opacity:80
      },
      container1:{
         backgroundColor:"white",

         flex: 1,
         flexDirection:"column",
         justifyContent:"center",
         alignItems:"center",
      },
      spacesmall: {
         width: 20,
         height: 20,
       },
      spacebig: {
         width: 200,
         height: 200,
       },
      button:{
         backgroundColor:"yellow",
         color:"green"
      },
      box:{
         justifyContent:"space-around",
         alignItems:"center",
         backgroundColor:"blue",
         width:80,
         height:80,
      },
      text:{
         color:"white",

      },
      item: {
         padding: 10,
         fontSize: 18,
         height: 44,
     },
   }
)



const Squares = ()=>{
   return (
      <View style={styles.container}>
         <View style={[styles.box,{backgroundColor:"orange"}]}>
            <Text style={styles.text}>
               1
            </Text>
         </View>
         <View style={[styles.box,{backgroundColor:"green"}]}>
            <Text style={styles.text}>
               2
            </Text>
         </View>
         <View style={styles.box}>
            <Text style={styles.text}>
               3
            </Text>
         </View>
      </View>
   );
};

export default Squares;