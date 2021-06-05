import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { MainNavigator } from 'src/navigation';
import { store, persistedStore } from './store';

import { CustomStatusBar, PushController } from 'src/components';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <PushController>
          <CustomStatusBar />
          <MainNavigator />
        </PushController>
      </PersistGate>
    </Provider>
  );
};

export default App;
