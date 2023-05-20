import {Keyboard, StyleSheet, View, Pressable} from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

export default function App() {
  return (
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.content}>
        <View>
          <Title />
          <Main />
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fc038c',
    }
})