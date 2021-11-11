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
  Image,
  Button,
  Alert,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Header} from 'react-native-elements';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Example1</Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: 'https://picsum.photos/200'}}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Text style={styles.baseText}>Email</Text>
            </View>
            <View style={styles.button}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderBottomWidth: 1.0,
    padding: 10,
  },
  header: {
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'purple',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
