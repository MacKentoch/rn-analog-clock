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
           smallGraduationColor: [UIColor whiteColor]
            highGraduationColor: [UIColor whiteColor]
     ];
  }
  return self;
}


-(void) initWithDefaultConfig: (BOOL) animated
       accentGraduationModulo: (NSInteger) accentGraduationModulo
        smallGraduationLength: (CGFloat) smallGraduationLength
         highGraduationLength: (CGFloat) highGraduationLength
         smallGraduationWidth: (CGFloat) smallGraduationWidth
          highGraduationWidth: (CGFloat) highGraduationWidth
         smallGraduationColor: (UIColor *) smallGraduationColor
          highGraduationColor: (UIColor *) highGraduationColor {
  _animated = animated;
  _accentGraduationModulo = accentGraduationModulo;;
  _highGraduationWidth = highGraduationWidth;
  _smallGraduationWidth = smallGraduationWidth;
  _highGraduationLength = highGraduationLength;
  _smallGraduationLength = smallGraduationLength;
  _highGraduationColor = [UIColor whiteColor];
  _smallGraduationColor = [UIColor whiteColor];
}

#pragma mark - properties setters
-(void) setBridgeHours: (NSInteger)hours {
  self.hours = hours;
  [self updateTimeAnimated: _animated];
}

-(void) setBridgeMinutes: (NSInteger)minutes {
  self.minutes = minutes;
  [self updateTimeAnimated: _animated];
}

-(void) setBridgeSeconds: (NSInteger)seconds {
  self.seconds = seconds;
  [self updateTimeAnimated: _animated];
}

-(void) setBridgeSetTimeViaTouch: (BOOL) active {
  self.setTimeViaTouch = active;
  [self reloadClock];
}

-(void) setBridgeCurrentTime: (BOOL) active {
  self.currentTime = active;
  [self reloadClock];
}

-(void) setBridgeRealTime: (BOOL) active {
  self.realTime = active;
  [self reloadClock];
}

-(void) setBridgeMilitaryTime: (BOOL) active {
  self.militaryTime = active;
  [self reloadClock];
}

-(void) setBridgeEnableShadows: (BOOL) active {
  self.enableShadows = active;
  [self reloadClock];
}

-(void) setBridgeEnableGraduations: (BOOL) active {
  self.enableGraduations = active;
  [self reloadClock];
}

-(void) setBridgeEnableDigit: (BOOL) active {
  self.enableDigit = active;
  [self reloadClock];
}

-(void) setBridgeEnableHub: (BOOL) active {
  self.enableHub = active;
  [self reloadClock];
}

#pragma mark - clock's face customization setters
-(void) setBridgeBorderWidth: (CGFloat)width {
  self.borderWidth = width;
  [self reloadClock];
}

-(void) setBridgeDigitColor: (NSNumber*) color {
  self.digitColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setBridgeDigitOffset: (CGFloat)offset {
  self.digitOffset = offset;
  [self reloadClock];
}

-(void) setBridgeBorderColor: (NSNumber*) color {
  self.borderColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setBridgeFaceBackgroundColor: (NSNumber*) color {
  self.faceBackgroundColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setBridgeFaceBackgroundAlpha: (CGFloat) alpha {
  self.faceBackgroundAlpha = alpha;
  [self reloadClock];
}

-(void) setBridgeBorderAlpha: (CGFloat) alpha {
  self.borderAlpha = alpha;
  [self reloadClock];
}

#pragma mark - hours hand customization setters
-(void) setBridgeHourHandColor: (NSNumber*) color {
  self.hourHandColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setBridgeHourHandAlpha: (CGFloat) alpha {
  self.hourHandAlpha = alpha;
  [self reloadClock];
}

-(void) setBridgeHourHandWidth: (CGFloat) width {
  self.hourHandWidth = width;
  [self reloadClock];
}

-(void) setBridgeHourHandLength: (CGFloat) length {
  self.hourHandLength = length;
  [self reloadClock];
}

-(void) setBridgeHourHandOffsideLength: (CGFloat) offsideLength {
  self.hourHandOffsideLength = offsideLength;
  [self reloadClock];
}

#pragma mark - minutes hand customization setters
-(void) setBridgeMinuteHandColor: (NSNumber*) color {
  self.minuteHandColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setBridgeMinuteHandAlpha: (CGFloat) alpha {
  self.minuteHandAlpha = alpha;
  [self reloadClock];
}

-(void) setBridgeMinuteHandWidth: (CGFloat) width {
  self.minuteHandWidth = width;
  [self reloadClock];
}

-(void) setBridgeMinuteHandLength: (CGFloat) length {
  self.minuteHandLength = length;
  [self reloadClock];
}

-(void) setBridgeMinuteHandOffsideLength: (CGFloat) offsideLength {
  self.minuteHandOffsideLength = offsideLength;
  [self reloadClock];
}

#pragma mark - seconds hand customization setters
-(void) setBridgeSecondHandColor: (NSNumber*) color {
  self.secondHandColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setBridgeSecondHandAlpha: (CGFloat) alpha {
  self.secondHandAlpha = alpha;
  [self reloadClock];
}

-(void) setBridgeSecondHandWidth: (CGFloat) width {
  self.secondHandWidth = width;
  [self reloadClock];
}

-(void) setBridgeSecondHandLength: (CGFloat) length {
  self.secondHandLength = length;
  [self reloadClock];
}

-(void) setBridgeSecondHandOffsideLength: (CGFloat) offsideLength {
  self.secondHandOffsideLength = offsideLength;
  [self reloadClock];
}

#pragma mark - hub customization setters
-(void) setBridgeHubColor: (NSNumber*) color {
  self.hubColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setBridgeHubAlpha: (CGFloat) alpha {
  self.hubAlpha = alpha;
  [self reloadClock];
}

-(void) setBridgeHubRadius: (CGFloat) radius {
  self.hubRadius = radius;
  [self reloadClock];
}

#pragma mark - graduation customization setters
-(void) setAccentGraduationModulo: (NSInteger) modulo {
  _accentGraduationModulo = modulo;
  [self reloadClock];
}

-(void) setBridgeHighGraduationColor: (NSNumber *) color {
  //  _bridgeHighGraduationColor = color;
  _highGraduationColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setBridgeSmallGraduationColor: (NSNumber *) color {
  //  _bridgeSmallGraduationColor = color;
  _smallGraduationColor = [RCTConvert UIColor: color];
  [self reloadClock];
}

-(void) setHighGraduationWidth: (CGFloat) width {
  _highGraduationWidth = width;
  [self reloadClock];
}

-(void) setSmallGraduationWidth: (CGFloat) width {
  _smallGraduationWidth = width;
  [self reloadClock];
}

-(void) setHighGraduationLength: (CGFloat) length {
  _highGraduationLength = length;
  [self reloadClock];
}

-(void) setSmallGraduationLength:(CGFloat) length {
  _smallGraduationLength = length;
  [self reloadClock];
}

#pragma mark - JS side actions
-(void) reloadRealTime {
  if (self.realTimeIsActivated == YES) {
    [self setClockToCurrentTimeAnimated: YES];
  }
  [self startRealTime];
}


@end