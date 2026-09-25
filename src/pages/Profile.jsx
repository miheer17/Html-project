import React, { useEffect, useState } from 'react';
import apiService from '../services/api';
import { CheckCircle2, Landmark, ShieldCheck } from 'lucide-react';

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
          <ShieldCheck size={24} color="var(--accent-primary)" />
          Underwriter Credentials & Loan Risk Telemetry
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
          Official credit underwriting authorization keys and real-time ML inference core diagnostics.
        </p>
      </div>

      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.75rem', flexWrap: 'wrap' }}>
          {/* Loan Project Institutional Logo (Replaced MS) */}
          <div style={{
            width: '76px',
            height: '76px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35)',
            flexShrink: 0,
            border: '2px solid rgba(255, 255, 255, 0.15)'
          }}>
            <Landmark size={38} color="#FFFFFF" />
          </div>

          <div style={{ minWidth: 0 }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              Credit Underwriting Division
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
              Lead Quantitative Risk Underwriter • Terminal ID: CR-88402
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(37, 99, 235, 0.12)', color: 'var(--accent-primary)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                Enterprise Access
              </span>
              <span>• Full Multi-Model Inference & Default Override Authority</span>
            </div>
          </div>
        </div>

        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
          Loan Inference Engine Diagnostics
        </h4>

        <div className="responsive-grid-2">
          <div style={{ background: 'rgba(37, 99, 235, 0.04)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Inference Core Status
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: health?.status === 'healthy' ? '#059669' : '#D97706', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
              <CheckCircle2 size={18} />
              {health?.status === 'healthy' ? 'Active & Synchronized' : 'Operational (Client Core)'}
            </div>
          </div>

          <div style={{ background: 'rgba(2, 132, 199, 0.04)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Active Prediction Engine
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
