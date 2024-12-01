"use client";
import { useRouter } from 'next/navigation'; // For Next.js navigation
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { loginUser } from '../api/api';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter(); // For navigation

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log(response);
      if (response.success) {
        toast.success('User logged in successfully');
        console.log('User logged in successfully:', response);
        setFormData({
          email: '',
          password: '',
        });
        // Redirect based on role
        if (response.result.role === 'teacher') {
          router.push('/teacher-dashboard'); // Redirect to teacher dashboard
        } else if (response.result.role === 'student') {
          router.push(''); // Redirect to student dashboard
        } else {
          toast.warn('Role not recognized. Redirecting to the home page.');
          router.push('/'); // Fallback to home page
        }

        // Clear form
       
      } else {
        toast.error(response.message);
        console.error('Error logging in user:', response.message);
      }
    } catch (error) {
      toast.error('Error logging user');
      console.error('Error logging in user:', error);
    }
  };

  return (
    <div className="my-5 flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                className="bg-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password" 
                className="bg-secondary"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Login
            </Button>
          </form>
          <ToastContainer />
        </CardContent>
      </Card>
    </div>
  );
}
