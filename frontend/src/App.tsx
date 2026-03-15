import React from 'react';
import { Button } from './components/atoms/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 text-center p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Hackathon Hub
        </h1>
        <p className="text-gray-500 text-sm">
          A premium internal portal for software development hackathons.
        </p>

        <div className="pt-4 space-x-4 flex justify-center">
          <Button variant="primary">Login</Button>
          <Button variant="secondary">View Events</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
