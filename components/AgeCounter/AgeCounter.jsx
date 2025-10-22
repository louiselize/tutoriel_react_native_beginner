import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AgeDisplay } from '../AgeDisplay/AgeDisplay';

export function AgeCounter() {
  const [age, setAge] = useState(16);
  function increaseAge() {
    setAge(age + 1);
  }
  return (
    <>
      <TouchableOpacity onPress={increaseAge}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: 'lightblue',
            padding: 10,
            borderRadius: 5,
          }}
        >
          Augmenter âge
        </Text>
      </TouchableOpacity>
      <AgeDisplay age={age} />
    </>
  );
}
