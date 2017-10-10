[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/MacKentoch/rn-analog-clock)
# react-native-analog-clock


<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/Mp96tCWH2KdajZuBzqB6jwj8/MacKentoch/rn-analog-clock'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/Mp96tCWH2KdajZuBzqB6jwj8/MacKentoch/rn-analog-clock.svg' />
</a>

##### React native analog clock as a nice alternative to traditional timepicker.

This component is a bridge over `native`  [BEMAnalogClock](https://github.com/Boris-Em/BEMAnalogClock)
- Adjust the time on the clock via touch (or disable it)
- customizable
- native behind

> NOTE: this native bridge is an `Objective-C` bridge. A `Swift` bridge version — *not published and just for technical comparison experience* — is available [here](https://github.com/MacKentoch/react-native-analog-clock)

<img src="https://raw.githubusercontent.com/MacKentoch/rn-analog-clock/master/images/previewFromExample.gif" alt="preview" width="320px"></img>

*See this full example source [here](https://github.com/MacKentoch/rn-analog-clock/blob/master/example/index.ios.js)*

## Install

**IMPORTANT:** this component is `build with React Native 0.30+` (*not tested with lower versions of RN*).

### install in your project
```bash
npm i --save react-native-analog-clock
```

### link to your project
```bash
react-native link
```

## Use

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

**A super complete example:**

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
      style={{
        height: 140,
        width: 140,
        backgroundColor: 'transparent'}
      }
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
  );
}
```

*[follow this complete example for more details](https://github.com/MacKentoch/rn-analog-clock/blob/master/example/index.ios.js)*


## Properties

### General Clock Properties:
| Property name | type | Description |
| --- | --- | --- |
| **hours** | *number* | manually define hours |
| **minutes** | *number* | manually define minutes |
| **seconds** | *number* | manually define seconds |
| **enableShadows** | *bool* | If set to true, the hands will cast a shadow. *`Default` value is `true`.* |
| **realTime** | *bool* | If set to true, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). *`Default` value is `false`* |
| **militaryTime** | *bool* | If set to true, the clock time will support military time. *`Default` value is `false`*. |
| **currentTime** | *bool* | If set to true, the clock will be set to the current time on the phone. Prioritized over setting the time manually. *`Default` value is `false`.* |
| **enableDigit** | *bool* | If set to true, the digits (1-12) will be displayed on the face of the clock. *`Default` value is `false`.* |
| **setTimeViaTouch** | *bool* | If set to true, the clock time can be updated via touch inputs. *`Default` value is `false`.* |
| **enableGraduations** | *bool* | If set to true, the graduation on the clock will be visible. See the methods bellow to customize the graduations. *`Default` value is `true`.* |
| **enableHub** | *bool* | If set to true, a circular hub will be drawn. *`Default` value is `false`* |

### Current time callback:
| Name | Parameter | Parameter details |
| --- | --- | --- |
| **onTimeChange** | *object* | {hours, minutes, seconds} |

###  Clock's face customizations:
| Property name | type | Description |
| --- | --- | --- |
| **borderColor** | *string* | The color of the clock's border *(ex: 'blue', '#F1F1F1'...)*. |
| **borderAlpha** | *number* | The alpha of the clock's border. |
| **borderWidth** | *number* | The width of the clock's border. |
| **digitColor** | *string* | The color of the digits appearing inside the clock *(ex: 'blue', '#F1F1F1'...)*. *WARNING: `this property should be constant`* |
| **digitOffset** | *number* | The offset for the position of the digits on the clock's face. A value >0 will make the digits appear further away from the center of the clock. A valut <0 will make them closer to the center of the clock. *`Default` value is `0.0`.* |
| **faceBackgroundColor** | *string* | The background color of the clock's face *(ex: 'blue', '#F1F1F1'...)*. |
| **faceBackgroundAlpha** | *number* | The alpha of the clock's face. |

###  Hours hand customizations:
| Property name | type | Description |
| --- | --- | --- |
| **hourHandColor** | *string* | The color of the clock's hour hand. *`Default` value is `white`.* |
| **hourHandAlpha** | *number* | The alpha of the clock's hour hand. *`Default` value is `1.0`.* |
| **hourHandWidth** | *number* | The width of the clock's hour hand. *`Default` value is `4.0`.* |
| **hourHandLength** | *number* | The length of the clock's hour hand. *`Default` value is `30`.* |
| **hourHandOffsideLength** | *number* | The length of the offside part of the clock's hour hand. *`Default` value is `10`.* |

###  Minutes hand customizations:
| Property name | type | Description |
| --- | --- | --- |
| **minuteHandColor** | *string* | The color of the clock's minute hand. *`Default` value is `white`.* |
| **minuteHandAlpha** | *number* | The alpha of the clock's minute hand. *`Default` value is `1.0`.* |
| **minuteHandWidth** | *number* | The width of the clock's minute hand. *`Default` value is `3.0`.* |
| **minuteHandLength** | *number* | The length of the clock's minute hand. *`Default` value is `55`.* |
| **minuteHandOffsideLength** | *number* | The length of the offside part of the clock's minute hand. *`Default` value is `20`.* |

###  Seconds hand customizations:
| Property name | type | Description |
| --- | --- | --- |
| **secondHandColor** | *string* | The color of the clock's second hand. *`Default` value is `white`.* |
| **secondHandAlpha** | *number* | The alpha of the clock's second hand. *`Default` value is `1.0`.* |
| **secondHandWidth** | *number* | The width of the clock's second hand. *`Default` value is `1.0`.* |
| **secondHandLength** | *number* | The length of the clock's second hand. *`Default` value is `60`.* |
| **secondHandOffsideLength** | *number* | The length of the offside part of the clock's second hand. *`Default` value is `20`.* |

###  Hub customizations:
| Property name | type | Description |
| --- | --- | --- |
| **hubColor** | *string* | The color of the clock's hub. *`Default` value is `white`.* |
| **hubAlpha** | *number* | The alpha of the clock's hub. *`Default` value is `1.0`.* |
| **hubRadius** | *number* | The width of the clock's hub. *`Default` value is `3.0`.* |

###  Graduation customizations:
| Property name | type | Description |
| --- | --- | --- |
| **accentGraduationModulo** | *number* | The index modulo to accent graduations. *`Default` is `5` (= every 5 graduations)* |
| **highGraduationWidth** | *number* | The width of the accented graduations (every accentGraduationModulo graduations). *`Default` is `2.0`.* |
| **smallGraduationWidth** | *number* | The width of the non accented graduations (every accentGraduationModulo graduations). *`Default` is `1.0`.* |
| **highGraduationLength** | *number* | The length of the accented graduations (every accentGraduationModulo graduations). *`Default` is `10.0`.* |
| **smallGraduationLength** | *number* | The length of the non accented graduations (every accentGraduationModulo graduations). *`Default` is `5.0`.* |

> Note: graduations color property is not available but shares the same value as digitColor.

## Next?
### to add
- [x] add => JS side defaultProps
- [ ] add => `digit font` prop bridge


## License

The MIT License (MIT)

Copyright (c) 2016 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
