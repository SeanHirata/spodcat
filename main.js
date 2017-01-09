'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
var Sound = require('react-native-sound');

class MainView extends Component {
  constructor() {
    super();
    let s = new Sound('politics.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', s.getDuration());
      }
    });
    this.state = {playing: false, sound: s};
    console.log('here', this.state);

  }

  render() {
    let display = this.state.playing ? 'Pause' : 'Play';
    return <View style={styles.container}>
             <TouchableOpacity onPress={this.playSound}>
               <Text style={styles.button}>{display}</Text>
             </TouchableOpacity>
           </View>;
  }

  playSound = () => {
    var s = this.state.sound;
    if (!this.state.playing) {
      s.play();
      console.log('playing');
    } else {
      s.pause();
      console.log('pausing');
    }

    this.setState({ playing: !this.state.playing });
    console.log(this.state);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
});

export default MainView;