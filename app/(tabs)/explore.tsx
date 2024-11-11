import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabTwoScreen() {
  return (
 
    <SafeAreaView>
        <View>
          <Text>Hola</Text>
        </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
