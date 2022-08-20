import { SafeAreaView, View, Text, Image, StatusBar, FlatList } from 'react-native';
import React from 'react';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { NFTData } from '../constants';
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailDesc,
  DetailsBid
} from '../Components';

const DetailsHeader = ({data, navigation}) => (
  <View style={{ width: '100%', height:373}}>

  
  </View>

)

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />

      </View>
      

    </SafeAreaView>
  )
}

export default Details;
