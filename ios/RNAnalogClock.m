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

BOOL const DEFAULT_IS_ANIMATED = YES;

@implementation RNAnalogClock {
  BOOL _animated;
  //  current time
  NSInteger _currentHours;
  NSInteger _currentMinutes;
  NSInteger _currentSeconds;
}

////////////////////////////
//----- INITIALIZERS -----//
////////////////////////////
- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
    [self initWithDefaultConfig:DEFAULT_IS_ANIMATED];
  }
  return self;
}


-(void) initWithDefaultConfig:(BOOL)animated {
  NSLog(@"initWithDefaultConfig called");
  _animated = animated;
}

//////////////////////////////////
//----- PROPERTIES SETTERS -----//
//////////////////////////////////
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

//////////////////////////////////////////////////
//----- CLOCK'S FACE CUSTOMIZATION SETTERS -----//
//////////////////////////////////////////////////
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

////////////////////////////////////////
//----- HOURS HAND CUSTOMIZATION -----//
////////////////////////////////////////
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

//////////////////////////////////////////
//----- MINUTES HAND CUSTOMIZATION -----//
//////////////////////////////////////////
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

//////////////////////////////////////////
//----- SECONDS HAND CUSTOMIZATION -----//
//////////////////////////////////////////
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

@end