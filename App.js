/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import moment from 'moment-timezone';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks</Text>;
};
class MyFirstApp extends React.Component {
  render() {
    return <Text>My first React Native app</Text>;
  }
}
const Module = () => {
  return <Text>My modules this semester:</Text>;
};
const SemModules = (props) => {
  return (
    <Text>
      {props.day} - {props.modules}
    </Text>
  );
};
const Recommend = () => {
  return <Text>Recommended Eats @ RP</Text>;
};
class Eats extends React.Component {
  render() {
    return (
      <Text>
        {this.props.name} {'\n'}
        {this.props.location}
      </Text>
    );
  }
}
class Clock extends React.Component {
  render() {
    return <Text>{this.props.name} -</Text>;
  }
}
const WorldClock = (props) => {
  const time = moment().tz(props.name).format('HH:mm Z');
  return <Text>{time}</Text>;
};
const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <Text textBreakStrategy={'simple'} />
              <Module />
              <SemModules day="Monday" modules="C308" />
              <SemModules day="Tuesday" modules="C294" />
              <SemModules day="Friday" modules="C273" />
              <Text textBreakStrategy={'simple'} />
              <Recommend />
              <Eats
                name="Sweet Tooth Waffles"
                location="W6 Level 1,E-canteen"
              />
              <Text textBreakStrategy={'simple'} />
              <Eats name="Crowded Bowl" location="W4/W6 Lawn Canteen" />
              <Text textBreakStrategy={'simple'} />
              <Eats
                name="Western Cuisine @ Koufu"
                location="E1 Level 1,Koufu"
              />
              <Text textBreakStrategy={'simple'} />
              <Eats name="Ayam Penyet" location="W4/W6 Lawn Canteen" />
              <Text textBreakStrategy={'simple'} />
              <Text>World Clock</Text>
              <Clock name="Asia/Singapore" />
              <WorldClock name="Asia/Singapore" />
              <Clock name="Europe/London" />
              <WorldClock name="Europe/London" />
              <Clock name="America/New_York" />
              <WorldClock name="America/New_York" />
              <Clock name="Europe/Oslo" />
              <WorldClock name="Europe/Oslo" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
