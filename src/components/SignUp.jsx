import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ onSwitchToLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', { username, email, password });
            setMessage("User created successfully! Please login with your credentials.");
        } catch (error) {
            setMessage("User already exists! Please login with your credentials.");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            <form onSubmit={handleSignup} className="mb-4">
                <label className="block mb-2" htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-md" 
                    required 
                />
                <br />
                <label className="block mb-2" htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-md" 
                    required 
                />
                <br />
                <label className="block mb-2 mt-4" htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-md" 
                    required 
                />
                <br />
                <button 
                    type="submit" 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Signup
                </button>
            </form>
            {message && <p className="text-red-500">{message}</p>}
            <div>
                Already have an account? 
                <button onClick={onSwitchToLogin} className="text-blue-500 hover:underline">
                    Login
                </button>
            </div>
        </div>
    );
};

export default SignupForm;
