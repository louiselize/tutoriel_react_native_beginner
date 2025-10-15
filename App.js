import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './App.style';
import { Human } from './components/Human/Human';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.helloText}>Hello</Text>
        <Human />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
