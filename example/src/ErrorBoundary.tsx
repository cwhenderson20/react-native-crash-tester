import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = {
  onError?(error: any, errorInfo: any): void;
  onReset(): void;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.props.onError && this.props.onError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Something went wrong</Text>
          <Button
            title="Reset"
            onPress={() => {
              this.props.onReset();
              this.setState({ hasError: false });
            }}
          />
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
