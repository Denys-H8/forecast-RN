jest.mock('@react-native-firebase/auth', () =>
  jest.fn(() => ({
    signOut: jest.fn(() => Promise.resolve()),
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  })),
);

export {};
