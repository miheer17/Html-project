import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Compass, 
  Cpu, 
  Database, 
  BarChart2, 
  ShieldCheck, 
  Archive, 
  Terminal, 
  Landmark, 
  X,
  Radio
} from 'lucide-react';

const Sidebar = ({ isHealthy, isOpen, onClose }) => {
  const navItems = [
    { path: '/', label: 'Executive Hub', icon: Compass },
    { path: '/prediction', label: 'Credit Underwriter', icon: Cpu, highlight: true },
    { path: '/loans', label: 'Loan Registry', icon: Database },
    { path: '/analytics', label: 'Model Benchmarks', icon: BarChart2 },
    { path: '/risk-analysis', label: 'Exposure Matrix', icon: ShieldCheck },
    { path: '/reports', label: 'Audit & Exports', icon: Archive },
    { path: '/profile', label: 'System & Diagnostics', icon: Terminal },
  ];

  return (
    <aside className={`app-sidebar ${isOpen ? 'mobile-open' : ''}`}>
      {/* Brand Header */}
      <div style={{ padding: '1.4rem 1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            padding: '0.65rem',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(37, 99, 235, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <Landmark size={20} color="#FFFFFF" strokeWidth={2.2} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
              Capital<span style={{ color: '#3B82F6' }}>Pulse</span><span style={{ color: '#F59E0B', fontSize: '0.9rem' }}>.ai</span>
            </h1>
            <p style={{ fontSize: '0.675rem', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Loan Default Analytics
            </p>
          </div>
        </div>

        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="mobile-close-btn"
          aria-label="Close Sidebar"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav style={{ padding: '1.25rem 0.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#FFFFFF' : '#94A3B8',
                background: isActive 
                  ? item.highlight 
                    ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.3) 0%, rgba(29, 78, 216, 0.2) 100%)' 
                    : 'rgba(255, 255, 255, 0.07)'
                  : 'transparent',
                border: isActive ? '1px solid rgba(59, 130, 246, 0.35)' : '1px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              })}
            >
              <Icon size={18} style={{ color: item.highlight ? '#3B82F6' : 'inherit' }} />
              <span>{item.label}</span>
              {item.highlight && (
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.625rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                  color: '#FFFFFF',
                  padding: '2px 7px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  ML Core
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Backend Status Footer */}
      <div style={{ padding: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(6, 11, 24, 0.7)' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '12px',
          padding: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <Radio size={18} color={isHealthy ? '#34D399' : '#EF4444'} className={isHealthy ? 'animate-pulse' : ''} />
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F1F5F9' }}>
              CapitalPulse ML Service
            </div>
            <div style={{ fontSize: '0.7rem', color: isHealthy ? '#34D399' : '#F87171', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: isHealthy ? '#34D399' : '#EF4444',
                display: 'inline-block',
                boxShadow: isHealthy ? '0 0 8px #34D399' : 'none'
              }}></span>
              {isHealthy ? 'Engine Connected' : 'Standalone Mode'}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
