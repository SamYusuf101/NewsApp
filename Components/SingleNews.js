import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    Image, 
    ImageBackground,
    TouchableOpacity,
    Linking} 
     from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").width;

const SingleNews = ({ item, index }) => {
    

    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
                transform: [{ scaleY: -2 }],
            }}>

            <Image
                source={{ uri: item.urlToImage }}
                style={{ height: "55%", resizeMode: "cover", width: windowWidth }}

            />
            <View style={{ ...styles.description,backgroundColor: '#282C35' }}>
                <Text style=
                    {{ ...styles.title, color: 'white' }}>{item.title}
                </Text>
                <Text style={{ ...styles.content, color: 'white' , }}>{item.description}
                </Text>
                <Text style=
                    {{ color: 'white' }}>
                    Short by
                <Text>
                    {item.author ?? "unknown"}
                </Text>   
                </Text>
                <ImageBackground
                blurRadius={30}
                style={styles.footer}
                source={{uri: item.urlToImage}}
                >
                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                <Text style={{fontSize:15, color:"white"}}>
                '{item?.content?.slice(0, 45)}...'
                </Text>
                <Text style={{fontSize:18, color:"white", fontWeight:'bold'}}>
                Read More.
                </Text>
                
                </TouchableOpacity>
                
                </ImageBackground>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,

    },
    content: {
        fontSize: 20,
        paddingBottom: 10
    },
    footer:{
        height:80,
        width:windowWidth,
        position:'absolute',
        bottom:0,
        backgroundColor:'#d7be69',
        justifyContent:'center',
        paddingHorizontal:20

    },
    description: {
        padding:16,
        
        
    }
})
export default SingleNews;
