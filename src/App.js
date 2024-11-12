
import React, { useState } from 'react';
import SignupForm from './components/SignUp';
import LoginForm from './components/Login';
import './index.css';

const App = () => {
    const [isSignup, setIsSignup] = useState(true);

    const switchToLogin = () => {
        setIsSignup(false);
    };

    const switchToSignup = () => {
        setIsSignup(true);
    };

    return (
        <div className="bg-green-300 items-center h-screen">
            <div className="max-w-lg mx-auto p-8 bg-white rounded shadow">
                {isSignup ? (
                    <SignupForm onSwitchToLogin={switchToLogin} />
                ) : (
                    <LoginForm onSwitchToSignup={switchToSignup} />
                )}
            </div>
            <div>
                <Router>
      <Route exact path="/" component={Login} />
      <Route path="/admin" render={() => {
        const token = localStorage.getItem('token');
        return token ? <AdminPanel /> : <Redirect to="/" />;
      }} />
    </Router>
            </div>
        </div>
    );
};

export default App;
