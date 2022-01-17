import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { EmployeeProvider } from "./context/employeeContext";
import ErrorBoundary from "./pages/Error/error-boundary";
import Home from "./pages/home";
import Employee from "./pages/employee";
import Menu from "./components/menu/menu";
import Header from "./components/header/header";

/**
 * This function combines Menu, Header and Router component  
 * Employee Provides the child components the context to share the employee Data across the application
 * Router redirects to home and create Employee page
 * @returns App Element that is rendered on the Screen
 */
function App() {
  return (
    <div>
      <Menu></Menu>
      <Header></Header>

      <EmployeeProvider>
        <Router>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Employee />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </EmployeeProvider>
    </div>
  )
}

export default App;
