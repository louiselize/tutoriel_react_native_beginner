import { Text } from 'react-native';

export function AgeDisplay({ age }) {
  return (
    <Text
      style={{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
      }}
    >
      Âge: {age}
    </Text>
  );
}
