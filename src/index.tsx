import { NativeModules } from 'react-native';

type CrashTesterType = {
  nativeCrash(): void;
};

const { CrashTester } = NativeModules;

export default CrashTester as CrashTesterType;
