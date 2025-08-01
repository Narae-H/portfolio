import 'normalize.css';
import './App.css';


import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './components/Layout';
import { ThemeManager } from './components/providers/ThemeManager';

function App() {
  const queryClient = new QueryClient(); 

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ThemeManager>
        <Layout/>
      </ThemeManager>
    </QueryClientProvider>
    </>
  );
}

export default App;
