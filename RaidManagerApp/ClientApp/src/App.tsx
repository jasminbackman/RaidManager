import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import NavBar from './components/navigation/NavBar';
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
  const links: { name: string, url: string }[] = [
    { name: "Raiders", url: "raiders"}, 
    { name: "Raids", url: "raids" }, 
    { name: "Attendance", url: "attendance" }
  ];
console.log(process.env.REACT_APP_BASE_URL);
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Grid container>

          <NavBar pages={links} />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="raids" element={<Raids />}/>
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>

        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
