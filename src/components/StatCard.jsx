import React from 'react';

const StatCard = ({ title, value, subtext, icon: Icon, trend, color = 'emerald' }) => {
  const colorMap = {
    emerald: { 
      bg: 'rgba(16, 185, 129, 0.12)', 
      text: '#10B981', 
      border: 'rgba(16, 185, 129, 0.3)',
      bar: 'linear-gradient(90deg, #10B981, #34D399)'
    },
    cyan: { 
      bg: 'rgba(6, 182, 212, 0.12)', 
      text: '#06B6D4', 
      border: 'rgba(6, 182, 212, 0.3)',
      bar: 'linear-gradient(90deg, #06B6D4, #22D3EE)'
    },
    amber: { 
      bg: 'rgba(245, 158, 11, 0.12)', 
      text: '#F59E0B', 
      border: 'rgba(245, 158, 11, 0.3)',
      bar: 'linear-gradient(90deg, #F59E0B, #FBBF24)'
    },
    rose: { 
      bg: 'rgba(239, 68, 68, 0.12)', 
      text: '#EF4444', 
      border: 'rgba(239, 68, 68, 0.3)',
      bar: 'linear-gradient(90deg, #EF4444, #F87171)'
    },
    indigo: { 
      bg: 'rgba(99, 102, 241, 0.12)', 
      text: '#818CF8', 
      border: 'rgba(99, 102, 241, 0.3)',
      bar: 'linear-gradient(90deg, #6366F1, #818CF8)'
    }
  };

  const theme = colorMap[color] || colorMap.emerald;

  return (
    <div className="glass-card" style={{ padding: '1.4rem', position: 'relative', overflow: 'hidden' }}>
      {/* Top Accent Gradient Border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: theme.bar
      }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
        <span style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {title}
        </span>
        {Icon && (
          <div style={{
            background: theme.bg,
            border: `1px solid ${theme.border}`,
            padding: '0.55rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 12px ${theme.border}`
          }}>
            <Icon size={18} color={theme.text} />
          </div>
        )}
      </div>

      <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)' }}>
        {value}
      </div>

      {subtext && (
        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
          {trend && (
            <span style={{ 
              color: trend.startsWith('+') ? '#10B981' : '#EF4444', 
              fontWeight: 700,
              background: trend.startsWith('+') ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
              padding: '1px 6px',
              borderRadius: '6px'
            }}>
              {trend}
            </span>
          )}
          <span>{subtext}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
