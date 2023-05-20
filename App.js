import {Keyboard, StyleSheet, View, Pressable} from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

export default function App() {
  return (
      <Pressable onPress={() => Keyboard.dismiss()}>
        <View>
          <Title />
          <Main />
        </View>
      </Pressable>
  );
}
