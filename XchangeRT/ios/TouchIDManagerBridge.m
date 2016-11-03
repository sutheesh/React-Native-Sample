//
//  TouchIdManagerBridge.m
//  XchangeRT
//
//  Created by sutheesh sukumaran on 10/3/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(TouchIDManager, NSObject)

RCT_EXTERN_METHOD(authenticateTID:(NSString *) localString callback:(RCTResponseSenderBlock) callback)

@end
