import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useRouteError
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/Dashboard';
import Client from './pages/Client';
import Vendor from './pages/Vendor';
import {goerli} from 'wagmi/chains';

import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Spooky Subs",
    alchemyId,
    chains: [goerli]
  }),
);
function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route errorElement={<ErrorBoundary />} index element={<Dashboard/>} />
      <Route path="client" element={<Client/>} />
      <Route path="vendor" element={<Vendor/>} />
    </Route>
  )
)

const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <RouterProvider router={router} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
export default App;
