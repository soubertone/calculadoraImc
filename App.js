import {Keyboard, StyleSheet, View, Pressable} from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

export default function App() {
  return (
      <View style={styles.content}>
          <Pressable onPress={() => Keyboard.dismiss()} style={styles.title}>
            <Title />
          </Pressable>
          <Main />
      </View>
  );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fc038c',
    },
    title: {
        height: '30%',
        alignItems: "center",
        justifyContent: "center",
    }
})