import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {


  return (
   <SafeAreaView>
    <View style={styles.titleContainer}>
      <Text>Home screen  </Text>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
});
