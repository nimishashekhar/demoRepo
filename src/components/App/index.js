import React from 'react';
import Routes from '../Routes';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
