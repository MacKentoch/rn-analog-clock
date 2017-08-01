// @flow weak

'use strict';

import React , {
  Component,
  PropTypes
}                           from 'react';
import {
  requireNativeComponent,
  NativeModules,
  processColor
}                           from 'react-native';

const RNAnalogClock = requireNativeComponent(
  'RNAnalogClock',
  AnalogClock,
  {
    nativeOnly: {
      onClockTick: true
    }
  }
);

const AnalogClockManager = NativeModules.RNAnalogClockManager;

class AnalogClock extends Component {
  constructor(props) {
    super(props);
    this.handlesOnClockTick = this.handlesOnClockTick.bind(this);
  }

  render() {
    const {
      // PROPERTIES
      hours,
      minutes,
      seconds,
      enableShadows,
      realTime,
      militaryTime,
      currentTime,
      enableDigit,
      setTimeViaTouch,
      enableGraduations,
      enableHub,
      // CLOCK'S FACE CUSTOMIZATION
      borderColor,
      borderAlpha,
      borderWidth,
      digitColor,
      digitOffset,
      faceBackgroundColor,
      faceBackgroundAlpha,
      // HOURS HAND CUSTOMIZATION
      hourHandColor,
      hourHandAlpha,
      hourHandWidth,
      hourHandLength,
      hourHandOffsideLength,
      // MINUTES HAND CUSTOMIZATION
      minuteHandColor,
      minuteHandAlpha,
      minuteHandWidth,
      minuteHandLength,
      minuteHandOffsideLength,
      // SECONDS HAND CUSTOMIZATION
      secondHandColor,
      secondHandAlpha,
      secondHandWidth,
      secondHandLength,
      secondHandOffsideLength,
      // HUB CUSTOMIZATION
      hubColor,
      hubAlpha,
      hubRadius,
      // GRADUATIONS CUSTOMIZATION
      accentGraduationModulo,
      highGraduationWidth,
      smallGraduationWidth,
      highGraduationLength,
      smallGraduationLength,

      ...otherProps
    } = this.props;

    return (
    <RNAnalogClock
      onClockTick={this.handlesOnClockTick}
      // PROPERTIES
      bridgeHours={parseInt(hours, 10) ? parseInt(hours, 10) % 12 : getDefaultProps().hours}
      bridgeMinutes={parseInt(minutes, 10) ? parseInt(minutes, 10) % 60 : getDefaultProps().minutes}
      bridgeSeconds={parseInt(seconds, 10) ? parseInt(seconds, 10) % 60 : getDefaultProps().seconds}
      bridgeSetTimeViaTouch={setTimeViaTouch}
      bridgeEnableShadows={enableShadows}
      bridgeRealTime={realTime}
      bridgeMilitaryTime={militaryTime}
      bridgeCurrentTime={currentTime}
      bridgeEnableDigit={enableDigit}
      bridgeEnableGraduations={enableGraduations}
      bridgeEnableHub={enableHub}
      // CLOCK'S FACE CUSTOMIZATION
      bridgeDigitColor={processColor(digitColor)}
      bridgeDigitOffset={parseFloat(digitOffset) ? parseFloat(digitOffset) : getDefaultProps().digitOffset}
      bridgeBorderColor={processColor(borderColor)}
      bridgeBorderAlpha={parseFloat(borderAlpha) ? parseFloat(borderAlpha) : getDefaultProps().borderAlpha}
      bridgeBorderWidth={parseFloat(borderWidth) ? parseFloat(borderWidth) : getDefaultProps().borderWidth}
      bridgeFaceBackgroundColor={processColor(faceBackgroundColor)}
      bridgeFaceBackgroundAlpha={parseFloat(faceBackgroundAlpha) ? parseFloat(faceBackgroundAlpha) : getDefaultProps().faceBackgroundAlpha}
      // HOURS HAND CUSTOMIZATION
      bridgeHourHandColor={processColor(hourHandColor)}
      bridgeHourHandAlpha={parseFloat(hourHandAlpha) ? parseFloat(hourHandAlpha) : getDefaultProps().hourHandAlpha}
      bridgeHourHandWidth={parseFloat(hourHandWidth) ? parseFloat(hourHandWidth) : getDefaultProps().hourHandWidth}
      bridgeHourHandLength={parseFloat(hourHandLength) ? parseFloat(hourHandLength) : getDefaultProps().hourHandLength}
      bridgeHourHandOffsideLength={parseFloat(hourHandOffsideLength) ? parseFloat(hourHandOffsideLength) : getDefaultProps().hourHandOffsideLength}
      // MINUTES HAND CUSTOMIZATION
      bridgeMinuteHandColor={processColor(minuteHandColor)}
      bridgeMinuteHandAlpha={parseFloat(minuteHandAlpha) ? parseFloat(minuteHandAlpha) : getDefaultProps().minuteHandAlpha}
      bridgeMinuteHandWidth={parseFloat(minuteHandWidth) ? parseFloat(minuteHandWidth) : getDefaultProps().minuteHandWidth}
      bridgeMinuteHandLength={parseFloat(minuteHandLength) ? parseFloat(minuteHandLength) : getDefaultProps().minuteHandLength}
      bridgeMinuteHandOffsideLength={parseFloat(minuteHandOffsideLength) ? parseFloat(minuteHandOffsideLength) : getDefaultProps().minuteHandOffsideLength}
      // SECONDS HAND CUSTOMIZATION
      bridgeSecondHandColor={processColor(secondHandColor)}
      bridgeSecondHandAlpha={parseFloat(secondHandAlpha) ? parseFloat(secondHandAlpha) : getDefaultProps().secondHandAlpha}
      bridgeSecondHandWidth={parseFloat(secondHandWidth) ? parseFloat(secondHandWidth) : getDefaultProps().secondHandWidth}
      bridgeSecondHandLength={parseFloat(secondHandLength) ? parseFloat(secondHandLength) : getDefaultProps().secondHandLength}
      bridgeSecondHandOffsideLength={parseFloat(secondHandOffsideLength) ? parseFloat(secondHandOffsideLength) : getDefaultProps().secondHandOffsideLength}
      // HUB CUSTOMIZATION
      bridgeHubColor={processColor(hubColor)}
      bridgeHubAlpha={parseFloat(hubAlpha) ? parseFloat(hubAlpha) : getDefaultProps().hubAlpha}
      bridgeHubRadius={parseFloat(hubRadius) ? parseFloat(hubRadius) : getDefaultProps().hubRadius}
      // GRADUATIONS CUSTOMIZATION
      accentGraduationModulo={parseInt(accentGraduationModulo, 10) ? parseInt(accentGraduationModulo, 10) : getDefaultProps().accentGraduationModulo}
      highGraduationWidth={parseFloat(highGraduationWidth) ? parseFloat(highGraduationWidth) : getDefaultProps().highGraduationWidth}
      smallGraduationWidth={parseFloat(smallGraduationWidth) ? parseFloat(smallGraduationWidth) : getDefaultProps().smallGraduationWidth}
      highGraduationLength={parseFloat(highGraduationLength) ? parseFloat(highGraduationLength) : getDefaultProps().highGraduationLength}
      smallGraduationLength={parseFloat(smallGraduationLength) ? parseFloat(smallGraduationLength) : getDefaultProps().smallGraduationLength}
      {...otherProps}
    />
    );
  }

  handlesOnClockTick(event) {
    const { onTimeChange } = this.props;
    const { nativeEvent: { hours, minutes, seconds } } = event;
    onTimeChange({
      hours: this.formatInto2Digits(hours),
      minutes: this.formatInto2Digits(minutes),
      seconds: this.formatInto2Digits(seconds)
    });
  }

  startRealTimeClock() {
    AnalogClockManager.startRealTime();
  }

  stopRealTimeClock() {
    AnalogClockManager.stopRealTime();
  }

  reloadRealTimeClock() {
    AnalogClockManager.reloadRealTime();
  }

  formatInto2Digits(num) {
    if (parseInt(num, 10)) {
      return ('0' + num).slice(-2);
    } else {
      return '00';
    }
  }
}

AnalogClock.propTypes = {
  //////////////////////////
  //----- PROPERTIES -----//
  //////////////////////////
  // manualy define hours
  hours: PropTypes.number,
  // manualy define minutes
  minutes: PropTypes.number,
  // manualy define seconds
  seconds: PropTypes.number,
  // If set to true, the hands will cast a shadow. Default value is true.
  enableShadows: PropTypes.bool,
  /// If set to true, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). Default value is NO;
  realTime: PropTypes.bool,
  // If set to true, the clock time will suport military time. Default value is false.
  militaryTime: PropTypes.bool,
  // If set to true, the clock will be set to the current time on the phone. Prioritized over setting the time manualy. Default value is false.
  currentTime: PropTypes.bool,
  // If set to true, the digits (1-12) will be displayed on the face of the clock. Default value is false.
  enableDigit: PropTypes.bool,
  // If set to true, the clock time can be updated via touch inputs. Default value is false.
  setTimeViaTouch: PropTypes.bool,
  // If set to true, the graduation on the clock will be visible. See the methods bellow to costumize the graduations. Default value is true.
  enableGraduations: PropTypes.bool,
  /// If set to true, a circular hub will be drawn. Default value is false
  enableHub: PropTypes.bool,

  //////////////////////////////////////////
  //----- CLOCK'S FACE CUSTOMIZATION -----//
  //////////////////////////////////////////
  // The color of the clock's border.
  borderColor: PropTypes.string,
  /// The alpha of the clock's border.
  borderAlpha: PropTypes.number,
  /// The width of the clock's border.
  borderWidth: PropTypes.number,
  /// The color of the digits appearing inside the clock
  digitColor: PropTypes.string,
  /// The offset for the position of the digits on the clock's face. A value >0 will make the digits appear further away from the center of the clock. A valut <0 will make them closer to the center of the clock. Default value is 0.0.
  digitOffset: PropTypes.number,
  /// The background color of the clock's face.
  faceBackgroundColor: PropTypes.string,
  /// The alpha of the clock's face.
  faceBackgroundAlpha: PropTypes.number,

  ////////////////////////////////////////
  //----- HOURS HAND CUSTOMIZATION -----//
  ////////////////////////////////////////
  /// The color of the clock's hour hand. Default value is whiteColor.
  hourHandColor: PropTypes.string,
  /// The alpha of the clock's hour hand. Default value is 1.0.
  hourHandAlpha: PropTypes.number,
  /// The width of the clock's hour hand. Default value is 4.0.
  hourHandWidth: PropTypes.number,
  /// The length of the clock's hour hand. Default value is 30.
  hourHandLength: PropTypes.number,
  /// The length of the offside part of the clock's hour hand. Default value is 10.
  hourHandOffsideLength: PropTypes.number,

  ////////////////////////////////////////
  //----- MINUTES HAND CUSTOMIZATION -----//
  ////////////////////////////////////////
  /// The color of the clock's minute hand. Default value is whiteColor.
  minuteHandColor: PropTypes.string,
  /// The alpha of the clock's minute hand. Default value is 1.0.
  minuteHandAlpha: PropTypes.number,
  /// The width of the clock's minute hand. Default value is 3.0.
  minuteHandWidth: PropTypes.number,
  /// The length of the clock's minute hand. Default value is 55.
  minuteHandLength: PropTypes.number,
  /// The length of the offside part of the clock's minute hand. Default value is 20.
  minuteHandOffsideLength: PropTypes.number,

  //////////////////////////////////////////
  //----- SECONDS HAND CUSTOMIZATION -----//
  //////////////////////////////////////////
  /// The color of the clock's second hand. Default value is whiteColor.
  secondHandColor: PropTypes.string,
  /// The alpha of the clock's second hand. Default value is 1.0.
  secondHandAlpha: PropTypes.number,
  /// The width of the clock's second hand. Default value is 1.0.
  secondHandWidth: PropTypes.number,
  /// The length of the clock's second hand. Default value is 60.
  secondHandLength: PropTypes.number,
  /// The length of the offside part of the clock's second hand. Default value is 20.
  secondHandOffsideLength: PropTypes.number,

  /////////////////////////////////
  //----- HUB CUSTOMIZATION -----//
  /////////////////////////////////
  /// The color of the hub. Default value is whiteColor.
  hubColor: PropTypes.string,
  /// The alpha of the clock's hub. Default value is 1.0.
  hubAlpha: PropTypes.number,
  /// The width of the clock's hub. Default value is 3.0.
  hubRadius: PropTypes.number,

  /////////////////////////////////////////
  //----- GRADUATIONS CUSTOMIZATION -----//
  /////////////////////////////////////////
  /// The index modulo to accent graduations (= 5 by default)
  accentGraduationModulo: PropTypes.number,
  /// The width of the accented graduations (every accentGraduationModulo graduations)
  highGraduationWidth: PropTypes.number,
  /// The width of the non accented graduations (every accentGraduationModulo graduations)
  smallGraduationWidth: PropTypes.number,
  /// The length of the accented graduations (every accentGraduationModulo graduations)
  highGraduationLength: PropTypes.number,
  /// The length of the non accented graduations (every accentGraduationModulo graduations)
  smallGraduationLength: PropTypes.number,

  ///////////////////////////////////////////////////////
  // Read only props (so no need to bridge native one) //
  ///////////////////////////////////////////////////////
  //If set to true, the clock real time feature is activated. Read only.
  realTimeIsActivated: PropTypes.bool,
  ///////////////////////////////////////
  //----- CURRENT TIME CALLBACK -----//
  ///////////////////////////////////////
  onTimeChange: PropTypes.func
};

AnalogClock.defaultProps = {
  // PROPERTIES
  hours: getDefaultProps().hours,
  minutes: getDefaultProps().minutes,
  seconds: getDefaultProps().seconds,
  enableShadows: getDefaultProps().enableShadows,
  realTime: getDefaultProps().realTime,
  militaryTime: getDefaultProps().militaryTime,
  currentTime: getDefaultProps().currentTime,
  enableDigit: getDefaultProps().enableDigit,
  setTimeViaTouch: getDefaultProps().setTimeViaTouch,
  enableGraduations: getDefaultProps().enableGraduations,
  enableHub: getDefaultProps().enableHub,
  // CLOCK'S FACE CUSTOMIZATION
  borderColor: getDefaultProps().borderColor,
  borderAlpha: getDefaultProps().borderAlpha,
  borderWidth: getDefaultProps().borderWidth,
  digitColor: getDefaultProps().digitColor,
  digitOffset: getDefaultProps().digitOffset,
  faceBackgroundColor: getDefaultProps().faceBackgroundColor,
  faceBackgroundAlpha: getDefaultProps().faceBackgroundAlpha,
  // HOURS HAND CUSTOMIZATION
  hourHandColor: getDefaultProps().hourHandColor,
  hourHandAlpha: getDefaultProps().hourHandAlpha,
  hourHandWidth: getDefaultProps().hourHandWidth,
  hourHandLength: getDefaultProps().hourHandLength,
  hourHandOffsideLength: getDefaultProps().hourHandOffsideLength,
  // MINUTES HAND CUSTOMIZATION
  minuteHandColor: getDefaultProps().minuteHandColor,
  minuteHandAlpha: getDefaultProps().minuteHandAlpha,
  minuteHandWidth: getDefaultProps().minuteHandWidth,
  minuteHandLength: getDefaultProps().minuteHandLength,
  minuteHandOffsideLength: getDefaultProps().minuteHandOffsideLength,
  // SECONDS HAND CUSTOMIZATION
  secondHandColor:  getDefaultProps().secondHandColor,
  secondHandAlpha: getDefaultProps().secondHandAlpha,
  secondHandWidth: getDefaultProps().secondHandWidth,
  secondHandLength: getDefaultProps().secondHandLength,
  secondHandOffsideLength: getDefaultProps().secondHandOffsideLength,
  // HUB CUSTOMIZATION
  hubColor: getDefaultProps().hubColor,
  hubAlpha: getDefaultProps().hubAlpha,
  hubRadius: getDefaultProps().hubRadius,
  // GRADUATIONS CUSTOMIZATION
  accentGraduationModulo: getDefaultProps().accentGraduationModulo,
  highGraduationWidth: getDefaultProps().highGraduationWidth,
  smallGraduationWidth: getDefaultProps().smallGraduationWidth,
  highGraduationLength: getDefaultProps().highGraduationLength,
  smallGraduationLength: getDefaultProps().smallGraduationLength
};

function getDefaultProps() {
  return {
    // PROPERTIES
    hours: 0,
    minutes: 0,
    seconds: 0,
    enableShadows: true,
    realTime: false,
    militaryTime: false,
    currentTime: false,
    enableDigit: false,
    setTimeViaTouch: false,
    enableGraduations: true,
    enableHub: false,
    // CLOCK'S FACE CUSTOMIZATION
    borderColor: '',
    borderAlpha: 1,
    borderWidth: 0,
    digitColor: '',
    digitOffset: 8,
    faceBackgroundColor: '',
    faceBackgroundAlpha: 0.0,
    // HOURS HAND CUSTOMIZATION
    hourHandColor: '#FFFFFF',
    hourHandAlpha: 1.0,
    hourHandWidth: 4.0,
    hourHandLength: 30,
    hourHandOffsideLength: 10,
    // MINUTES HAND CUSTOMIZATION
    minuteHandColor: '#FFFFFF',
    minuteHandAlpha: 1.0,
    minuteHandWidth: 3.0,
    minuteHandLength: 55,
    minuteHandOffsideLength: 20,
    // SECONDS HAND CUSTOMIZATION
    secondHandColor: '#FFFFFF',
    secondHandAlpha: 1.0,
    secondHandWidth: 1.0,
    secondHandLength: 60,
    secondHandOffsideLength: 20,
    // HUB CUSTOMIZATION
    hubColor: '#FFFFFF',
    hubAlpha: 1.0,
    hubRadius: 3.0,
    // GRADUATIONS CUSTOMIZATION
    accentGraduationModulo: 5,
    highGraduationWidth: 2.0,
    smallGraduationWidth: 1.0,
    highGraduationLength: 10.0,
    smallGraduationLength: 5.0
  };
}

export default AnalogClock;
