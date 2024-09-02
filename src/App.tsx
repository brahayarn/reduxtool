import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UserMain from './components/userMain';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UserMain />  
    </Provider>
  );
};

export default App;
