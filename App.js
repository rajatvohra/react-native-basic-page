import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles =StyleSheet.create(
   {
      container:{
         backgroundColor:"white",
         flex: 1,
         flexDirection:"row",
         justifyContent:"space-around",
         alignItems:"center",
         opacity:80
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
      }
   }
)

export default ()=>{
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