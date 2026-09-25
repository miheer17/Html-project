import React, { useEffect, useState } from 'react';
import apiService from '../services/api';
import { Terminal, CheckCircle2 } from 'lucide-react';

const Profile = () => {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    const check = async () => {
      try {
        const data = await apiService.getHealth();
        setHealth(data);
      } catch (e) {
        setHealth({ status: 'offline' });
      }
    };
    check();
  }, []);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Terminal size={24} color="#10B981" />
          Lead Architect Credentials & System Telemetry
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
          Verified underwriter access keys and LendPulse ML inference engine diagnostics.
        </p>
      </div>

      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.75rem', flexWrap: 'wrap' }}>
          <div style={{
            width: '76px',
            height: '76px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#070B14',
            boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)',
            flexShrink: 0,
            fontFamily: 'var(--font-heading)'
          }}>
            MS
          </div>
          <div style={{ minWidth: 0 }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              Mihir Sakariya
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 700 }}>
              Lead Risk Architect & Quantitative Underwriter • ID: MS-94021
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                Level 4 Access
              </span>
              <span>• Full Algorithm Tuning & Decision Override Authority</span>
            </div>
          </div>
        </div>

        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
          LendPulse Engine Telemetry & Diagnostics
        </h4>

        <div className="responsive-grid-2">
          <div style={{ background: 'rgba(16, 185, 129, 0.04)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              API Connection Status
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: health?.status === 'healthy' ? '#10B981' : '#F59E0B', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
              <CheckCircle2 size={18} />
              {health?.status === 'healthy' ? 'Active & Synchronized' : 'Operational (Client Core)'}
            </div>
          </div>

          <div style={{ background: 'rgba(6, 182, 212, 0.04)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Primary Classifier Model
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.35rem' }}>
              {health?.selectedModel || 'Multi-Model Consensus Engine'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
