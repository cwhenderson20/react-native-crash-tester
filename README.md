# react-native-crash-tester

Deliberately crash your app. Good for testing crash reporting services.

## Installation

```sh
npm install react-native-crash-tester
```

or

```sh
yarn add react-native-crash-tester
```

## Usage

### Trigger a Native Crash

```js
import CrashTester from 'react-native-crash-tester';

CrashTester.nativeCrash();
CrashTester.nativeCrash('Custom message!');
```

Implementation notes:

- For Android, throws a `RuntimeException`
- For iOS, calls [`fatalError`](https://developer.apple.com/documentation/swift/fatalerror(_:file:line:)) which causes a non-recoverable crash

### Trigger a Native Exception

```js
import CrashTester from 'react-native-crash-tester';

CrashTester.nativeException();
CrashTester.nativeException('Custom message!');
```

Implementation notes:

- For Android, throws a `RuntimeException`
- For iOS, raises a [`NSException`](https://developer.apple.com/documentation/foundation/nsexception), which can potentially be caught by an exception handler

### Trigger a JavaScript Crash

```js
import CrashTester from 'react-native-crash-tester';

CrashTester.jsCrash();
CrashTester.jsCrash('Custom message!');
```

Implementation notes:

- Calls `throw Error` to trigger an exception

### Test a React Error Boundary

```js
import * as React from 'react';
import { Button } from 'react-native';
import { CrashingComponent } from 'react-native-crash-tester';
import ErrorBoundary from './MyErrorBoundary';

function TestComponent() {
  const [shown, setShown] = React.useState(false);

  <ErrorBoundary>
    <Button title="Crash" onPress={() => setShown(true)} />
    {shown && <CrashingComponent />}
  </ErrorBoundary>;
}
```

Implementation notes:

- Mounts a `<View>''</View>` component which will throw an exception

You can run the app in `./example` to see sample usage.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
