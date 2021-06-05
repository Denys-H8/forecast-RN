jest.mock('@react-native-firebase/messaging', () =>
  jest.fn(() => ({
    setBackgroundMessageHandler: jest.fn(),
    onMessage: jest.fn(),
    onNotificationOpenedApp: jest.fn(),
    getInitialNotification: jest.fn(() => Promise.resolve(true)),
  })),
);

export {};
