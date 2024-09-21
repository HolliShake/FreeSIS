import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from '@/router';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  (<React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={AppRoutes as any} />
    </ChakraProvider>
  </React.StrictMode>) as React.ReactNode
);
