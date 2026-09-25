import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Prediction from './pages/Prediction';
import Loans from './pages/Loans';
import LoanDetails from './pages/LoanDetails';
import Analytics from './pages/Analytics';
import RiskAnalysis from './pages/RiskAnalysis';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import apiService from './services/api';
import './styles/index.css';

const pageTitles = {
  '/': { title: 'Executive Risk Hub', subtitle: 'Portfolio risk telemetry and loan default performance' },
  '/prediction': { title: 'Credit Underwriter AI', subtitle: 'Multi-algorithm real-time credit default inference' },
  '/loans': { title: 'Loan Registry', subtitle: 'Audited applicant evaluations & portfolio records' },
  '/analytics': { title: 'Model Benchmark Analytics', subtitle: 'Cross-validated classification metrics & feature weights' },
  '/risk-analysis': { title: 'Risk Exposure Matrix', subtitle: 'Credit risk scoring tiers & default threshold distributions' },
  '/reports': { title: 'Audit & Compliance Reports', subtitle: 'Exportable loan evaluation audit logs' },
  '/profile': { title: 'Lead Architect & System Telemetry', subtitle: 'Underwriter credentials and ML core diagnostics' }
};

function MainLayout() {
  const location = useLocation();
  const [isHealthy, setIsHealthy] = useState(true);
  const [selectedModel, setSelectedModel] = useState('Random Forest');
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close mobile sidebar on route navigation
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    const checkHealth = async () => {
      try {
        const res = await apiService.getHealth();
        setIsHealthy(res.status === 'healthy');
        if (res.selectedModel) setSelectedModel(res.selectedModel);
      } catch (e) {
        setIsHealthy(false);
      }
    };
    checkHealth();
    const interval = setInterval(checkHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  const pageInfo = pageTitles[location.pathname] || { title: 'LendPulse AI', subtitle: 'Credit Risk Intelligence' };

  return (
    <div className="app-container">
      {/* Mobile Drawer Backdrop */}
      <div 
        className={`sidebar-backdrop ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar 
        isHealthy={isHealthy} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="main-content">
        <Header 
          title={pageInfo.title} 
          subtitle={pageInfo.subtitle} 
          isHealthy={isHealthy}
          selectedModel={selectedModel}
          theme={theme}
          toggleTheme={toggleTheme}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/loans/:id" element={<LoanDetails />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/risk-analysis" element={<RiskAnalysis />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
