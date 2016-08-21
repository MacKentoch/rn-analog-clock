//
//  RNAnalogClock.h
//  RNAnalogClock
//
//  Created by MacKentoch on 12/08/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RCTComponent.h"
#import "BEMAnalogClockView.h"

@interface RNAnalogClock: BEMAnalogClockView

///////////////////////////////////
//----- EVENTS (send to JS) -----//
///////////////////////////////////
@property (nonatomic, copy) RCTBubblingEventBlock onClockTick;

//////////////////////////////////
//----- GENERAL PROPERTIES -----//
//////////////////////////////////
/// The hours property bridge
@property (nonatomic, assign) NSInteger bridgeHours;
/// The minutes property bridge
@property (nonatomic, assign) NSInteger bridgeMinutes;
/// The seconds property bridge
@property (nonatomic, assign) NSInteger bridgeSeconds;
/// If set to YES, the clock time can be updated via touch inputs. Default value is NO.
@property (nonatomic, assign) BOOL bridgeSetTimeViaTouch;
/// If set to YES, the clock will be set to the current time on the phone. Prioritized over setting the time manualy. Default value is NO.
@property (nonatomic, assign) BOOL bridgeCurrentTime;
/// If set to YES, the clock will be updated in real time (the second hand will move every second, the minute hand every minute...). Default value is NO;
@property (nonatomic, assign) BOOL bridgeRealTime;
/// If set to YES, the clock time will suport military time. Default value is NO.
@property (nonatomic, assign) BOOL bridgeMilitaryTime;
/// If set to YES, the hands will cast a shadow. Default value is YES.
@property (nonatomic, assign) BOOL bridgeEnableShadows;
/// If set to YES, the graduation on the clock will be visible. See the methods bellow to costumize the graduations. Default value is YES.
@property (nonatomic, assign) BOOL bridgeEnableGraduations;
/// If set to YES, the digits (1-12) will be displayed on the face of the clock. Default value is NO.
@property (nonatomic, assign) BOOL bridgeEnableDigit;
/// If set to YES, a circular hub will be drawn. Default value is NO;
@property (nonatomic, assign) BOOL bridgeEnableHub;

//////////////////////////////////////////
//----- CLOCK'S FACE CUSTOMIZATION -----//
//////////////////////////////////////////
// The width of the clock's border.
@property (nonatomic, assign) CGFloat bridgeBorderWidth;
// The color of the clock's border.
@property (nonatomic, assign) NSNumber* bridgeBorderColor;
/// The alpha of the clock's border.
@property (nonatomic, assign) CGFloat bridgeBorderAlpha;
// The background color of the clock's face.
@property (nonatomic, assign) NSNumber* bridgeFaceBackgroundColor;
/// The alpha of the clock's face.
@property (nonatomic, assign) CGFloat bridgeFaceBackgroundAlpha;
/// The color of the digits appearing inside the clock
@property (nonatomic, assign) NSNumber* bridgeDigitColor;
// The offset for the position of the digits on the clock's face. A value >0 will make the digits appear further away from the center of the clock. A valut <0 will make them closer to the center of the clock. Default value is 0.0.
@property (nonatomic, assign) CGFloat bridgeDigitOffset;

////////////////////////////////////////
//----- HOURS HAND CUSTOMIZATION -----//
////////////////////////////////////////
/// The color of the clock's hour hand. Default value is whiteolor.
@property (nonatomic, assign) NSNumber* bridgeHourHandColor;
/// The alpha of the clock's hour hand. Default value is 1.0.
@property (nonatomic, assign) CGFloat bridgeHourHandAlpha;
/// The width of the clock's hour hand. Default value is 4.0.
@property (nonatomic, assign) CGFloat bridgeHourHandWidth;
/// The length of the clock's hour hand. Default value is 30.
@property (nonatomic, assign) CGFloat bridgeHourHandLength;
/// The length of the offside part of the clock's hour hand. Default value is 10.
@property (nonatomic, assign) CGFloat bridgeHourHandOffsideLength;

////////////////////////////////////////
//----- MINUTES HAND CUSTOMIZATION -----//
////////////////////////////////////////
/// The color of the clock's minute hand. Default value is whiteColor.
@property (nonatomic, assign) NSNumber* bridgeMinuteHandColor;
/// The alpha of the clock's minute hand. Default value is 1.0.
@property (nonatomic, assign) CGFloat bridgeMinuteHandAlpha;
/// The width of the clock's minute hand. Default value is 3.0.
@property (nonatomic, assign) CGFloat bridgeMinuteHandWidth;
/// The length of the clock's minute hand. Default value is 55.
@property (nonatomic, assign) CGFloat bridgeMinuteHandLength;
/// The length of the offside part of the clock's minute hand. Default value is 20.
@property (nonatomic, assign) CGFloat bridgeMinuteHandOffsideLength;

//////////////////////////////////////////
//----- SECONDS HAND CUSTOMIZATION -----//
//////////////////////////////////////////
/// The color of the clock's second hand. Default value is whiteColor.
@property (nonatomic, assign) NSNumber* bridgeSecondHandColor;
/// The alpha of the clock's second hand. Default value is 1.0.
@property (nonatomic, assign) CGFloat bridgeSecondHandAlpha;
/// The width of the clock's second hand. Default value is 1.0.
@property (nonatomic, assign) CGFloat bridgeSecondHandWidth;
/// The length of the clock's second hand. Default value is 60.
@property (nonatomic, assign) CGFloat bridgeSecondHandLength;
/// The length of the offside part of the clock's second hand. Default value is 20.
@property (nonatomic, assign) CGFloat bridgeSecondHandOffsideLength;

/////////////////////////////////
//----- HUB CUSTOMIZATION -----//
/////////////////////////////////
/// The color of the hub. Default value is whiteColor.
@property (nonatomic, assign) NSNumber* bridgeHubColor;
/// The alpha of the clock's hub. Default value is 1.0.
@property (nonatomic, assign) CGFloat bridgeHubAlpha;
/// The width of the clock's hub. Default value is 3.0.
@property (nonatomic, assign) CGFloat bridgeHubRadius;

/////////////////////////////////////////
//----- GRADUATIONS CUSTOMIZATION -----//
/////////////////////////////////////////
/// The index modulo to accent graduations (= 5 by default)
@property (nonatomic, assign) NSInteger accentGraduationModulo;
/// The color of the accented graduations (every accentGraduationModulo graduations)

//@property (nonatomic, assign) UIColor* highGraduationColor; // property
//@property (nonatomic, assign) NSNumber* bridgeHighGraduationColor; // bridged property since UIColor does not exists in JS world
///// The color of the non accented graduations (every accentGraduationModulo graduations)
//@property (nonatomic, assign) UIColor* smallGraduationColor; // property
//@property (nonatomic, assign) NSNumber* bridgeSmallGraduationColor; // bridged property since UIColor does not exists in JS world
/// The width of the accented graduations (every accentGraduationModulo graduations)

@property (nonatomic, assign) CGFloat highGraduationWidth;
/// The width of the non accented graduations (every accentGraduationModulo graduations)
@property (nonatomic, assign) CGFloat smallGraduationWidth;
/// The length of the accented graduations (every accentGraduationModulo graduations)
@property (nonatomic, assign) CGFloat highGraduationLength;
/// The length of the non accented graduations (every accentGraduationModulo graduations)
@property (nonatomic, assign) CGFloat smallGraduationLength;


//////////////////////////////
//----- Initialization -----//
//////////////////////////////
-(void) initWithDefaultConfig: (BOOL) animated
       accentGraduationModulo: (NSInteger) accentGraduationModulo
        smallGraduationLength: (CGFloat) smallGraduationLength
         highGraduationLength: (CGFloat) highGraduationLength
         smallGraduationWidth: (CGFloat) smallGraduationWidth
          highGraduationWidth: (CGFloat) highGraduationWidth;

///////////////////////////////////
//----- reload clock action -----//
///////////////////////////////////
-(void) reloadRealTime;

@end
