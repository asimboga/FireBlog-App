import React from 'react';
import { ToastContainer } from 'react-toastify';
import AuthContext from './contexts/AuthContext';
import AppRouter from './app-router/AppRouter';

const App = () => {
  return (
    <div>
      {/* <AuthContext.Provider> */}
        <AppRouter/>
        {/* <ToastContainer /> */}
      {/* </AuthContext.Provider> */}
    </div>
  );
};

export default App;
