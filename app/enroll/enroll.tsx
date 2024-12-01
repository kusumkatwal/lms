"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { registerUser } from '../api/api';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    role: 'student',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      if (response.success) {
        toast.success('User registered successfully');
        console.log('User registered successfully:', response);
        setFormData({
          name: '',
          email: '',
          phone: '',
          dob: '',
          address: '',
          role: 'student',
          password: '',
          confirmPassword: '',
        });
      } else {
        toast.error(response.message);
        console.error('Error registering user:', response.message);
      }
    } catch (error) {
      toast.error('Error registering user');
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="my-5 flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name" 
                className="bg-secondary"
              />
            </div>
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
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="bg-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input 
                id="dob"
                type="date"
                value={formData.dob}
                onChange={handleInputChange}
                className="bg-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input 
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="bg-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <RadioGroup defaultValue="student" className="flex space-x-4" onChange={handleRoleChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="teacher" id="teacher" />
                  <Label htmlFor="teacher">Teacher</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password" 
                className="bg-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password" 
                className="bg-secondary"
              />
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Register
            </Button>
          </form>
          <ToastContainer />
        </CardContent>
      </Card>
    </div>
  )
}