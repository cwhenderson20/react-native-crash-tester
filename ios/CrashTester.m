#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CrashTester, NSObject)

RCT_EXTERN_METHOD(nativeCrash:(NSString *)message)

RCT_EXPORT_METHOD(nativeException:(NSString *)message) {
  NSLog(@"Raising test exception");
  [NSException raise:@"Native Exception" format:@"%@", [message description]];
}

@end
