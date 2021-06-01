@objc(CrashTester)
class CrashTester: NSObject {

    @objc(nativeCrash:)
    func nativeCrash(_ message: String = "") -> Void {
        fatalError(message)
    }
}
