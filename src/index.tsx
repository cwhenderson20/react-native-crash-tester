import { NativeModules } from 'react-native';

const { CrashTester: NativeModule } = NativeModules;

const CrashTester = {
  nativeCrash(message = '') {
    NativeModule.nativeCrash(message);
  },
  nativeException(message = '') {
    NativeModule.nativeException(message);
  },
  jsCrash(message?: string) {
    throw new Error(message);
  },
};

export default CrashTester;
export { default as CrashingComponent } from './CrashingComponent';
