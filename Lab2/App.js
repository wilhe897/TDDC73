/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
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
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Picker} from '@react-native-picker/picker';
const App: () => Node = () => {
  const [cardHolder, onChangecardHolder] = React.useState(null);
  const [cardNumber, onChangeCardNumber] = React.useState(null);
  const [cvv, onChangecvv] = React.useState(null);
  const [selectedMonth, setSelectedMonth] = React.useState();
  const [selectedYear, setSelectedYear] = React.useState();
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.background}>
          <Image source={require('./images/1.jpeg')} />
          <Text numberOfLines={5}>{cardHolder}</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCardNumber}
            value={cardNumber}
            placeholder="Card Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangecardHolder}
            value={cardHolder}
            placeholder="Card Holder"
          />
          <View style={styles.row}>
            <Picker
              style={styles.picker}
              selectedValue={selectedMonth}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedMonth(itemValue)
              }>
              <Picker.Item label="Januari" value="1" />
              <Picker.Item label="Februari" value="2" />
              <Picker.Item label="Mars" value="3" />
              <Picker.Item label="April" value="4" />
              <Picker.Item label="Maj" value="5" />
              <Picker.Item label="Juni" value="6" />
              <Picker.Item label="Juli" value="7" />
              <Picker.Item label="Augusti" value="8" />
              <Picker.Item label="September" value="9" />
              <Picker.Item label="Oktober" value="10" />
              <Picker.Item label="November" value="11" />
              <Picker.Item label="December" value="12" />
            </Picker>
            <Picker
              style={styles.picker}
              selectedValue={selectedYear}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedYear(itemValue)
              }>
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2022" value="2022" />
              <Picker.Item label="2023" value="2023" />
              <Picker.Item label="2024" value="2024" />
              <Picker.Item label="2025" value="2025" />
              <Picker.Item label="2026" value="2026" />
              <Picker.Item label="2027" value="2027" />
              <Picker.Item label="2028" value="2028" />
              <Picker.Item label="2029" value="2029" />
              <Picker.Item label="2030" value="2030" />
            </Picker>
            <TextInput
              style={styles.cvvinput}
              onChangeText={onChangecvv}
              value={cvv}
              secureTextEntry={true}
              placeholder="CVV"
              maxLength={4}
              keyboardType="numeric"
            />
          </View>
          <Button
            title="Submit"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.lighter,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cvvinput: {
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
