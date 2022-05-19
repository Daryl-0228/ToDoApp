import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

export const Welcome: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text h1>Welcome</Text>
      <View>
        <Button onPress={() => navigation.navigate('Instructions')} title="登録する" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
