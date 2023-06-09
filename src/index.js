import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'Redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    main: '#212121',
    second: 'mediumseagreen',
    accent: 'orangered',
    error: 'red',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook">
        <Provider store={store}>
          {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
          <App />
          {/* </PersistGate> */}
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
