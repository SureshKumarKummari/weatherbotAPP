
// import React, { useState } from 'react';
// import SignupForm from './components/SignUp';
// import LoginForm from './components/Login';
// import './index.css';

// const App = () => {
//     const [isSignup, setIsSignup] = useState(true);

//     const switchToLogin = () => {
//         setIsSignup(false);
//     };

//     const switchToSignup = () => {
//         setIsSignup(true);
//     };

//     return (
//         <div className="bg-green-300 items-center h-screen">
//             <div className="max-w-lg mx-auto p-8 bg-white rounded shadow">
//                 {isSignup ? (
//                     <SignupForm onSwitchToLogin={switchToLogin} />
//                 ) : (
//                     <LoginForm onSwitchToSignup={switchToSignup} />
//                 )}
//             </div>
//             <div>
//                 <Router>
//       <Route exact path="/" component={Login} />
//       <Route path="/admin" render={() => {
//         const token = localStorage.getItem('token');
//         return token ? <AdminPanel /> : <Redirect to="/" />;
//       }} />
//     </Router>
//             </div>
//         </div>
//     );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Redirect, useNavigate } from 'react-router-dom'; // Import Router & useHistory
import SignupForm from './components/SignUp';
import LoginForm from './components/Login';
import AdminPanel from './components/AdminPanel'; // Assuming you have AdminPanel component
import './index.css';

const App = () => {
    const [isSignup, setIsSignup] = useState(true);
    const history = useNavigate(); // Hook to manage navigation

    const switchToLogin = () => {
        setIsSignup(false);
    };

    const switchToSignup = () => {
        setIsSignup(true);
    };

     const handleLoginSuccess = () => {
        // On successful login, redirect to Admin Panel
        history.push('/admin');
    };

    return (
        <Router>
            <div className="bg-green-300 items-center h-screen">
                <div className="max-w-lg mx-auto p-8 bg-white rounded shadow">
                    {/* Show either Signup or Login Form */}
                    {isSignup ? (
                        <SignupForm onSwitchToLogin={switchToLogin} />
                    ) : (
                        <LoginForm onSwitchToSignup={switchToSignup} onLoginSuccess={handleLoginSuccess} />
                    )}
                </div>
            </div>

            {/* Route for Admin Panel */}
            <Route
                path="/admin"
                render={() => {
                    const token = localStorage.getItem('token');
                    return token ? <AdminPanel /> : <Redirect to="/" />; // Redirect to login if no token
                }}
            />
        </Router>
    );

};

export default App;
