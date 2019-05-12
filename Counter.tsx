import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Counter value: {count}</Text>
      <View style={styles.row}>
        <Button
          title="-"
          onPress={() => setCount(count - 1)}
        />
        <Button
          title="+"
          onPress={() => setCount(count + 1)}
        />
      </View>
    </View>
  );
}

export default Counter;
