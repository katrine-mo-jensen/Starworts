import './App.css'
import { Author } from './components/footer/Footer';
import { Main } from "./pages/Main";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Main/>
        <Author/>
      </QueryClientProvider>
    </>
  )
}

export default App
