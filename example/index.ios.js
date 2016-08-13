/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  Switch,
  Slider,
  TouchableOpacity,
  TextInput
}                           from 'react-native';
import AnalogClock          from './AnalogClock';

const { width, height } = Dimensions.get('window');

const MIN_BORDER_WIDTH = 0;
const MAX_BORDER_WIDTH = 20;

const MIN_BORDER_ALPHA = 0.0;
const MAX_BORDER_ALPHA = 1.0;

const MIN_BRIDGE_DIGIT_OFFSET = -20;
const MAX_BRIDGE_DIGIT_OFFSET = 20;

const MIN_FACE_BACKGROUND_ALPHA = 0.0;
const MAX_FACE_BACKGROUND_ALPHA = 1.0;

const MIN_HOUR_HAND_ALPHA = 0.0;
const MAX_HOUR_HAND_ALPHA = 1.0;

const MIN_HOUR_HAND_WIDTH = 0.0;
const MAX_HOUR_HAND_WIDTH = 20.0;

const MIN_HOUR_HAND_LENGTH = 0.0;
const MAX_HOUR_HAND_LENGTH = 100.0;

const MIN_HOUR_HAND_OFFSIDE_LENGTH = 0.0;
const MAX_HOUR_HAND_OFFSIDE_LENGTH = 100.0;

const MIN_MINUTE_HAND_ALPHA = 0.0;
const MAX_MINUTE_HAND_ALPHA = 1.0;

const MIN_MINUTE_HAND_WIDTH = 0.0;
const MAX_MINUTE_HAND_WIDTH = 20.0;

const MIN_MINUTE_HAND_LENGTH = 0.0;
const MAX_MINUTE_HAND_LENGTH = 100.0;

const MIN_MINUTE_HAND_OFFSIDE_LENGTH = 0.0;
const MAX_MINUTE_HAND_OFFSIDE_LENGTH = 100.0;

const MIN_SECOND_HAND_ALPHA = 0.0;
const MAX_SECOND_HAND_ALPHA = 1.0;

const MIN_SECOND_HAND_WIDTH = 0.0;
const MAX_SECOND_HAND_WIDTH = 20.0;

const MIN_SECOND_HAND_LENGTH = 0.0;
const MAX_SECOND_HAND_LENGTH = 100.0;

const MIN_SECOND_HAND_OFFSIDE_LENGTH = 0.0;
const MAX_SECOND_HAND_OFFSIDE_LENGTH = 100.0;

const MIN_HUB_ALPHA = 0.0;
const MAX_HUB_ALPHA = 1.0;

const MIN_HUB_RADIUS = 0.0;
const MAX_HUB_RADIUS = 20.0

class AnaogClockDEMO extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      digitColor: '#FFFFFF',
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
      hubRadius: 3
    };
    this.handlesOnStartPress = this.handlesOnStartPress.bind(this);
    this.handlesOnStopPress = this.handlesOnStopPress.bind(this);
    this.handlesOnReloadPress = this.handlesOnReloadPress.bind(this);
  }

  render() {
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
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Analog Clock
        </Text>
        <View style={styles.clockContainer}>
          <View style={styles.clockCommandTopline}>
            <TouchableOpacity
              onPress={this.handlesOnStartPress}
              style={[styles.clockCommandButton, styles.startButton]}>
              <Text style={{color: '#F1F1F1'}}>
                START
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handlesOnReloadPress}
              style={[styles.clockCommandButton, styles.reloadButton]}>
              <Text style={{color: '#F1F1F1'}}>
                RELOAD
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handlesOnStopPress}
              style={[styles.clockCommandButton, styles.stopButton]}>
              <Text style={{color: '#F1F1F1'}}>
                STOP
              </Text>
            </TouchableOpacity>
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
            onTimeChange={
              ({hours, minutes, seconds}) => {
                this.setState({
                  currentHours: hours,
                  currentMinutes: minutes,
                  currentSeconds: seconds
                });
              }
            }
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
            faceBackgroundColor={this.state.faceBackgroundColor}
            faceBackgroundAlpha={this.state.faceBackgroundAlpha}
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
          />
        </View>

        <ScrollView style={styles.commandsPanel}>
          {/* PROPERTIES */}
          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              GENERAL PROPERTIES
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              manual set "hours"
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({hours: parseInt(text, 10)%12})}
              value={this.state.hours + ''}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              manual set "minutes"
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({minutes: parseInt(text, 10)%60})}
              value={this.state.minutes + ''}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              manual set "seconds"
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({seconds: parseInt(text, 10)%60})}
              value={this.state.seconds + ''}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              setTimeViaTouch
            </Text>
            <Switch
              onValueChange={(value) => this.setState({setTimeViaTouch: value})}
              value={this.state.setTimeViaTouch}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              currentTime
            </Text>
            <Switch
              onValueChange={(value) => this.setState({currentTime: value})}
              value={this.state.currentTime}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              realTime
            </Text>
            <Switch
              onValueChange={(value) => this.setState({realTime: value})}
              value={this.state.realTime}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              militaryTime
            </Text>
            <Switch
              onValueChange={(value) => this.setState({militaryTime: value})}
              value={this.state.militaryTime}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              enableShadows
            </Text>
            <Switch
              onValueChange={(value) => this.setState({enableShadows: value})}
              value={this.state.enableShadows}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              enableGraduations
            </Text>
            <Switch
              onValueChange={(value) => this.setState({enableGraduations: value})}
              value={this.state.enableGraduations}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              enableHub
            </Text>
            <Switch
              onValueChange={(value) => this.setState({enableHub: value})}
              value={this.state.enableHub}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              enableDigit
            </Text>
            <Switch
              onValueChange={(value) => this.setState({enableDigit: value})}
              value={this.state.enableDigit}
            />
          </View>

          {/* CLOCK'S FACE CUSTOMIZATION */}
          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              CLOCKS'S FACE CUSTOMIZATION
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              digitOffset ({(digitOffset + '').slice(0, 6)})
            </Text>
            <Text>
              {MIN_BRIDGE_DIGIT_OFFSET}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_BRIDGE_DIGIT_OFFSET}
              maximumValue={MAX_BRIDGE_DIGIT_OFFSET}
              onValueChange={(value) => this.setState({digitOffset: value })}
              value={this.state.digitOffset}
            />
            <Text>
              {MAX_BRIDGE_DIGIT_OFFSET}
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              digitColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({digitColor: text})}
              value={this.state.digitColor}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              borderWidth ({(borderWidth + '').slice(0, 6)})
            </Text>
            <Text>
              {MIN_BORDER_WIDTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_BORDER_WIDTH}
              maximumValue={MAX_BORDER_WIDTH}
              onValueChange={(value) => this.setState({borderWidth: value })}
              value={this.state.borderWidth}
            />
            <Text>
              {MAX_BORDER_WIDTH}
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              borderColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({borderColor: text})}
              value={this.state.borderColor}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              borderAlpha ({(borderAlpha + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_BORDER_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_BORDER_ALPHA}
              maximumValue={MAX_BORDER_ALPHA}
              onValueChange={(value) => this.setState({borderAlpha: value })}
              value={this.state.borderAlpha}
            />
            <Text>
              {MAX_BORDER_ALPHA}
            </Text>
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              faceBackgroundColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({faceBackgroundColor: text})}
              value={this.state.faceBackgroundColor}
            />
          </View>

          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              faceBackgroundAlpha ({(faceBackgroundAlpha + '').slice(0,4)})
            </Text>
            <Text>
              {MIN_FACE_BACKGROUND_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_FACE_BACKGROUND_ALPHA}
              maximumValue={MAX_FACE_BACKGROUND_ALPHA}
              onValueChange={(value) => this.setState({faceBackgroundAlpha: value })}
              value={this.state.faceBackgroundAlpha}
            />
            <Text>
              {MAX_FACE_BACKGROUND_ALPHA}
            </Text>
          </View>

          {/* HOURS HAND CUSTOMIZATION */}
          {/* title */}
          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              HOURS HAND CUSTOMIZATION
            </Text>
          </View>
          {/* hourHandColor */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hourHandColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({hourHandColor: text})}
              value={this.state.hourHandColor}
            />
          </View>
          {/* hourHandAlpha */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hourHandAlpha ({(hourHandAlpha + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_HOUR_HAND_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_HOUR_HAND_ALPHA}
              maximumValue={MAX_HOUR_HAND_ALPHA}
              onValueChange={(value) => this.setState({hourHandAlpha: value })}
              value={this.state.hourHandAlpha}
            />
            <Text>
              {MAX_HOUR_HAND_ALPHA}
            </Text>
          </View>
          {/* hourHandWidth */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hourHandWidth ({(hourHandWidth + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_HOUR_HAND_WIDTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_HOUR_HAND_WIDTH}
              maximumValue={MAX_HOUR_HAND_WIDTH}
              onValueChange={(value) => this.setState({hourHandWidth: value })}
              value={this.state.hourHandWidth}
            />
            <Text>
              {MAX_HOUR_HAND_WIDTH}
            </Text>
          </View>
          {/* hourHandLength */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hourHandLength ({(hourHandLength + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_HOUR_HAND_LENGTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_HOUR_HAND_LENGTH}
              maximumValue={MAX_HOUR_HAND_LENGTH}
              onValueChange={(value) => this.setState({hourHandLength: value })}
              value={this.state.hourHandLength}
            />
            <Text>
              {MAX_HOUR_HAND_LENGTH}
            </Text>
          </View>
          {/* hourHandOffsideLength */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hourHandOffsideLength ({(hourHandOffsideLength + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_HOUR_HAND_OFFSIDE_LENGTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_HOUR_HAND_OFFSIDE_LENGTH}
              maximumValue={MAX_HOUR_HAND_OFFSIDE_LENGTH}
              onValueChange={(value) => this.setState({hourHandOffsideLength: value })}
              value={this.state.hourHandOffsideLength}
            />
            <Text>
              {MAX_HOUR_HAND_OFFSIDE_LENGTH}
            </Text>
          </View>

          {/* MINUTES HAND CUSTOMIZATION */}
          {/* title */}
          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              minutes HAND CUSTOMIZATION
            </Text>
          </View>
          {/* minuteHandColor */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              minuteHandColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({minuteHandColor: text})}
              value={this.state.minuteHandColor}
            />
          </View>
          {/* minuteHandAlpha */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              minuteHandAlpha ({(minuteHandAlpha + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_MINUTE_HAND_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_MINUTE_HAND_ALPHA}
              maximumValue={MAX_MINUTE_HAND_ALPHA}
              onValueChange={(value) => this.setState({minuteHandAlpha: value })}
              value={this.state.minuteHandAlpha}
            />
            <Text>
              {MAX_MINUTE_HAND_ALPHA}
            </Text>
          </View>
          {/* minuteHandWidth */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              minuteHandWidth ({(minuteHandWidth + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_MINUTE_HAND_WIDTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_MINUTE_HAND_WIDTH}
              maximumValue={MAX_MINUTE_HAND_WIDTH}
              onValueChange={(value) => this.setState({minuteHandWidth: value })}
              value={this.state.minuteHandWidth}
            />
            <Text>
              {MAX_MINUTE_HAND_WIDTH}
            </Text>
          </View>
          {/* minuteHandLength */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              minuteHandLength ({(minuteHandLength + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_MINUTE_HAND_LENGTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_MINUTE_HAND_LENGTH}
              maximumValue={MAX_MINUTE_HAND_LENGTH}
              onValueChange={(value) => this.setState({minuteHandLength: value })}
              value={this.state.minuteHandLength}
            />
            <Text>
              {MAX_MINUTE_HAND_LENGTH}
            </Text>
          </View>
          {/* minuteHandOffsideLength */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              minuteHandOffsideLength ({(minuteHandOffsideLength + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_MINUTE_HAND_OFFSIDE_LENGTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_MINUTE_HAND_OFFSIDE_LENGTH}
              maximumValue={MAX_MINUTE_HAND_OFFSIDE_LENGTH}
              onValueChange={(value) => this.setState({minuteHandOffsideLength: value })}
              value={this.state.minuteHandOffsideLength}
            />
            <Text>
              {MAX_MINUTE_HAND_OFFSIDE_LENGTH}
            </Text>
          </View>

          {/* SECONDS HAND CUSTOMIZATION */}
          {/* title */}
          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              SECONDS HAND CUSTOMIZATION
            </Text>
          </View>
          {/* hourHandColor */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              secondHandColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({secondHandColor: text})}
              value={this.state.secondHandColor}
            />
          </View>
          {/* secondHandAlpha */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              secondHandAlpha ({(secondHandAlpha + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_SECOND_HAND_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_SECOND_HAND_ALPHA}
              maximumValue={MAX_SECOND_HAND_ALPHA}
              onValueChange={(value) => this.setState({secondHandAlpha: value })}
              value={this.state.secondHandAlpha}
            />
            <Text>
              {MAX_SECOND_HAND_ALPHA}
            </Text>
          </View>
          {/* secondHandWidth */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              secondHandWidth ({(secondHandWidth + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_SECOND_HAND_WIDTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_SECOND_HAND_WIDTH}
              maximumValue={MAX_SECOND_HAND_WIDTH}
              onValueChange={(value) => this.setState({secondHandWidth: value })}
              value={this.state.secondHandWidth}
            />
            <Text>
              {MAX_SECOND_HAND_WIDTH}
            </Text>
          </View>
          {/* secondHandLength */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              secondHandLength ({(secondHandLength + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_SECOND_HAND_LENGTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_SECOND_HAND_LENGTH}
              maximumValue={MAX_SECOND_HAND_LENGTH}
              onValueChange={(value) => this.setState({secondHandLength: value })}
              value={this.state.secondHandLength}
            />
            <Text>
              {MAX_SECOND_HAND_LENGTH}
            </Text>
          </View>
          {/* secondHandOffsideLength */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              secondHandOffsideLength ({(secondHandOffsideLength + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_SECOND_HAND_OFFSIDE_LENGTH}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_SECOND_HAND_OFFSIDE_LENGTH}
              maximumValue={MAX_SECOND_HAND_OFFSIDE_LENGTH}
              onValueChange={(value) => this.setState({secondHandOffsideLength: value })}
              value={this.state.secondHandOffsideLength}
            />
            <Text>
              {MAX_SECOND_HAND_OFFSIDE_LENGTH}
            </Text>
          </View>

          {/* HUB CUSTOMIZATION */}
          {/* title */}
          <View style={styles.groupCommandTitle}>
            <Text style={styles.groupCommandText}>
              HUB CUSTOMIZATION
            </Text>
          </View>
          {/* hubColor */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hubColor
            </Text>
            <TextInput
              style={[styles.cmdInput, styles.textInput]}
              onChangeText={(text) => this.setState({hubColor: text})}
              value={this.state.hubColor}
            />
          </View>
          {/* hubAlpha */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hubAlpha ({(hubAlpha + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_HUB_ALPHA}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_HUB_ALPHA}
              maximumValue={MAX_HUB_ALPHA}
              onValueChange={(value) => this.setState({hubAlpha: value })}
              value={this.state.hubAlpha}
            />
            <Text>
              {MAX_HUB_ALPHA}
            </Text>
          </View>
          {/* hubRadius */}
          <View style={styles.command}>
            <Text style={styles.cmdInfo}>
              hubRadius ({(hubRadius + '').slice(0, 4)})
            </Text>
            <Text>
              {MIN_HUB_RADIUS}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={MIN_HUB_RADIUS}
              maximumValue={MAX_HUB_RADIUS}
              onValueChange={(value) => this.setState({hubRadius: value })}
              value={this.state.hubRadius}
            />
            <Text>
              {MAX_HUB_RADIUS}
            </Text>
          </View>

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
    // width: width * 0.4
  }
});


AppRegistry.registerComponent(
  'RNAnalogClock',
  () => AnaogClockDEMO
);
