import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel: number;
}

const Hello = (props: Props) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = useState(props.enthusiasmLevel);

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () => setEnthusiasmLevel(enthusiasmLevel - 1);

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Hello {props.name}</Text>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="-"
            onPress={() => onDecrement()}
            accessibilityLabel="decrement"
            color="red"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="+"
            onPress={() => onIncrement()}
            accessibilityLabel="increment"
            color="blue"
          />
        </View>
      </View>
    </View>
  );
};

export default Hello;

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});
