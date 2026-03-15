import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/atoms/Button';
import { Card } from '../components/atoms/Card';

export const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Button variant="secondary" onClick={handleLogout}>Log Out</Button>
      </div>

      <Card className="max-w-4xl mx-auto">
        <Card.Header>
          <h2 className="text-xl font-semibold">Welcome, {user?.username}!</h2>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700">You are logged in as a <strong>{user?.role}</strong>.</p>
          <p className="mt-4 text-gray-500">
            More features (Event discovery, team formation, project submissions) will appear here.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};
