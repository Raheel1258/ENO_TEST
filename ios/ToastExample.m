//
//  ToastExample.m
//  ENO_TEST
//
//  Created by Sparrow on 15/07/2022.
//

#import "ToastExample.h"
#import <React/RCTLog.h>

@implementation ToastExample

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)message)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", message);
}

@end
