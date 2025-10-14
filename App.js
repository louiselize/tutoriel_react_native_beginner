import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Human } from './components/Human/Human';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello</Text>
        <Human />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
