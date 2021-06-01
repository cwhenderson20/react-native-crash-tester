#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CrashTester, NSObject)

RCT_EXTERN_METHOD(nativeCrash:(NSString *)message)

@end
