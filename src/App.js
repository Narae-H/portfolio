import './App.css';
import 'normalize.css';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeProvider';
import {GlobalStyle} from './theme/GlobalStyle'

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Layout/>
      </ThemeProvider>
    </>
  );
}

export default App;
