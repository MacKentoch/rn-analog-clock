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

### import AnalogClock
```javascript
import AnalogClock from 'react-native-analog-clock';
// minimalist use (a bit ugly):

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
*[follow this complete example for more details](https://github.com/MacKentoch/rn-analog-clock/blob/master/example/index.ios.js)*


## Next?
### to add
- [ ] add => JS side defaultProps
- [x] add => `hub` customization props bridge
- [ ] add => `digit font` prop bridge
- [ ] add => `graduations length` prop bridge
- [ ] add => `graduations width` prop bridge
- [ ] add => `graduations color` prop bridge

### to fix
- [ ] fix =>  `digit color` dynamic change throws error (*only initial assignment is ok*)
- [ ] fix => perf.
