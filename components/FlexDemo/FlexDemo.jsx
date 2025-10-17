import { View } from 'react-native';
import { style } from './FlexDemo.style';
export function FlexDemo() {
  return (
    <View style={style.container}>
      <View style={style.box1} />
      <View style={style.box2} />
      <View style={style.box3} />
    </View>
  );
}
