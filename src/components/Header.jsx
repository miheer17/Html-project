import React from 'react';
import { Cpu, CheckCircle2, AlertTriangle, Sun, Moon, Menu, Landmark } from 'lucide-react';

const Header = ({ title, subtitle, isHealthy, selectedModel = "Random Forest", theme, toggleTheme, onToggleSidebar }) => {
  return (
    <header 
      className="header-container"
      style={{
        height: '70px',
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-card)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.75rem',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: 'var(--shadow-sm)',
        transition: 'background 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
        {/* Mobile Hamburger Menu Button */}
        <button 
          onClick={onToggleSidebar}
          className="mobile-menu-btn"
          aria-label="Open Navigation Menu"
        >
          <Menu size={22} />
        </button>

        <div style={{ minWidth: 0 }}>
          <h2 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 800, 
            color: 'var(--text-main)', 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis'
          }}>
            {title}
          </h2>
          {subtitle && (
            <p className="desktop-only" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
        {/* Theme Switcher Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-color)',
            padding: '0.45rem 0.8rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--text-main)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          title="Toggle Light / Dark Theme"
        >
          {theme === 'dark' ? (
            <>
              <Sun size={14} color="#FBBF24" />
              <span className="header-badge-text">Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={14} color="#2563EB" />
              <span className="header-badge-text">Dark Mode</span>
            </>
          )}
        </button>

        {/* ML Model Indicator Pill */}
        <div 
          className="desktop-only"
          style={{
            background: 'rgba(37, 99, 235, 0.08)',
            border: '1.5px solid rgba(37, 99, 235, 0.25)',
            padding: '0.45rem 0.85rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.775rem',
            color: 'var(--accent-primary)',
            fontWeight: 700
          }}
        >
          <Cpu size={14} />
          <span>Classifier: <strong>{selectedModel}</strong></span>
        </div>

        {/* System Health Badge */}
        <div style={{
          background: isHealthy ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          border: isHealthy ? '1.5px solid rgba(16, 185, 129, 0.3)' : '1.5px solid rgba(239, 68, 68, 0.3)',
          padding: '0.45rem 0.85rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.775rem',
          color: isHealthy ? 'var(--risk-low)' : 'var(--risk-high)',
          fontWeight: 700
        }}>
          {isHealthy ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
          <span className="header-badge-text">{isHealthy ? 'Loan Engine Live' : 'Standalone Mode'}</span>
        </div>

        {/* Loan Project Brand Logo (Replaced MS) */}
        <div 
          className="desktop-only"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            paddingLeft: '0.85rem',
            borderLeft: '1.5px solid var(--border-color)'
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(37, 99, 235, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <Landmark size={20} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>
              Credit Underwriter
            </div>
            <div style={{ fontSize: '0.675rem', color: 'var(--text-dim)', fontWeight: 600 }}>
              Loan Risk Division
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
