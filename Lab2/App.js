/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Picker} from '@react-native-picker/picker';
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [selectedMonth, setSelectedMonth] = React.useState();
  const [selectedYear, setSelectedYear] = React.useState();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Image source={require('./images/1.jpeg')} />
          <Text numberOfLines={5}>{text}</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Card Numbe"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Card Holde"
          />
          <View style={styles.row}>
            <Picker
              style={styles.picker}
              selectedValue={selectedMonth}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedMonth(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Picker
              style={styles.picker}
              selectedValue={selectedYear}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedYear(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Card Holde"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  picker: {
    width: 100,
  },
});

export default App;
