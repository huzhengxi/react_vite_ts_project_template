import React from 'react';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';

import Counter from './features/Counter/index';
import './features/Counter/index.module.scss';
import DocumentList from './features/DocumentList';
import { history, store } from './store';

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/doclist" element={<DocumentList />} />
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  );
};

export default App;
