import * as React from 'react';
import {
  Button as NativeButton,
  ButtonProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import CrashTester, { CrashingComponent } from 'react-native-crash-tester';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
  const [renderCrashComponent, setRenderCrashComponent] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Button
          onPress={() => CrashTester.nativeCrash()}
          title="Native Crash"
        />
        <Button
          onPress={() => CrashTester.nativeCrash('Custom message!')}
          title="Native Crash with Message"
          style={styles.buttonLast}
        />
      </View>
      <View style={styles.section}>
        <Button onPress={() => CrashTester.jsCrash()} title="JS Crash" />
        <Button
          onPress={() => CrashTester.jsCrash('Custom message!')}
          title="JS Crash with Message"
        />
        <ErrorBoundary onReset={() => setRenderCrashComponent(false)}>
          <Button
            onPress={() => setRenderCrashComponent(true)}
            title="React Component Crash"
            style={styles.buttonLast}
          />
          {renderCrashComponent && <CrashingComponent />}
        </ErrorBoundary>
      </View>
    </View>
  );
}

function Button({
  style,
  ...buttonProps
}: { style?: StyleProp<ViewStyle> } & ButtonProps) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <NativeButton {...buttonProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  section: {
    backgroundColor: '#eee',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    marginBottom: 8,
  },
  buttonLast: {
    marginBottom: 0,
  },
});
