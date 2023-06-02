import {APP_NAME, APP_URL} from '@env';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* <Text>ENV :{Config.APP_NAME}</Text> */}
      <Text>
        {APP_NAME}
        &nbsp;
        {APP_URL}
      </Text>
      <Text>hello</Text>
      {/* <Text>
        {APP_NAME}
        &nbsp;
        {APP_URL}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
