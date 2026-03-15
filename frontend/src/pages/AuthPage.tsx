import React, { useState } from 'react';
import { LoginForm } from '../components/organisms/LoginForm';
import { RegisterForm } from '../components/organisms/RegisterForm';
import { Button } from '../components/atoms/Button';

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          HackPlatform Auth Portal
        </h2>
        <div className="flex justify-center mt-4 mb-2 space-x-2">
          <Button 
            variant={isLogin ? 'primary' : 'secondary'} 
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </Button>
          <Button 
            variant={!isLogin ? 'primary' : 'secondary'} 
            onClick={() => setIsLogin(false)}
          >
            Create Account
          </Button>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};
