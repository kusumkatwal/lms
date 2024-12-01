import axios from 'axios';
import { toast } from 'react-toastify';

// Set base URL for axios
axios.defaults.baseURL = 'http://localhost:3001/api';

// Utility to handle token storage
const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('token', token); // Save token to local storage
    } else {
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('token'); // Remove token if null/undefined
    }
};

// Register user API call
const registerUser = async (data) => {
    try {
        const response = await axios.post('/register', data);
        toast.success('Registration successful!');
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        if (error.response) {
            toast.error(error.response.data.message || 'Registration failed');
        } else {
            toast.error('Server error. Please try again later.');
        }
        throw error; // Re-throw error for further handling if needed
    }
};

// Login user API call with redirection
const loginUser = async (data, navigate) => {
    try {
        const response = await axios.post('/login', data);
        const { token, role } = response.data;
        setAuthorizationToken(token);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        if (error.response) {
            toast.error(error.response.data.message || 'Login failed');
        } else {
            toast.error('Server error. Please try again later.');
        }
        throw error; // Re-throw error for further handling if needed
    }
};

// Logout user utility
const logoutUser = () => {
    setAuthorizationToken(null); // Clear token
    toast.info('You have been logged out.');
};

const addCourses = async(data) => {
    try{
        const response = await axios.post("http://localhost:3001/api/courses", data);
        console.log(response.data);
        return response.data;
    }catch(error)
    {
        console.log(error);
    }
}

export { registerUser, loginUser, logoutUser, addCourses };
