import {Keyboard, StyleSheet, View, Pressable} from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

export default function App() {
  return (
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
        <View>
          <Title />
          <Main />
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
