'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow-disabled
 */

/*eslint no-shadow: ["error", { "allow": ["hours", "minutes", "seconds", "demoConfigParameters"] }]*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  Slider,
  TouchableOpacity,
  TextInput
}                           from 'react-native';
import AnalogClock          from './AnalogClock';

const ButtonCommand = ({ title, buttonStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.clockCommandButton, buttonStyle]}>
      <Text style={{color: '#F1F1F1'}}>
        { title }
      </Text>
    </TouchableOpacity>
  );
};

const GroupTitle = ({ title }) => {
  return (
    <View style={styles.groupCommandTitle}>
      <Text style={styles.groupCommandText}>
        { title }
      </Text>
    </View>
  );
};

const TextInputCommand = ({ title, value, onChangeText }) => {
  return (
    <View style={styles.command}>
      <Text style={styles.cmdInfo}>
        {title}
      </Text>
      <TextInput
        style={[styles.cmdInput, styles.textInput]}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const SwitchCommand = ({ title, value, onValueChange }) => {
  return (
    <View style={styles.command}>
      <Text style={styles.cmdInfo}>
        {title}
      </Text>
      <Switch
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

const ColorCommand = ({ title, value, onChange, editable }) => {
  return (
    <View style={styles.command}>
      <Text style={styles.cmdInfo}>
        {title}
      </Text>
      <TextInput
        style={[styles.cmdInput, styles.textInput]}
        editable={editable}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const SliderCommand = ({ title, minimumValue, maximumValue, value, onValueChange }) => {
  return (
    <View style={styles.command}>
      <Text style={styles.cmdInfo}>
        {title}
      </Text>
      <Text>
        {minimumValue}
      </Text>
      <Slider
        style={styles.sliders}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        onValueChange={onValueChange}
        value={value}
      />
      <Text>
        {maximumValue}
      </Text>
    </View>
  );
};

class AnalogClockDEMO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demoConfigParameters: demoConfigParameters(),
      currentHours: 0,
      currentMinutes: 0,
      currentSeconds: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      setTimeViaTouch: true,
      currentTime: true,
      realTime: true,
      militaryTime: true,
      enableShadows: true,
      enableGraduations: true,
      enableDigit: true,
      enableHub: true,
      borderWidth: 0,
      borderColor: 'black',
      borderAlpha: 1.0,
      faceBackgroundColor: '#26A65B',
      faceBackgroundAlpha: 1.0,
      digitColor: '#F1F1F1',
      digitOffset: 8.0,
      hourHandColor: '#F1F1F1',
      hourHandAlpha: 1.0,
      hourHandWidth: 4.0,
      hourHandLength: 30.0,
      hourHandOffsideLength: 10.0,
      minuteHandColor: '#F1F1F1',
      minuteHandAlpha: 1.0,
      minuteHandWidth: 3.0,
      minuteHandLength: 55.0,
      minuteHandOffsideLength: 20.0,
      secondHandColor: '#F1F1F1',
      secondHandAlpha: 1.0,
      secondHandWidth: 1.0,
      secondHandLength: 60.0,
      secondHandOffsideLength: 20.0,
      hubColor: '#F1F1F1',
      hubAlpha: 1,
      hubRadius: 3,
      accentGraduationModulo: 5,
      highGraduationWidth: 2.0,
      smallGraduationWidth: 1.0,
      highGraduationLength: 10.0,
      smallGraduationLength: 5.0
    };
    this.handlesOnStartPress = this.handlesOnStartPress.bind(this);
    this.handlesOnStopPress = this.handlesOnStopPress.bind(this);
    this.handlesOnReloadPress = this.handlesOnReloadPress.bind(this);
  }

  render() {
    const { demoConfigParameters } = this.state;
    const { hours, minutes, seconds } = this.state;
    const { currentHours, currentMinutes, currentSeconds } = this.state;
    const { enableShadows, realTime, militaryTime, currentTime, enableDigit, setTimeViaTouch, enableGraduations, enableHub } = this.state;
    const { borderColor, borderWidth, borderAlpha } = this.state;
    const { digitOffset, digitColor } = this.state;
    const { faceBackgroundColor, faceBackgroundAlpha } = this.state;
    const { hourHandColor, hourHandAlpha, hourHandWidth, hourHandLength, hourHandOffsideLength } = this.state;
    const { minuteHandColor, minuteHandAlpha, minuteHandWidth, minuteHandLength, minuteHandOffsideLength } = this.state;
    const { secondHandColor, secondHandAlpha, secondHandWidth, secondHandLength, secondHandOffsideLength } = this.state;
    const { hubColor, hubAlpha, hubRadius } = this.state;
    const { accentGraduationModulo, highGraduationWidth, smallGraduationWidth, highGraduationLength, smallGraduationLength } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Analog Clock
        </Text>
        <View style={styles.clockContainer}>
          <View style={styles.clockCommandTopline}>
            <ButtonCommand
              title={'START'}
              buttonStyle={styles.startButton}
              onPress={this.handlesOnStartPress}
            />
            <ButtonCommand
              title={'RELOAD'}
              buttonStyle={styles.reloadButton}
              onPress={this.handlesOnReloadPress}
            />
            <ButtonCommand
              title={'STOP'}
              buttonStyle={styles.stopButton}
              onPress={this.handlesOnStopPress}
            />
          </View>
          <Text style={styles.currentTime}>
            {currentHours >= 0 ? currentHours : '--'}
            :
            {currentMinutes >= 0 ? currentMinutes : '--'}
            :
            {currentSeconds >= 0 ? currentSeconds : '--'}
          </Text>
          <AnalogClock
            ref={(ref)=>{this.analogClock = ref;}}
            style={styles.clock}
            width={160}
            height={160}
            // PROPERTIES
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            enableShadows={enableShadows}
            realTime={realTime}
            militaryTime={militaryTime}
            currentTime={currentTime}
            enableDigit={enableDigit}
            setTimeViaTouch={setTimeViaTouch}
            enableGraduations={enableGraduations}
            enableHub={enableHub}
            // CLOCK'S FACE CUSTOMIZATION
            borderColor={borderColor}
            borderAlpha={borderAlpha}
            borderWidth={borderWidth}
            digitColor={digitColor}
            digitOffset={digitOffset}
            faceBackgroundColor={faceBackgroundColor}
            faceBackgroundAlpha={faceBackgroundAlpha}
            // HOURS HAND CUSTOMIZATION
            hourHandColor={hourHandColor}
            hourHandAlpha={hourHandAlpha}
            hourHandWidth={hourHandWidth}
            hourHandLength={hourHandLength}
            hourHandOffsideLength={hourHandOffsideLength}
            // MINUTES HAND CUSTOMIZATION
            minuteHandColor={minuteHandColor}
            minuteHandAlpha={minuteHandAlpha}
            minuteHandWidth={minuteHandWidth}
            minuteHandLength={minuteHandLength}
            minuteHandOffsideLength={minuteHandOffsideLength}
            // SECONDS HAND CUSTOMIZATION
            secondHandColor={secondHandColor}
            secondHandAlpha={secondHandAlpha}
            secondHandWidth={secondHandWidth}
            secondHandLength={secondHandLength}
            secondHandOffsideLength={secondHandOffsideLength}
            // HUB CUSTOMIZATION
            hubColor={hubColor}
            hubAlpha={hubAlpha}
            hubRadius={hubRadius}
            // GRADUATIONS CUSTOMIZATION
            accentGraduationModulo={accentGraduationModulo}
            highGraduationWidth={highGraduationWidth}
            smallGraduationWidth={smallGraduationWidth}
            highGraduationLength={highGraduationLength}
            smallGraduationLength={smallGraduationLength}
            // CURRENT TIME CALLBACK
            onTimeChange={
              ({hours, minutes, seconds}) => {
                this.setState({
                  currentHours: hours,
                  currentMinutes: minutes,
                  currentSeconds: seconds
                });
              }
            }
          />
        </View>

        <ScrollView style={styles.commandsPanel}>
          {/* PROPERTIES */}
          <GroupTitle
            title={'GENERAL PROPERTIES'}
          />
          <TextInputCommand
            title={'manual set "hours"'}
            onChangeText={(text) => this.setState({hours: parseInt(text, 10) % 12})}
            value={this.state.hours + ''}
          />
          <TextInputCommand
            title={'manual set "minutes"'}
            onChangeText={(text) => this.setState({minutes: parseInt(text, 10) % 60})}
            value={this.state.minutes + ''}
          />
          <TextInputCommand
            title={'manual set "seconds"'}
            onChangeText={(text) => this.setState({seconds: parseInt(text, 10) % 60})}
            value={this.state.seconds + ''}
          />
          <SwitchCommand
            title={'setTimeViaTouch'}
            value={this.state.setTimeViaTouch}
            onValueChange={(value) => this.setState({setTimeViaTouch: value})}
          />
          <SwitchCommand
            title={'currentTime'}
            value={this.state.currentTime}
            onValueChange={(value) => this.setState({currentTime: value})}
          />
          <SwitchCommand
            title={'realTime'}
            value={this.state.realTime}
            onValueChange={(value) => this.setState({realTime: value})}
          />
          <SwitchCommand
            title={'militaryTime'}
            value={this.state.militaryTime}
            onValueChange={(value) => this.setState({militaryTime: value})}
          />
          <SwitchCommand
            title={'enableShadows'}
            value={this.state.enableShadows}
            onValueChange={(value) => this.setState({enableShadows: value})}
          />
          <SwitchCommand
            title={'enableGraduations'}
            value={this.state.enableGraduations}
            onValueChange={(value) => this.setState({enableGraduations: value})}
          />
          <SwitchCommand
            title={'enableHub'}
            value={this.state.enableHub}
            onValueChange={(value) => this.setState({enableHub: value})}
          />
          <SwitchCommand
            title={'enableDigit'}
            value={this.state.enableDigit}
            onValueChange={(value) => this.setState({enableDigit: value})}
          />
          {/* CLOCK'S FACE CUSTOMIZATION */}
          <GroupTitle
            title={'CLOCKS\'S FACE CUSTOMIZATION'}
          />
          <SliderCommand
            title={`digitOffset (${(digitOffset + '').slice(0, 6)})`}
            minimumValue={demoConfigParameters.MIN_BRIDGE_DIGIT_OFFSET}
            maximumValue={demoConfigParameters.MAX_BRIDGE_DIGIT_OFFSET}
            value={digitOffset}
            onValueChange={(value) => this.setState({digitOffset: value })}
          />
          <ColorCommand
            title={'digitColor (* non editable)'}
            value={digitColor}
            editable={false}
            onChange={(value) => this.setState({digitColor: value})}
          />
          <SliderCommand
            title={`borderWidth (${(borderWidth + '').slice(0, 6)})`}
            minimumValue={demoConfigParameters.MIN_BORDER_WIDTH}
            maximumValue={demoConfigParameters.MAX_BORDER_WIDTH}
            value={borderWidth}
            onValueChange={(value) => this.setState({borderWidth: value })}
          />
          <ColorCommand
            title={'borderColor'}
            value={borderColor}
            onChange={(value) => this.setState({borderColor: value})}
          />
          <SliderCommand
            title={`borderAlpha (${(borderAlpha + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_BORDER_ALPHA}
            maximumValue={demoConfigParameters.MAX_BORDER_ALPHA}
            value={borderAlpha}
            onValueChange={(value) => this.setState({borderAlpha: value })}
          />
          <ColorCommand
            title={'faceBackgroundColor'}
            value={faceBackgroundColor}
            onChange={(value) => this.setState({faceBackgroundColor: value})}
          />
          <SliderCommand
            title={`faceBackgroundAlpha (${(faceBackgroundAlpha + '').slice(0,4)})`}
            minimumValue={demoConfigParameters.MIN_FACE_BACKGROUND_ALPHA}
            maximumValue={demoConfigParameters.MAX_FACE_BACKGROUND_ALPHA}
            value={faceBackgroundAlpha}
            onValueChange={(value) => this.setState({faceBackgroundAlpha: value })}
          />
          {/* HOURS HAND CUSTOMIZATION */}
          <GroupTitle
            title={'HOURS HAND CUSTOMIZATION'}
          />
          {/* hourHandColor */}
          <ColorCommand
            title={'hourHandColor'}
            value={hourHandColor}
            onChange={(value) => this.setState({hourHandColor: value})}
          />
          {/* hourHandAlpha */}
          <SliderCommand
            title={`hourHandAlpha (${(hourHandAlpha + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_HOUR_HAND_ALPHA}
            maximumValue={demoConfigParameters.MAX_HOUR_HAND_ALPHA}
            value={hourHandAlpha}
            onValueChange={(value) => this.setState({hourHandAlpha: value })}
          />
          {/* hourHandWidth */}
          <SliderCommand
            title={`hourHandWidth (${(hourHandWidth + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_HOUR_HAND_WIDTH}
            maximumValue={demoConfigParameters.MAX_HOUR_HAND_WIDTH}
            value={hourHandWidth}
            onValueChange={(value) => this.setState({hourHandWidth: value })}
          />
          {/* hourHandLength */}
          <SliderCommand
            title={`hourHandLength (${(hourHandLength + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_HOUR_HAND_LENGTH}
            maximumValue={demoConfigParameters.MAX_HOUR_HAND_LENGTH}
            value={hourHandLength}
            onValueChange={(value) => this.setState({hourHandLength: value })}
          />
          {/* hourHandOffsideLength */}
          <SliderCommand
            title={`hourHandOffsideLength (${(hourHandOffsideLength + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_HOUR_HAND_OFFSIDE_LENGTH}
            maximumValue={demoConfigParameters.MAX_HOUR_HAND_OFFSIDE_LENGTH}
            value={hourHandOffsideLength}
            onValueChange={(value) => this.setState({hourHandOffsideLength: value })}
          />
          {/* MINUTES HAND CUSTOMIZATION */}
          <GroupTitle
            title={'MINUTES HAND CUSTOMIZATION'}
          />
          {/* minuteHandColor */}
          <ColorCommand
            title={'minuteHandColor'}
            value={minuteHandColor}
            onChange={(value) => this.setState({minuteHandColor: value})}
          />
          {/* minuteHandAlpha */}
          <SliderCommand
            title={`minuteHandAlpha (${(minuteHandAlpha + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_MINUTE_HAND_ALPHA}
            maximumValue={demoConfigParameters.MAX_MINUTE_HAND_ALPHA}
            value={minuteHandAlpha}
            onValueChange={(value) => this.setState({minuteHandAlpha: value })}
          />
          {/* minuteHandWidth */}
          <SliderCommand
            title={`minuteHandWidth (${(minuteHandWidth + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_MINUTE_HAND_WIDTH}
            maximumValue={demoConfigParameters.MAX_MINUTE_HAND_WIDTH}
            value={minuteHandWidth}
            onValueChange={(value) => this.setState({minuteHandWidth: value })}
          />
          {/* minuteHandLength */}
          <SliderCommand
            title={`minuteHandLength (${(minuteHandLength + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_MINUTE_HAND_LENGTH}
            maximumValue={demoConfigParameters.MAX_MINUTE_HAND_LENGTH}
            value={minuteHandLength}
            onValueChange={(value) => this.setState({minuteHandLength: value })}
          />
          {/* minuteHandOffsideLength */}
          <SliderCommand
            title={`minuteHandOffsideLength (${(minuteHandOffsideLength + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_MINUTE_HAND_OFFSIDE_LENGTH}
            maximumValue={demoConfigParameters.MAX_MINUTE_HAND_OFFSIDE_LENGTH}
            value={minuteHandOffsideLength}
            onValueChange={(value) => this.setState({minuteHandOffsideLength: value })}
          />
          {/* SECONDS HAND CUSTOMIZATION */}
          <GroupTitle
            title={'SECONDS HAND CUSTOMIZATION'}
          />
          {/* hourHandColor */}
          <ColorCommand
            title={'secondHandColor'}
            value={secondHandColor}
            onChange={(value) => this.setState({secondHandColor: value})}
          />
          {/* secondHandAlpha */}
          <SliderCommand
            title={`secondHandAlpha (${(secondHandAlpha + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_SECOND_HAND_ALPHA}
            maximumValue={demoConfigParameters.MAX_SECOND_HAND_ALPHA}
            value={secondHandAlpha}
            onValueChange={(value) => this.setState({secondHandAlpha: value })}
          />
          {/* secondHandWidth */}
          <SliderCommand
            title={`secondHandWidth (${(secondHandWidth + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_SECOND_HAND_WIDTH}
            maximumValue={demoConfigParameters.MAX_SECOND_HAND_WIDTH}
            value={secondHandWidth}
            onValueChange={(value) => this.setState({secondHandWidth: value })}
          />
          {/* secondHandLength */}
          <SliderCommand
            title={`secondHandLength (${(secondHandLength + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_SECOND_HAND_LENGTH}
            maximumValue={demoConfigParameters.MAX_SECOND_HAND_LENGTH}
            value={secondHandLength}
            onValueChange={(value) => this.setState({secondHandLength: value })}
          />
          {/* secondHandOffsideLength */}
          <SliderCommand
            title={`secondHandOffsideLength (${(secondHandOffsideLength + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_SECOND_HAND_OFFSIDE_LENGTH}
            maximumValue={demoConfigParameters.MAX_SECOND_HAND_OFFSIDE_LENGTH}
            value={secondHandOffsideLength}
            onValueChange={(value) => this.setState({secondHandOffsideLength: value })}
          />
          {/* HUB CUSTOMIZATION */}
          <GroupTitle
            title={'HUB CUSTOMIZATION'}
          />
          {/* hubColor */}
          <ColorCommand
            title={'hubColor'}
            value={hubColor}
            onChange={(value) => this.setState({hubColor: value})}
          />
          {/* hubAlpha */}
          <SliderCommand
            title={`hubAlpha (${(hubAlpha + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_HUB_ALPHA}
            maximumValue={demoConfigParameters.MAX_HUB_ALPHA}
            value={hubAlpha}
            onValueChange={(value) => this.setState({hubAlpha: value })}
          />
          {/* hubRadius */}
          <SliderCommand
            title={`hubRadius (${(hubRadius + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_HUB_RADIUS}
            maximumValue={demoConfigParameters.MAX_HUB_RADIUS}
            value={hubRadius}
            onValueChange={(value) => this.setState({hubRadius: value })}
          />
          {/* GRADUATIONS CUSTOMIZATION */}
          <GroupTitle
            title={'GRADUATIONS CUSTOMIZATION'}
          />
          {/* accentGraduationModulo */}
          <SliderCommand
            title={`accentGraduationModulo (${(accentGraduationModulo + '')})`}
            minimumValue={demoConfigParameters.MIN_GRADUATION_ACCENT_MODULO}
            maximumValue={demoConfigParameters.MAX_GRADUATION_ACCENT_MODULO}
            value={accentGraduationModulo}
            onValueChange={(value) => this.setState({accentGraduationModulo: value })}
          />
          {/* highGraduationLength */}
          <SliderCommand
            title={`highGraduationLength (${(highGraduationLength + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_HIGH_GRADUATION_LENGTH}
            maximumValue={demoConfigParameters.MAX_HIGH_GRADUATION_LENGTH}
            value={highGraduationLength}
            onValueChange={(value) => this.setState({highGraduationLength: value })}
          />
          {/* smallGraduationLength */}
          <SliderCommand
            title={`smallGraduationLength (${(smallGraduationLength + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_SMALL_GRADUATION_LENGTH}
            maximumValue={demoConfigParameters.MAX_SMALL_GRADUATION_LENGTH}
            value={smallGraduationLength}
            onValueChange={(value) => this.setState({smallGraduationLength: value })}
          />
          {/* highGraduationWidth */}
          <SliderCommand
            title={`highGraduationWidth (${(highGraduationWidth + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_HIGH_GRADUATION_WIDTH}
            maximumValue={demoConfigParameters.MAX_HIGH_GRADUATION_WIDTH}
            value={highGraduationWidth}
            onValueChange={(value) => this.setState({highGraduationWidth: value })}
          />
          {/* smallGraduationWidth */}
          <SliderCommand
            title={`smallGraduationWidth (${(smallGraduationWidth + '').slice(0, 4)})`}
            minimumValue={demoConfigParameters.MIN_SMALL_GRADUATION_WIDTH}
            maximumValue={demoConfigParameters.MAX_SMALL_GRADUATION_WIDTH}
            value={smallGraduationWidth}
            onValueChange={(value) => this.setState({smallGraduationWidth: value })}
          />
        </ScrollView>
      </View>
    );
  }

  handlesOnStartPress(ev) {
    if (this.analogClock) {
      this.analogClock.startRealTimeClock();
    }
  }

  handlesOnStopPress(ev) {
    if (this.analogClock) {
      this.analogClock.stopRealTimeClock();
    }
  }

  handlesOnReloadPress(ev) {
    if (this.analogClock) {
      this.analogClock.reloadRealTimeClock();
    }
  }
}

function demoConfigParameters() {
  return {
    MIN_BORDER_WIDTH: 0,
    MAX_BORDER_WIDTH: 20,
    MIN_BORDER_ALPHA: 0.0,
    MAX_BORDER_ALPHA: 1.0,
    MIN_BRIDGE_DIGIT_OFFSET: -20,
    MAX_BRIDGE_DIGIT_OFFSET: 20,
    MIN_FACE_BACKGROUND_ALPHA: 0.0,
    MAX_FACE_BACKGROUND_ALPHA: 1.0,
    MIN_HOUR_HAND_ALPHA: 0.0,
    MAX_HOUR_HAND_ALPHA: 1.0,
    MIN_HOUR_HAND_WIDTH: 0.0,
    MAX_HOUR_HAND_WIDTH: 20.0,
    MIN_HOUR_HAND_LENGTH: 0.0,
    MAX_HOUR_HAND_LENGTH: 100.0,
    MIN_HOUR_HAND_OFFSIDE_LENGTH: 0.0,
    MAX_HOUR_HAND_OFFSIDE_LENGTH: 100.0,
    MIN_MINUTE_HAND_ALPHA: 0.0,
    MAX_MINUTE_HAND_ALPHA: 1.0,
    MIN_MINUTE_HAND_WIDTH: 0.0,
    MAX_MINUTE_HAND_WIDTH: 20.0,
    MIN_MINUTE_HAND_LENGTH: 0.0,
    MAX_MINUTE_HAND_LENGTH: 100.0,
    MIN_MINUTE_HAND_OFFSIDE_LENGTH: 0.0,
    MAX_MINUTE_HAND_OFFSIDE_LENGTH: 100.0,
    MIN_SECOND_HAND_ALPHA: 0.0,
    MAX_SECOND_HAND_ALPHA: 1.0,
    MIN_SECOND_HAND_WIDTH: 0.0,
    MAX_SECOND_HAND_WIDTH: 20.0,
    MIN_SECOND_HAND_LENGTH: 0.0,
    MAX_SECOND_HAND_LENGTH: 100.0,
    MIN_SECOND_HAND_OFFSIDE_LENGTH: 0.0,
    MAX_SECOND_HAND_OFFSIDE_LENGTH: 100.0,
    MIN_HUB_ALPHA: 0.0,
    MAX_HUB_ALPHA: 1.0,
    MIN_HUB_RADIUS: 0.0,
    MAX_HUB_RADIUS: 20.0,
    MIN_GRADUATION_ACCENT_MODULO: 0,
    MAX_GRADUATION_ACCENT_MODULO: 0,
    MIN_HIGH_GRADUATION_LENGTH: 0,
    MAX_HIGH_GRADUATION_LENGTH: 20.0,
    MIN_SMALL_GRADUATION_LENGTH: 0,
    MAX_SMALL_GRADUATION_LENGTH: 20.0,
    MIN_HIGH_GRADUATION_WIDTH: 0,
    MAX_HIGH_GRADUATION_WIDTH: 20.0,
    MIN_SMALL_GRADUATION_WIDTH: 0,
    MAX_SMALL_GRADUATION_WIDTH: 20.0,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  clockContainer: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  currentTime: {
    fontSize: 16,
    textAlign: 'center'
  },
  clock: {
    // minimum style suggested -->
    height: 140,
    width: 140,
    backgroundColor: 'transparent',
    // <-- minimum style suggested
    marginTop: 15,
    marginBottom: 15,
  },
  clockCommandTopline: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  clockCommandButton: {
    marginLeft: 10,
    marginRight: 10,
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  startButton: {
    backgroundColor: '#1E824C'
  },
  reloadButton: {
    backgroundColor: '#3498DB'
  },
  stopButton: {
    backgroundColor: '#CF000F'
  },
  commandsPanel: {
    backgroundColor: '#FFF'
  },
  groupCommandTitle: {
    marginTop: 15,
    marginLeft: 10
  },
  groupCommandText: {
    fontWeight: '800'
  },
  command: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cmdInfo: {
    flex: 2,
    fontSize: 12,
    fontWeight: '600'
  },
  cmdInput: {
    flex: 1
  },
  textInput: {
    padding: 2,
    height: 30,
    borderColor: '#ECECEC',
    borderWidth: 1
  },
  sliders: {
    flex: 1
  }
});

AppRegistry.registerComponent(
  'RNAnalogClock',
  () => AnalogClockDEMO
);
