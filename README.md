[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/MacKentoch/rn-analog-clock)
# react-native-analog-clock


*__IMPORTANT__* : **Work in progress** (*at early stage*), stay tuned!


##### React native analog clock as a nice alternative to traditional timepicker.

This component is a bridge over `native`  [BEMAnalogClock](https://github.com/Boris-Em/BEMAnalogClock)
- Adjust the time on the clock via touch (or disable it)
- customizable
- native behind

> NOTE: this native bridge is an `Objective-C` bridge. A `Swift` bridge version — *not published and just for technical comparison experience* — is available [here](https://github.com/MacKentoch/react-native-analog-clock)

<img src="https://raw.githubusercontent.com/MacKentoch/rn-analog-clock/master/images/previewFromExample.gif" alt="preview" width="320px"></img>

*See this full example source [here](https://github.com/MacKentoch/rn-analog-clock/blob/master/example/index.ios.js)*

## Getting started

**IMPORTANT:** this component is `build with React Native 0.30+` (*not tested with lower versions of RN*).

### install in your project
```bash
npm i --save react-native-analog-clock
```

### link to your project
```bash
react-native link
```

### import AnalogClock component

**A  minimalist (a bit ugly) example:**
```javascript
import AnalogClock from 'react-native-analog-clock';
// in your render()
render() {
  return (
    <AnalogClock
      style={{
        width: 150,
        height: 150
      }}
      onTimeChange={
        ({hours, minutes, seconds}) => console.log(`time is now : ${hours}:${minutes}:${seconds}`)
      }
    />    
  );
}
```

**A super power example:**

```javascript
import AnalogClock from 'react-native-analog-clock';
// in your render()
render() {
  //NOTE: state should be initialized in your constructor (I just abbreviate)
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
  const { accentGraduationModulo, bridgeHighGraduationColor, bridgeSmallGraduationColor, highGraduationWidth, smallGraduationWidth, highGraduationLength, smallGraduationLength } = this.state;
  return (
    <AnalogClock
      ref={(ref)=>{this.analogClock = ref;}}
      style={[
        {height: 140, width: 140,backgroundColor: 'transparent'},
        styles.clockOpt
      ]}
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
      bridgeHighGraduationColor={bridgeHighGraduationColor}
      bridgeSmallGraduationColor={bridgeSmallGraduationColor}
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
  );
}
```

*[follow this complete example for more details](https://github.com/MacKentoch/rn-analog-clock/blob/master/example/index.ios.js)*


## Next?
### to add
- [ ] add => JS side defaultProps
- [ ] add => `digit font` prop bridge
- [x] add => `graduations length` prop bridge
- [x] add => `graduations width` prop bridge
- [ ] add => `graduations color` prop bridge

### to fix
- [ ] fix =>  `digit color` dynamic change throws error (*only initial assignment is ok*)
- [ ] fix => perf.
