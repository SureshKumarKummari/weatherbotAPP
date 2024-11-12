import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginForm = ({ onSwitchToSignup,onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // Login logic for user
            const response = await axios.get(`http://localhost:3000/login/user/${email}/${password}`);
            localStorage.setItem('user', response.data.email);
            localStorage.setItem('token', response.data.token);
           // window.location.href = 'welcome.html';
        } catch (error) {
            setErrorMessage('Invalid Credentials!');
        }
    };

    const handleForgetPassword = () => {
        window.location.href = 'forgotpassword.html';
    };

    // Function to handle Google login for Admin
    const handleGoogleLogin = (response) => {
        console.log("Google response:", response);
        // Call your backend API to verify the Google token and login as Admin
        axios.post('http://localhost:3001/google-oauth/verify-token', { token: response.credential })
            .then((res) => {
                localStorage.setItem('token', res.data.email);
                //history.push('/admin'); 
                onLoginSuccess();
            })
            .catch((error) => {
                console.log(response.credential);
                console.error("Admin Google login error", error);
                setErrorMessage('Failed to log in as Admin');
            });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Logging in as User</h2>
            <form onSubmit={handleLogin} className="mb-4">
                <label className="block mb-2" htmlFor="login-email">Email:</label>
                <input 
                    type="email" 
                    id="login-email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-md" 
                    required 
                />
                <br />
                <label className="block mb-2 mt-4" htmlFor="login-password">Password:</label>
                <input 
                    type="password" 
                    id="login-password" 
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
                    Login as User
                </button>
            </form>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div>
                Forgot your password? 
                <button onClick={handleForgetPassword} className="text-blue-500 hover:underline">
                    Get password
                </button>
            </div>
            <div>
                New User? 
                <button onClick={onSwitchToSignup} className="text-blue-500 hover:underline">
                    Signup
                </button>
            </div>

            {/* Link to log in as Admin */}
            <div className="mt-6">
                <h3 className="font-semibold">Or login as Admin</h3>
                <GoogleLogin 
                    onSuccess={handleGoogleLogin}
                    onError={() => console.log('Login Failed')}
                    useOneTap
                    theme="outline" 
                />
            </div>
        </div>
    );
};

export default LoginForm;
