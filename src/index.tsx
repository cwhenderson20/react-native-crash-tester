import { NativeModules } from 'react-native';

type CrashTesterType = {
  multiply(a: number, b: number): Promise<number>;
};

const { CrashTester } = NativeModules;

export default CrashTester as CrashTesterType;
