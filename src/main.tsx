//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import HorseShowPage from "./HorseShowPage2.tsx"
//import ToDo, { Todo } from "./ToDo.tsx"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <HorseShowPage />
</QueryClientProvider>,
);

  //<ReactQueryDevtools initialIsOpen={true} />