import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConvexClientProvider } from './convex/ConvexClientProvider';
import { AuthProvider } from './hooks/useAuth';
import Router from './router';

function App() {
  return (
    <ConvexClientProvider>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ConvexClientProvider>
  );
}

export default App;