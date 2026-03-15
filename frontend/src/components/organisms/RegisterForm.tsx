import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerCall } from '../../api/auth';
import { loginSuccess } from '../../store/authSlice';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { Button } from '../atoms/Button';
import { Card } from '../atoms/Card';

const registerSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['PARTICIPANT', 'JUDGE']),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: 'PARTICIPANT' }
  });

  const registerMutation = useMutation({
    mutationFn: registerCall,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      navigate('/dashboard');
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    registerMutation.mutate(data);
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <Card.Header>
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" {...register('username')} error={errors.username?.message} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} error={errors.email?.message} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register('password')} error={errors.password?.message} />
          </div>
          <div>
            <Label htmlFor="role">Account Type</Label>
            <select
              id="role"
              {...register('role')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border"
            >
              <option value="PARTICIPANT">Participant</option>
              <option value="JUDGE">Judge</option>
            </select>
          </div>
          
          {registerMutation.isError && (
            <div className="p-3 bg-red-100 text-red-700 text-sm rounded-md">
              Registration failed. Username or email may exist.
            </div>
          )}

          <Button type="submit" variant="primary" className="w-full" disabled={registerMutation.isPending}>
            {registerMutation.isPending ? 'Creating account...' : 'Sign Up'}
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};
