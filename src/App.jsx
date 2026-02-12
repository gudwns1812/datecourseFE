import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import useAuthStore from './stores/authStore';

// Views
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import RandomCourseView from './views/RandomCourseView';
import AuthHomeView from './views/AuthHomeView';

function RequireAuth({ children }) {
    const { isLogin, initialized } = useAuthStore();
    const location = useLocation();

    if (!initialized) {
        return <div>Loading...</div>; // Or a proper loading spinner
    }

    if (!isLogin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

function App() {
    const { init, isLogin } = useAuthStore();

    useEffect(() => {
        init();
    }, [init]);

    return (
        <Router>
            <RoutesWrapper isLogin={isLogin} />
        </Router>
    );
}

function RoutesWrapper({ isLogin }) {
    const location = useLocation();

    // Redirect to /home-auth if logged in and visiting home
    if (location.pathname === '/' && isLogin) {
        return <Navigate to="/home-auth" replace />;
    }

    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />

            {/* Protected Routes */}
            <Route
                path="/random-course"
                element={
                    <RequireAuth>
                        <RandomCourseView />
                    </RequireAuth>
                }
            />
            <Route
                path="/home-auth"
                element={
                    <RequireAuth>
                        <AuthHomeView />
                    </RequireAuth>
                }
            />
        </Routes>
    );
}

export default App;
