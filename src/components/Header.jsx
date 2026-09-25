import React from 'react';
import { Cpu, CheckCircle2, AlertTriangle, Sun, Moon, Menu } from 'lucide-react';

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
        padding: '0 1.5rem',
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
            fontSize: '1.15rem', 
            fontWeight: 800, 
            color: 'var(--text-main)', 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis' 
          }}>
            {title}
          </h2>
          {subtitle && (
            <p className="desktop-only" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
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
            border: '1px solid var(--border-color)',
            padding: '0.45rem 0.75rem',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--text-main)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          title="Toggle Light / Dark Theme"
        >
          {theme === 'dark' ? (
            <>
              <Sun size={15} color="#FBBF24" />
              <span className="header-badge-text">Light</span>
            </>
          ) : (
            <>
              <Moon size={15} color="#6366F1" />
              <span className="header-badge-text">Dark</span>
            </>
          )}
        </button>

        {/* ML Model Indicator Pill */}
        <div 
          className="desktop-only"
          style={{
            background: 'rgba(79, 70, 229, 0.08)',
            border: '1px solid rgba(79, 70, 229, 0.2)',
            padding: '0.4rem 0.75rem',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.78rem',
            color: 'var(--accent-primary)',
            fontWeight: 600
          }}
        >
          <Cpu size={14} />
          <span>ML: <strong>{selectedModel}</strong></span>
        </div>

        {/* System Health Badge */}
        <div style={{
          background: isHealthy ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
          border: isHealthy ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(239, 68, 68, 0.25)',
          padding: '0.4rem 0.75rem',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.78rem',
          color: isHealthy ? 'var(--risk-low)' : 'var(--risk-high)',
          fontWeight: 600
        }}>
          {isHealthy ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
          <span className="header-badge-text">{isHealthy ? 'FastAPI Online' : 'FastAPI Offline'}</span>
        </div>

        {/* User Profile Quick Tag */}
        <div 
          className="desktop-only"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            paddingLeft: '0.75rem',
            borderLeft: '1px solid var(--border-color)'
          }}
        >
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4F46E5 0%, #0284C7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: '#FFFFFF',
            fontSize: '0.825rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            RO
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.2 }}>
              Risk Officer
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              Underwriter
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
