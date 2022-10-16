7import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import {AntDesign, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import { NewsContext } from '../API/Context';

const TopNavigation = ({ index, setIndex }) => {
  const {fetchNews, darkTheme, setDarkTheme} = useContext(NewsContext);

  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? "#282C35" : "white" }}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}
        onPres={() => setDarkTheme(!darkTheme)}
        >
          <Text style={{...styles.text, color:'lightgrey'}}>
          <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#82EEFD"
            /></Text>
        </TouchableOpacity> 
       ) : (
         <TouchableOpacity 
         style={styles.left}
         onPress={()=> setIndex(index === 0 ? 1 : 0)}
         >
         <SimpleLineIcons name="arrow-left" size={15} color='#82EEFD'/>
         <Text style={{...styles.text, color:'lightgrey'}}>Discorver</Text>
         </TouchableOpacity>  
      )}

      <Text style={{...styles.center, color:'white'}}>
      {index ? "All News" : "Discorver"}
      </Text>
      {index ? (
        <TouchableOpacity
        style={styles.right}
        onPress={() => fetchNews("general")}
        >
        <Text style ={styles.text}>
        <AntDesign name="reload1" size={22} color="#82EEFD"/>
        </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
         style={styles.left}
         onPress={()=> setIndex(index === 0 ? 1 : 0)}
         >
         <Text style={{...styles.text, color:'white'}}>All News</Text>
         <SimpleLineIcons name="arrow-right" size={15} color='#82EEFD'/>
         </TouchableOpacity>
      )}
 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center',
    borderBottomColor:'black',
    borderBottomWidth:0.5
  },
  left: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:80,
    alignItems:'center',

  },
  text: {
    fontSize:16
  },
  right:{
    width:80,
    alignItems:"flex-end"
  },
  center:{
    paddingBottom:6,
    borderBottomColor:'#82EEFD',
    borderBottomWidth:5,
    borderRadius:10,
    fontSize:16,
    fontWeight:"700"
  }

});

export default TopNavigation;
