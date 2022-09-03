import './App.css';

import { ThemeProvider } from '@mui/material';
import mode from './styles/theme';

import ResponsiveAppBar from './components/navBar';
import OldBar from './components/oldBar';
// import Img from './components/img';

function App() {
  return (
    <ThemeProvider theme={mode}>
      {/* <OldBar /> */}
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
