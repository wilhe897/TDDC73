/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {getImage} from './images';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
  Text,
  Button,
  Animated,
  View,
  ImageBackground,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Picker} from '@react-native-picker/picker';
const App: () => Node = () => {
  const [cardIcon, onChangecardIcon] = React.useState({path: getImage('visa')});
  const [cardHolder, onChangecardHolder] = React.useState(null);
  const [cardNumber, onChangeCardNumber] = React.useState(null);
  const [cardNumberDisplay, onChangeCardNumberDisplay] = React.useState(
    '#### #### #### ####',
  );
  const [cvv, onChangecvv] = React.useState(null);
  const [cvvMaxLength, onChangecvvMaxLength] = React.useState(3);
  const [selectedMonth, setSelectedMonth] = React.useState('11');
  const [selectedYear, setSelectedYear] = React.useState('2021');
  const [cardcvvDisplay, onChangecvvNumberDisplay] = React.useState(null);
  const updatecvvNumber = text => {
    onChangecvv(text);
    var temp = '****';
    var temp = temp.substring(0, text.length);
    onChangecvvNumberDisplay(temp);
  };
  const updateCardNumber = text => {
    var temp = '#### #### #### ####';
    var temp = temp.substring(text.length, 19);
    if (text > cardNumber) {
      if (text.length === 4) {
        text += ' ';
      } else if (text.length === 9) {
        text += ' ';
      } else if (text.length === 14) {
        text += ' ';
      }
    }
    onChangeCardNumberDisplay(text + temp);
    onChangeCardNumber(text);
    if (text === '4') {
      onChangecvvMaxLength(3);
      onChangecardIcon({path: getImage('visa')});
    } else if (text === '35') {
      onChangecvvMaxLength(3);
      onChangecardIcon({path: getImage('jcb')});
    } else if (text === '34' || text === '37') {
      onChangecvvMaxLength(4);
      onChangecardIcon({path: getImage('amex')});
    } else if (text === '5') {
      onChangecvvMaxLength(3);
      onChangecardIcon({path: getImage('mastercard')});
    } else if (text === '6') {
      onChangecvvMaxLength(3);
      onChangecardIcon({path: getImage('discover')});
    } else if (text === '30' || text === '36' || text === '38') {
      onChangecvvMaxLength(3);
      onChangecardIcon({path: getImage('dinersclub')});
    } else if (text === '65' || text === '9792') {
      onChangecvvMaxLength(3);
      onChangecardIcon({path: getImage('troy')});
    } else if (text === '62') {
      onChangecvvMaxLength(3);
      onChangecardIcon({path: getImage('unionpay')});
    }
  };

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const rotatefront = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const rotateback = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.cardContainer}>
          <Animated.View style={[styles.frontCard]}>
            <ImageBackground
              source={require('./images/24.jpeg')}
              style={styles.image}>
              <View style={styles.row}>
                <Image
                  style={styles.chip}
                  source={require('./images/chip.png')}
                />
                <View style={styles.cardIcon}>
                  <Image style={styles.cardIconImage} source={cardIcon.path} />
                </View>
              </View>
              <Text numberOfLines={5} style={styles.cardNumbertext}>
                {cardNumberDisplay}
              </Text>
              <View style={styles.row3}>
                <View style={styles.column}>
                  <Text numberOfLines={5} style={styles.text}>
                    Card holder
                  </Text>
                  <Text numberOfLines={1} style={styles.textBold}>
                    {cardHolder}
                  </Text>
                </View>
                <View style={styles.column}>
                  <Text numberOfLines={5} style={styles.text}>
                    Expires
                  </Text>
                  <Text numberOfLines={5} style={styles.textBold}>
                    {selectedMonth}/{selectedYear}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Animated.View>
          <Animated.View
            style={[
              styles.backCard,
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
              },
            ]}>
            <ImageBackground
              source={require('./images/24.jpeg')}
              style={styles.image}>
              <View style={styles.blackBar} />
              <Text numberOfLines={5} style={styles.textCVV}>
                CVV
              </Text>
              <View style={styles.cvvBar}>
                <Text numberOfLines={5} style={styles.cvvCode}>
                  {cardcvvDisplay}
                </Text>
              </View>
              <View style={styles.cardBackIcon}>
                <Image
                  style={styles.cardBackIconImage}
                  source={cardIcon.path}
                />
              </View>
            </ImageBackground>
          </Animated.View>
        </View>
        <View style={styles.Cardform}>
          <TextInput
            style={styles.input}
            onChangeText={text => updateCardNumber(text)}
            value={cardNumber}
            placeholder="Card Number"
            keyboardType="numeric"
            maxLength={19}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangecardHolder}
            value={cardHolder}
            placeholder="Card Holder"
          />
          <View style={styles.row}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                height: 45,
                justifyContent: 'center',
              }}>
              <Picker
                style={styles.picker}
                selectedValue={selectedMonth}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedMonth(itemValue)
                }>
                <Picker.Item label="Januari" value="01" />
                <Picker.Item label="Februari" value="02" />
                <Picker.Item label="Mars" value="03" />
                <Picker.Item label="April" value="04" />
                <Picker.Item label="Maj" value="05" />
                <Picker.Item label="Juni" value="06" />
                <Picker.Item label="Juli" value="07" />
                <Picker.Item label="Augusti" value="08" />
                <Picker.Item label="September" value="09" />
                <Picker.Item label="Oktober" value="10" />
                <Picker.Item label="November" value="11" />
                <Picker.Item label="December" value="12" />
              </Picker>
            </View>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                justifyContent: 'center',
                height: 45,
              }}>
              <Picker
                style={styles.picker}
                selectedValue={selectedYear}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedYear(itemValue)
                }>
                <Picker.Item label="2021" value="21" />
                <Picker.Item label="2022" value="22" />
                <Picker.Item label="2023" value="23" />
                <Picker.Item label="2024" value="24" />
                <Picker.Item label="2025" value="25" />
                <Picker.Item label="2026" value="26" />
                <Picker.Item label="2027" value="27" />
                <Picker.Item label="2028" value="28" />
                <Picker.Item label="2029" value="29" />
                <Picker.Item label="2030" value="30" />
              </Picker>
            </View>
            <TextInput
              style={styles.cvvinput}
              onChangeText={updatecvvNumber}
              value={cvv}
              secureTextEntry={true}
              onFocus={rotatefront}
              onEndEditing={rotateback}
              placeholder="CVV"
              maxLength={cvvMaxLength}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.button}>
            <Button title="Submit" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Cardform: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  frontCard: {
    flex: 1,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  backCard: {
    height: 220,
    position: 'absolute',
  },
  chip: {
    marginTop: 20,
    width: 60,
    height: 45,
  },
  cardIcon: {
    marginTop: 20,
    alignItems: 'flex-start',
    height: 45,
    resizeMode: 'contain',
  },
  cardIconImage: {
    alignSelf: 'flex-end',
    height: '100%',
    maxWidth: '50%',
    resizeMode: 'contain',
  },
  image: {
    flex: 1,
    width: 350,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  cardNumbertext: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    fontSize: 24,
    color: Colors.white,
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  cvvinput: {
    width: 100,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: '90%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 10,
    width: '90%',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.white,
  },
  textBold: {
    width: 250,
    fontSize: 20,
    color: Colors.white,
  },
  picker: {
    width: 120,
    borderWidth: 1,
  },
  blackBar: {
    opacity: 0.8,
    marginTop: 35,
    height: 40,
    width: '100%',
    backgroundColor: Colors.black,
  },
  textCVV: {
    paddingRight: 5,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    marginRight: 20,
    alignSelf: 'flex-end',
    color: Colors.white,
  },
  cvvBar: {
    justifyContent: 'center',
    height: 40,
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 3,
  },
  cvvCode: {
    paddingRight: 7,
    alignSelf: 'flex-end',
    color: Colors.black,
  },
  cardBackIcon: {
    marginTop: 20,
    alignItems: 'flex-start',
    height: 45,
    resizeMode: 'contain',
    width: '100%',
    marginRight: 10,
  },
  cardBackIconImage: {
    opacity: 0.8,
    alignSelf: 'flex-end',
    height: '100%',
    maxWidth: '30%',
    resizeMode: 'contain',
  },
});

export default App;
