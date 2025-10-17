import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center', // center with flexDirection
    alignItems: 'center', // center opposite to flexDirection
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
