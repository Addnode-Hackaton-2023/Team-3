import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.css'
import Login from './components/login';
import Vehicle from './components/vehicle';
import Map from './components/map';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/vehicle/:vehicleId",
    element: <Vehicle />,
  },
  {
    path: "/map/:vehicleId",
    element: <Map />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
