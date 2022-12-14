import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import ListStuff from '../pages/ListStuff';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddStuff from '../pages/AddStuff';
import EditStuff from '../pages/EditStuff';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import SignIn from '../pages/SignIn';
import AllDashboard from '../pages/AllDashboard';
import SavedDashboard from '../pages/SavedDashboard';
import NotAuthorized from '../pages/NotAuthorized';
import BillResolutionTracker from '../pages/BillResolutionTracker';
import AddTestimony from '../pages/AddTestimony';
import Test from '../Test';
import Calendar from '../pages/Calendar';
import SideNavBar from '../components/SideNavBar';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <SideNavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/view/all" element={<AllDashboard />} />
        <Route path="/view/doe" element={<SavedDashboard />} />
        <Route path="/add-testimony" element={<AddTestimony />} />
        <Route path="/view/:_code" element={<BillResolutionTracker />} />
        <Route path="/test" element={<Test />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route
          path="/home"
          element={(
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/list"
          element={(
            <ProtectedRoute>
              <ListStuff />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/add"
          element={(
            <ProtectedRoute>
              <AddStuff />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/edit/:_id"
          element={(
            <ProtectedRoute>
              <EditStuff />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/admin"
          element={(
            <AdminProtectedRoute>
              <ListStuffAdmin />
            </AdminProtectedRoute>
          )}
        />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return isLogged && isAdmin ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  children: <Landing />,
};

export default App;
