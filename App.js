import { Platform, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {Platform.OS === 'ios' ? (
          <Text>Hello sur IOS</Text>
        ) : (
          <Text>Hello sur Android</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
