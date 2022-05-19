import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-elements';

export const TodoBoard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text h1>Todo</Text>
      <Button onPress={() => navigation.navigate('TodoForm')} title="ToDo登録" />
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
