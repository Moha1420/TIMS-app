import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";


const App = () => {
  // For demonstration, assume user is logged in
  const isLoggedIn = true;

  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        {/* Add more routes for other pages like contact and about */}
      </div>
    </Router>
  );
};

export default App;
