import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import Profile from './pages/Profile';


import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Spooky Subs",
    alchemyId,
  }),
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard/>} />
      <Route path="create" element={<Create/>} />
      <Route path="profile" element={<Profile/>} />
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
