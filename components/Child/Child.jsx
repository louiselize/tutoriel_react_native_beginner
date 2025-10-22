import { Text, TouchableOpacity } from 'react-native';

export function Child({ onPress }) {
  function onPress_() {
    onPress(' Louise');
  }
  return (
    <>
      <TouchableOpacity onPress={onPress_}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: 'lightgreen',
            padding: 10,
            borderRadius: 5,
          }}
        >
          Dire Hello
        </Text>
      </TouchableOpacity>
    </>
  );
}
