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
#import "RCTViewManager.h"
#import "UIView+React.h"

@interface RNAnalogClockManager() <BEMAnalogClockDelegate>

@end

@implementation RNAnalogClockManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[RNAnalogClock alloc] init];
}

/// READ ONLY : If set to YES, the clock real time feature is activated.
RCT_EXPORT_VIEW_PROPERTY(realTimeIsActivated, BOOL)

@end