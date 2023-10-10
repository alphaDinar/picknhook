import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();
export const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  return (
    <LoaderContext.Provider value={{loader,setLoader}}>
      {children}
    </LoaderContext.Provider>
  );
};
export const useLoader = () => {
  return useContext(LoaderContext);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
