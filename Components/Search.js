import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Modal,
    TouchableOpacity} 
    from 'react-native'
import React, {useContext, useState} from 'react'
import { NewsContext } from '../API/Context';
import { Entypo } from "@expo/vector-icons";
import SingleNews from "../Components/SingleNews";


const Search = () => {

    const {
        news: {articles},
    } = useContext(NewsContext);

const [searchResults, setSearchResults] = useState([]);
const [modalVisible, setModalVisible] = useState(false);
const [currentNews, setCurrentNews] = useState();

const handleModal = (n) => {
    setModalVisible(true);
    setCurrentNews(n);
};

const handleSearch = (text) => {
    if (!text) {
        setSearchResults()
        return;
    }

    setSearchResults(articles.filter((query) => query.title.includes(text)));

}

  return (
    <View style = {{width:'100%', position:'relative'}}>
      <TextInput
       style={{...styles.search, 
    
        color:'white'
    }} 
    onChangeText={(text) => handleSearch(text)}
    placeholder="search for news"
    placeholderTextColor={"white"}
        />
        <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map((n) => (
        <TouchableOpacity
        key={n.title}
        activeOpacity={0.7}
        onPress={() => handleModal(n)}
        >
        <Text
          style={{
              ...styles.singleResult,
              backgroundColor:"black",
              color:"white"
          }}
        >
         {n.title}
        </Text>
         
        </TouchableOpacity>
        ))}
           
        </View>
        <Modal animation Type='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
        
        <TouchableOpacity
          onPress= {() => setModalVisible(!modalVisible)}
          style={{ 
              position:"absolute",
              zIndex:2,
              right:0,
              margin:20,
              marginTop:60

        }}
          >
          <Entypo name="circle-with-cross" size={30} color="white" />
        </TouchableOpacity>
        <View style={{height:"70%", transform: [{ scaleY:-1}]}}>
          <SingleNews item={currentNews} />
        </View>
        </Modal>
    </View>
  );
};
const styles= StyleSheet.create ({
    search: {
        backgroundColor: "black",
        paddingVertical:7,
        borderRadius:12,
        fontSize:13,
        marginBottom:15
    },
    searchResults: {
        position: 'absolute',
        zIndex:1,
        top:50
    },
    singleResult: {
        borderRadius:5,
        padding:10,
        margin:0.5,
        shadowColor:"black",
        elevation:5

    }


});

export default Search
