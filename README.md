# react-native-analog-clock


*__IMPORTANT__* : Work in progress (*at early stage*), stay tuned!


##### React native analog clock as a nice alternative to traditional timepicker.

This component is a bridge over `native`  [BEMAnalogClock](https://github.com/Boris-Em/BEMAnalogClock)
- Adjust the time on the clock via touch (or disable it)
- customizable
- native behind (*JS thread will thank you later *:smile:)


## Getting started

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
// minimalist use:

// in your render()
render() {
  return (
    <AnalogClock
      style={{width: 150, height: 150}}
    />    
  );
}
```
*follow the example for more details*

*coming soon*

## to add
- [ ] add => JS side defaultProps
- [x] add => `hub` customization props bridge
- [ ] add => `digit font` prop bridge
- [ ] add => `graduations length` prop bridge
- [ ] add => `graduations width` prop bridge
- [ ] add => `graduations color` prop bridge

## to fix
- [ ] fix =>  `digit color` dynamic change throws error (*only initial assignment is ok*)
