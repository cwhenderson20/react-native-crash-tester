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

### Trigger a JavaScript Crash

```js
import CrashTester from 'react-native-crash-tester';

CrashTester.jsCrash();
CrashTester.jsCrash('Custom message!');
```

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

You can run the app in `./example` to see sample usage.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
