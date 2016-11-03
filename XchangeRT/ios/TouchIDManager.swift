//
//  TouchIdManager.swift
//  XchangeRT
//
//  Created by sutheesh sukumaran on 10/3/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation
import LocalAuthentication
@objc(TouchIDManager)
class TouchIDManager :NSObject{
  
  @objc func authenticateTID(localString:String,callback:(NSObject)->Void){
    
    let context = LAContext()
    var authError : NSError?
    if context.canEvaluatePolicy(LAPolicy.DeviceOwnerAuthenticationWithBiometrics, error: &authError) {
      
      context.evaluatePolicy(LAPolicy.DeviceOwnerAuthenticationWithBiometrics, localizedReason: localString, reply: { (success, error) in
        
        if success {
           callback([["status":"success"]])
        }else{
           callback([["status":"error","ErrorCode": (error?.code) ?? 0]])
        }
        
      })
      
      
    }
    
  }
  
}
