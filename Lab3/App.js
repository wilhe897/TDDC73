import * as React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      selectedValue: 'java',
    };
  }

  async getRepos() {
    try {
      const response = await fetch(
        'https://api.github.com/search/repositories?q=language:' +
          this.state.selectedValue +
          '&pushed:>2021-11-23&sort=stars&order=desc&per_page=20',
      );
      const json = await response.json();
      console.log(json);
      this.setState({data: json.items});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  componentDidMount() {
    this.getRepos();
  }

  updateRepos(temp) {
    this.setState({selectedValue: temp, isLoading: true}, function () {
      this.getRepos();
    });
  }
  render() {
    const {data, isLoading, selectedValue} = this.state;
    const selected = 'per_page=1';
    const styles = StyleSheet.create({
      cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        height: 140,
        borderRadius: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-end',
        width: '60%',
        height: 25,
      },
      stars: {
        backgroundColor: 'yellow',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
      },
      forks: {
        backgroundColor: 'green',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
      },
      container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      },
      bottom: {
        height: 50,
        marginBottom: 25,
        elevation: 3,
        backgroundColor: 'white',
      },
      list: {
        marginTop: 30,
      },
    });
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.list}>
            <FlatList
              data={data}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.cardContainer}
                  onPress={() =>
                    this.props.navigation.navigate('Details', {
                      otherParam: item,
                    })
                  }>
                  <Text>{item.name}</Text>
                  <Text>{item.full_name}</Text>
                  <Text>{item.description}</Text>
                  <View style={styles.row}>
                    <View style={styles.stars}>
                      <Text>Stars {item.stargazers_count}</Text>
                    </View>
                    <View style={styles.forks}>
                      <Text>Forks {item.forks}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        <View style={styles.bottom}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              this.updateRepos(itemValue)
            }>
            <Picker.Item label="Java" value="Java" />
            <Picker.Item label="JavaScript" value="JavaScript" />
            <Picker.Item label="TypeScript" value="TypeScript" />
            <Picker.Item label="Go" value="Go" />
            <Picker.Item label="Rust" value="Rust" />
            <Picker.Item label="Swift" value="Swift" />
            <Picker.Item label="Web" value="Web" />
            <Picker.Item label="PHP" value="PHP" />
            <Picker.Item label="CSS" value="CSS" />
            <Picker.Item label="C" value="C" />
            <Picker.Item label="C++" value="C++" />
            <Picker.Item label="C#" value="C#" />
            <Picker.Item label="Python" value="Python" />
            <Picker.Item label="Ruby" value="Ruby" />
          </Picker>
        </View>
      </View>
    );
  }
}

function DetailsScreen({route, navigation}) {
  const {itemId, otherParam} = route.params;
  const styles = StyleSheet.create({
    image: {
      height: 140,
      width: 140,
      borderRadius: 360,
      backgroundColor: 'white',
    },
    owner: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: 200,
    },
    repo: {
      alignItems: 'center',
      backgroundColor: 'white',
      width: '90%',
      borderRadius: 5,
      justifyContent: 'space-evenly',
      flex: 1,
      marginBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },
    Text: {
      textDecorationColor: 'white',
    },
    Container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    button: {marginBottom: 10,},
  });
  return (
    <View style={styles.Container}>
      <View style={styles.owner}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          {otherParam.owner.login}
        </Text>
        <Image
          source={{uri: otherParam.owner.avatar_url}}
          style={styles.image}
        />
      </View>
      <View style={styles.repo}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          Repository name: {otherParam.name}
        </Text>
        <Text style={{textAlign: 'center'}}>{otherParam.description}</Text>
        {otherParam.license === null ? (
          <Text>Has no license</Text>
        ) : (
          <Text>Licens: {otherParam.license.spdx_id}</Text>
        )}

        <Text>Current open issues: {otherParam.open_issues}</Text>
      </View>
      <Button
        style={styles.button}
        title="Tillbaka"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
