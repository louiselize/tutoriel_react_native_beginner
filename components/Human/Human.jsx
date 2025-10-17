import { Text } from 'react-native';

export function Human({ firstName, lastName, age, isMarried, car, children }) {
  if (age > 80) {
    return <Text>Je suis trop vieux pour parler de moi</Text>;
  }

  return (
    <>
      <Text>
        Mon prénom est {firstName} et mon nom est {lastName}
        J'ai {age} ans{' '}
      </Text>
      {isMarried && <Text>Je suis marié(e)</Text>}
      <Text> {age < 18 ? 'Je suis mineur' : 'Je suis majeur'}</Text>
      <Text>
        Ma voiture est une {car?.brand} {car?.model} de {car?.year}
      </Text>
      {children}
    </>
  );
}
