//
//  RNAnalogClockManager.m
//  RNAnalogClock
//
//  Created by MacKentoch on 12/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//
#import <Foundation/Foundation.h>

#import "RNAnalogClock.h"
#import "RNAnalogClockManager.h"
#import "RCTBridge.h"
#import "RCTUIManager.h"
#import "RCTViewManager.h"
#import "UIView+React.h"

@interface RNAnalogClockManager() <BEMAnalogClockDelegate>

@end

@implementation RNAnalogClockManager {
  RNAnalogClock* _AnalogClock;
}

RCT_EXPORT_MODULE()

- (UIView *)view
{
  _AnalogClock = [[RNAnalogClock alloc] init];
  _AnalogClock.delegate = self;
  return _AnalogClock;
}

#pragma mark BEMAnalogClockDelegate
- (void)currentTimeOnClock:(BEMAnalogClockView *)clock
                     Hours:(NSString *)hours
                   Minutes:(NSString *)minutes
                   Seconds:(NSString *)seconds {
  if (!_AnalogClock.onClockTick) {
    return;
  }
  _AnalogClock.onClockTick(@{
                             @"hours": hours,
                             @"minutes": minutes,
                             @"seconds": seconds
                            });
}

/////////////////////////////////
//----- EVENTS SEND TO JS -----//
/////////////////////////////////
RCT_EXPORT_VIEW_PROPERTY(onClockTick, RCTBubblingEventBlock);

/// READ ONLY : If set to YES, the clock real time feature is activated.
RCT_EXPORT_VIEW_PROPERTY(realTimeIsActivated, BOOL)

//////////////////////////////////
//----- GENERAL PROPERTIES -----//
//////////////////////////////////
/// setting the time manualy
RCT_EXPORT_VIEW_PROPERTY(bridgeHours, NSInteger);
RCT_EXPORT_VIEW_PROPERTY(bridgeMinutes, NSInteger);
RCT_EXPORT_VIEW_PROPERTY(bridgeSeconds, NSInteger);

/// If set to YES, the clock time can be updated via touch inputs. Default value is NO.
RCT_EXPORT_VIEW_PROPERTY(bridgeSetTimeViaTouch, BOOL);
/// If set to YES, the clock will be set to the current time on the phone. Prioritized over setting the time manualy. Default value is NO.
RCT_EXPORT_VIEW_PROPERTY(bridgeCurrentTime, BOOL);
/// If set to YES, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). Default value is NO;
RCT_EXPORT_VIEW_PROPERTY(bridgeRealTime, BOOL);

  // If set to YES, the clock time will suport military time. Default value is NO.
RCT_EXPORT_VIEW_PROPERTY(bridgeMilitaryTime, BOOL);
/// If set to YES, the hands will cast a shadow. Default value is YES.
RCT_EXPORT_VIEW_PROPERTY(bridgeEnableShadows, BOOL);
/// If set to YES, the graduation on the clock will be visible. See the methods bellow to costumize the graduations. Default value is YES.
RCT_EXPORT_VIEW_PROPERTY(bridgeEnableGraduations, BOOL);
/// If set to YES, the digits (1-12) will be displayed on the face of the clock. Default value is NO.
RCT_EXPORT_VIEW_PROPERTY(bridgeEnableDigit, BOOL);
/// If set to YES, a circular hub will be drawn. Default value is NO;
RCT_EXPORT_VIEW_PROPERTY(bridgeEnableHub, BOOL);


//////////////////////////////////////////
//----- CLOCK'S FACE CUSTOMIZATION -----//
//////////////////////////////////////////
// The width of the clock's border.
RCT_EXPORT_VIEW_PROPERTY(bridgeBorderWidth, CGFloat);
// The color of the clock's border.
RCT_EXPORT_VIEW_PROPERTY(bridgeBorderColor, NSNumber);
/// The alpha of the clock's border.
RCT_EXPORT_VIEW_PROPERTY(bridgeBorderAlpha, CGFloat)
// The background color of the clock's face.
RCT_EXPORT_VIEW_PROPERTY(bridgeFaceBackgroundColor, NSNumber);
/// The alpha of the clock's face.
RCT_EXPORT_VIEW_PROPERTY(bridgeFaceBackgroundAlpha, CGFloat);
/// The color of the digits appearing inside the clock
RCT_EXPORT_VIEW_PROPERTY(bridgeDigitColor, NSNumber);
// The offset for the position of the digits on the clock's face. A value >0 will make the digits appear further away from the center of the clock. A valut <0 will make them closer to the center of the clock. Default value is 0.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeDigitOffset, CGFloat);

////////////////////////////////////////
//----- HOURS HAND CUSTOMIZATION -----//
////////////////////////////////////////
/// The color of the clock's hour hand. Default value is whiteolor.
RCT_EXPORT_VIEW_PROPERTY(bridgeHourHandColor, NSNumber);
/// The alpha of the clock's hour hand. Default value is 1.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeHourHandAlpha, CGFloat);
/// The width of the clock's hour hand. Default value is 4.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeHourHandWidth, CGFloat);
/// The length of the clock's hour hand. Default value is 30.
RCT_EXPORT_VIEW_PROPERTY(bridgeHourHandLength, CGFloat);
/// The length of the offside part of the clock's hour hand. Default value is 10.
RCT_EXPORT_VIEW_PROPERTY(bridgeHourHandOffsideLength, CGFloat);


////////////////////////////////////////
//----- MINUTES HAND CUSTOMIZATION -----//
////////////////////////////////////////
/// The color of the clock's minute hand. Default value is whiteColor.
RCT_EXPORT_VIEW_PROPERTY(bridgeMinuteHandColor, NSNumber);
/// The alpha of the clock's minute hand. Default value is 1.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeMinuteHandAlpha, CGFloat);
/// The width of the clock's minute hand. Default value is 3.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeMinuteHandWidth, CGFloat);
/// The length of the clock's minute hand. Default value is 55.
RCT_EXPORT_VIEW_PROPERTY(bridgeMinuteHandLength, CGFloat);
/// The length of the offside part of the clock's minute hand. Default value is 20.
RCT_EXPORT_VIEW_PROPERTY(bridgeMinuteHandOffsideLength, CGFloat);


//////////////////////////////////////////
//----- SECONDS HAND CUSTOMIZATION -----//
//////////////////////////////////////////
/// The color of the clock's second hand. Default value is whiteColor.
RCT_EXPORT_VIEW_PROPERTY(bridgeSecondHandColor, NSNumber);
/// The alpha of the clock's second hand. Default value is 1.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeSecondHandAlpha, CGFloat);
/// The width of the clock's second hand. Default value is 1.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeSecondHandWidth, CGFloat);
/// The length of the clock's second hand. Default value is 60.
RCT_EXPORT_VIEW_PROPERTY(bridgeSecondHandLength, CGFloat);
/// The length of the offside part of the clock's second hand. Default value is 20.
RCT_EXPORT_VIEW_PROPERTY(bridgeSecondHandOffsideLength, CGFloat);

/////////////////////////////////
//----- HUB CUSTOMIZATION -----//
/////////////////////////////////
/// The color of the hub. Default value is whiteColor.
RCT_EXPORT_VIEW_PROPERTY(bridgeHubColor, NSNumber);
/// The alpha of the clock's hub. Default value is 1.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeHubAlpha, CGFloat);
/// The width of the clock's hub. Default value is 3.0.
RCT_EXPORT_VIEW_PROPERTY(bridgeHubRadius, CGFloat);

///////////////////////////////
//----- JS side actions -----//
///////////////////////////////
/// Start the real time feature. The clock will be updated in real time (the second hand will move every second, the minute one every minute and the hour one every hour).
RCT_EXPORT_METHOD(startRealTime) {
  [_AnalogClock startRealTime];
};

/// Stops the real time feature. The clock will not move anymore.
RCT_EXPORT_METHOD(stopRealTime) {
  [_AnalogClock stopRealTime];
};

/// restart clock and (if real time is activated) FORCE to update to real time - with animation - to current time (startRealTimeClock mehtod would just resume from where it was stopped)
RCT_EXPORT_METHOD(reloadRealTime) {
  [_AnalogClock reloadRealTime];
};

@end