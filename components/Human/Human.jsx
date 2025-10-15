import { Text } from 'react-native';

export function Human({ firstName, lastName, age, isMarried, car, children }) {
  return (
    <>
      <Text>
        Mon prénom est {firstName} et mon nom est {lastName}
        J'ai {age} ans et je suis {isMarried ? 'marié' : 'célibataire'}
      </Text>
      <Text>
        Ma voiture est une {car?.brand} {car?.model} de {car?.year}
      </Text>
      {children}
    </>
  );
}
