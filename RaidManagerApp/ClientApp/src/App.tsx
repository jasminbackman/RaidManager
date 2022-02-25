import { createTheme, Grid, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import NoMatch from "./pages/NoMatch";
import Raiders from "./pages/Raiders";
import Raids from "./pages/Raids";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="raids" element={<Raids />}/>
            <Route path="raiders" element={<Raiders />}/>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
