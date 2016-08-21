//
//  RNAnalogClock.m
//  RNAnalogClock
//
//  Created by MacKentoch on 12/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//
#import <UIKit/UIKit.h>
#import "RNAnalogClock.h"
#import "RCTConvert.h"


@implementation RNAnalogClock {
  BOOL _animated;
  //  current time
  NSInteger _currentHours;
  NSInteger _currentMinutes;
  NSInteger _currentSeconds;
}

#pragma mark - Initialization
- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
    [self initWithDefaultConfig: YES
         accentGraduationModulo: 5
          smallGraduationLength: 5.0
           highGraduationLength: 10.0
           smallGraduationWidth: 1.0
            highGraduationWidth: 2.0
     ];
  }
  return self;
}


-(void) initWithDefaultConfig: (BOOL) animated
       accentGraduationModulo: (NSInteger) accentGraduationModulo
        smallGraduationLength: (CGFloat) smallGraduationLength
         highGraduationLength: (CGFloat) highGraduationLength
         smallGraduationWidth: (CGFloat) smallGraduationWidth
          highGraduationWidth: (CGFloat) highGraduationWidth {
  _animated = animated;
  _accentGraduationModulo = accentGraduationModulo;;
  _highGraduationWidth = highGraduationWidth;
  _smallGraduationWidth = smallGraduationWidth;
  _highGraduationLength = highGraduationLength;
  _smallGraduationLength = smallGraduationLength;
}

#pragma mark - properties setters
-(void) setBridgeHours: (NSInteger)hours {
  if (hours != self.hours) {
    self.hours = hours;
    [self updateTimeAnimated: _animated];
  }
}

-(void) setBridgeMinutes: (NSInteger)minutes {
  if (minutes != self.minutes) {
    self.minutes = minutes;
    [self updateTimeAnimated: _animated];
  }
}

-(void) setBridgeSeconds: (NSInteger)seconds {
  if (seconds != self.seconds) {
    self.seconds = seconds;
    [self updateTimeAnimated: _animated];
  }
}

-(void) setBridgeSetTimeViaTouch: (BOOL) active {
  if (active != self.setTimeViaTouch) {
    self.setTimeViaTouch = active;
    [self reloadClock];
  }
}

-(void) setBridgeCurrentTime: (BOOL) active {
  if (active != self.currentTime) {
    self.currentTime = active;
    [self reloadClock];
  }
}

-(void) setBridgeRealTime: (BOOL) active {
  if (active != self.realTime) {
    self.realTime = active;
    [self reloadClock];
  }
}

-(void) setBridgeMilitaryTime: (BOOL) active {
  if (active != self.militaryTime) {
    self.militaryTime = active;
    [self reloadClock];
  }
}

-(void) setBridgeEnableShadows: (BOOL) active {
  if (active != self.enableShadows) {
    self.enableShadows = active;
    [self reloadClock];
  }
}

-(void) setBridgeEnableGraduations: (BOOL) active {
  if (active != self.enableGraduations) {
    self.enableGraduations = active;
    [self reloadClock];
  }
}

-(void) setBridgeEnableDigit: (BOOL) active {
  if (active != self.enableDigit) {
    self.enableDigit = active;
    [self reloadClock];
  }
}

-(void) setBridgeEnableHub: (BOOL) active {
  if (active != self.enableHub) {
    self.enableHub = active;
    [self reloadClock];
  }
}

#pragma mark - clock's face customization setters
-(void) setBridgeBorderWidth: (CGFloat)width {
  if (width != self.borderWidth) {
    self.borderWidth = width;
    [self reloadClock];
  }
}

//-(void) setBridgeDigitColor: (NSNumber*) color {
//   self.digitColor = [RCTConvert UIColor: color];
//  [self reloadClock];
//}

-(void) setBridgeDigitOffset: (CGFloat)offset {
  if (offset != self.digitOffset) {
    self.digitOffset = offset;
    [self reloadClock];
  }
}

-(void) setBridgeBorderColor: (NSNumber*) color {
  UIColor * newColor = [RCTConvert UIColor: color];
  if (newColor != self.borderColor) {
    self.borderColor = newColor;
    [self reloadClock];
  }
}

-(void) setBridgeFaceBackgroundColor: (NSNumber*) color {
  UIColor * newColor = [RCTConvert UIColor: color];
  if (newColor != self.faceBackgroundColor) {
    self.faceBackgroundColor = newColor;
    [self reloadClock];
  }
}

-(void) setBridgeFaceBackgroundAlpha: (CGFloat) alpha {
  if (alpha != self.faceBackgroundAlpha) {
    self.faceBackgroundAlpha = alpha;
    [self reloadClock];
  }
}

-(void) setBridgeBorderAlpha: (CGFloat) alpha {
  if (alpha != self.borderAlpha) {
    self.borderAlpha = alpha;
    [self reloadClock];
  }
}

#pragma mark - hours hand customization setters
-(void) setBridgeHourHandColor: (NSNumber*) color {
  UIColor * newColor = [RCTConvert UIColor: color];
  if (newColor != self.hourHandColor) {
    self.hourHandColor = newColor;
    [self reloadClock];
  }
}

-(void) setBridgeHourHandAlpha: (CGFloat) alpha {
  if (alpha != self.hourHandAlpha) {
    self.hourHandAlpha = alpha;
    [self reloadClock];
  }
}

-(void) setBridgeHourHandWidth: (CGFloat) width {
  if (width != self.hourHandWidth) {
    self.hourHandWidth = width;
    [self reloadClock];
  }
}

-(void) setBridgeHourHandLength: (CGFloat) length {
  if (length != self.hourHandLength) {
    self.hourHandLength = length;
    [self reloadClock];
  }
}

-(void) setBridgeHourHandOffsideLength: (CGFloat) offsideLength {
  if (offsideLength != self.hourHandOffsideLength) {
    self.hourHandOffsideLength = offsideLength;
    [self reloadClock];
  }
}

#pragma mark - minutes hand customization setters
-(void) setBridgeMinuteHandColor: (NSNumber*) color {
  UIColor * newColor = [RCTConvert UIColor: color];
  if (newColor != self.minuteHandColor) {
    self.minuteHandColor = newColor;
    [self reloadClock];
  }
}

-(void) setBridgeMinuteHandAlpha: (CGFloat) alpha {
  if (alpha != self.minuteHandAlpha) {
    if (alpha != self.minuteHandAlpha) {
      self.minuteHandAlpha = alpha;
      [self reloadClock];
    }
  }
}

-(void) setBridgeMinuteHandWidth: (CGFloat) width {
  if (width != self.minuteHandWidth) {
    self.minuteHandWidth = width;
    [self reloadClock];
  }
}

-(void) setBridgeMinuteHandLength: (CGFloat) length {
  if (length != self.minuteHandLength) {
    self.minuteHandLength = length;
    [self reloadClock];
  }
}

-(void) setBridgeMinuteHandOffsideLength: (CGFloat) offsideLength {
  if (offsideLength != self.minuteHandOffsideLength) {
    self.minuteHandOffsideLength = offsideLength;
    [self reloadClock];
  }
}

#pragma mark - seconds hand customization setters
-(void) setBridgeSecondHandColor: (NSNumber*) color {
  UIColor * newColor = [RCTConvert UIColor: color];
  if (newColor != self.secondHandColor) {
    self.secondHandColor = newColor;
    [self reloadClock];
  }
}

-(void) setBridgeSecondHandAlpha: (CGFloat) alpha {
  if (alpha != self.secondHandAlpha) {
    self.secondHandAlpha = alpha;
    [self reloadClock];
  }
}

-(void) setBridgeSecondHandWidth: (CGFloat) width {
  if (width != self.secondHandWidth) {
    self.secondHandWidth = width;
    [self reloadClock];
  }
}

-(void) setBridgeSecondHandLength: (CGFloat) length {
  if (length != self.secondHandLength) {
    self.secondHandLength = length;
    [self reloadClock];
  }
}

-(void) setBridgeSecondHandOffsideLength: (CGFloat) offsideLength {
  if (offsideLength != self.secondHandOffsideLength) {
    self.secondHandOffsideLength = offsideLength;
    [self reloadClock];
  }
}

#pragma mark - hub customization setters
-(void) setBridgeHubColor: (NSNumber*) color {
  UIColor * newColor = [RCTConvert UIColor: color];
  if (newColor != self.hubColor) {
    self.hubColor = newColor;
    [self reloadClock];
  }
}

-(void) setBridgeHubAlpha: (CGFloat) alpha {
  if (alpha != self.hubAlpha) {
    self.hubAlpha = alpha;
    [self reloadClock];
  }
}

-(void) setBridgeHubRadius: (CGFloat) radius {
  if (radius != self.hubRadius) {
    self.hubRadius = radius;
    [self reloadClock];
  }
}

#pragma mark - graduation customization setters
-(void) setAccentGraduationModulo: (NSInteger) modulo {
  if (modulo != _accentGraduationModulo) {
    _accentGraduationModulo = modulo;
    [self reloadClock];
  }
}

//-(void) setBridgeHighGraduationColor: (NSNumber *) color {
//  _highGraduationColor = [RCTConvert UIColor: color];
//  [self reloadClock];
//}
//
//-(void) setBridgeSmallGraduationColor: (NSNumber *) color {
//  _smallGraduationColor = [RCTConvert UIColor: color];
//  [self reloadClock];
//}

-(void) setHighGraduationWidth: (CGFloat) width {
  if (width != _highGraduationWidth) {
    _highGraduationWidth = width;
    [self reloadClock];
  }
}

-(void) setSmallGraduationWidth: (CGFloat) width {
  if (width != _smallGraduationWidth) {
    _smallGraduationWidth = width;
    [self reloadClock];
  }
}

-(void) setHighGraduationLength: (CGFloat) length {
  if (length != _highGraduationLength) {
    _highGraduationLength = length;
    [self reloadClock];
  }
}

-(void) setSmallGraduationLength:(CGFloat) length {
  if (length != _smallGraduationLength) {
    _smallGraduationLength = length;
    [self reloadClock];
  }
}

#pragma mark - JS side actions
-(void) reloadRealTime {
  if (self.realTimeIsActivated == YES) {
    [self setClockToCurrentTimeAnimated: YES];
  }
  [self startRealTime];
}


@end
