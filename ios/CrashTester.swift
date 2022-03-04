import Foundation

@objc(CrashTester)
class CrashTester: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc(nativeCrash:)
  func nativeCrash(_ message: String = "") -> Void {
      fatalError(message)
  }
}
