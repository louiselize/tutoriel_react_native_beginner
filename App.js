import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './App.style';
import { Human } from './components/Human/Human';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.helloText}>Hello</Text>
        <Human
          firstName={'John'}
          lastName={'Doe'}
          age={30}
          isMarried={false}
          car={{ brand: 'Toyota', model: 'Corolla', year: 2020 }}
        >
          <Text style={{ color: 'red', fontSize: 18 }}>Je suis un enfant</Text>
        </Human>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
