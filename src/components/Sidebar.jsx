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
  Zap, 
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
      <div style={{ padding: '1.4rem 1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
            padding: '0.6rem',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.45)'
          }}>
            <Zap size={20} color="#050811" strokeWidth={2.5} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)' }}>
              Lend<span style={{ color: '#10B981' }}>Pulse</span><span style={{ color: '#06B6D4', fontSize: '0.9rem' }}>.ai</span>
            </h1>
            <p style={{ fontSize: '0.675rem', color: '#64748B', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Credit Risk Intelligence
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
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.15) 100%)' 
                    : 'rgba(255, 255, 255, 0.06)'
                  : 'transparent',
                border: isActive ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              })}
            >
              <Icon size={18} style={{ color: item.highlight ? '#10B981' : 'inherit' }} />
              <span>{item.label}</span>
              {item.highlight && (
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.625rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: '#FFFFFF',
                  padding: '2px 7px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Live AI
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Backend Status Footer */}
      <div style={{ padding: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.07)', background: 'rgba(5, 8, 17, 0.7)' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '12px',
          padding: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <Radio size={18} color={isHealthy ? '#10B981' : '#EF4444'} className={isHealthy ? 'animate-pulse' : ''} />
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F1F5F9' }}>
              LendPulse Inference Core
            </div>
            <div style={{ fontSize: '0.7rem', color: isHealthy ? '#34D399' : '#F87171', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: isHealthy ? '#10B981' : '#EF4444',
                display: 'inline-block',
                boxShadow: isHealthy ? '0 0 8px #10B981' : 'none'
              }}></span>
              {isHealthy ? 'Models Synchronized' : 'Standalone Mode'}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
