import React from 'react';
import './tokens.css';

// Standalone replacements for the @instinct/files components used by this page.
// They reproduce the layout and styling of the hosted kit closely enough for
// self-hosting; the original page ran inside Instinct's hosted file viewer.

export function FileRouter({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function FileCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      maxWidth: 1180,
      margin: '0 auto',
      background: 'var(--ds-page)',
      padding: '24px',
      minHeight: '100vh',
    }} className="file-card">
      {children}
    </div>
  );
}

export function Closing({ children }: { children: React.ReactNode }) {
  return (
    <footer style={{
      marginTop: 48,
      padding: '20px 0 8px',
      borderTop: '1px solid var(--ds-hairline)',
      color: 'var(--ds-ink-2)',
      fontSize: 12,
      lineHeight: 1.6,
    }}>
      {children}
    </footer>
  );
}

export function Rows({ children }: { children: React.ReactNode }) {
  return <div style={{ borderTop: '1px solid var(--ds-hairline)' }}>{children}</div>;
}

export function Row({ name, detail, value, valueKnown }: {
  name: React.ReactNode;
  detail?: React.ReactNode;
  value?: React.ReactNode;
  valueKnown?: boolean;
}) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) auto',
      gap: 16,
      alignItems: 'baseline',
      padding: '14px 0',
      borderBottom: '1px solid var(--ds-hairline)',
    }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ds-ink)' }}>{name}</div>
        {detail ? <div style={{ fontSize: 12, color: 'var(--ds-ink-2)', marginTop: 2 }}>{detail}</div> : null}
      </div>
      {value ? (
        <div style={{ fontSize: 12, fontWeight: 600, color: valueKnown ? 'var(--ds-teal)' : 'var(--ds-ink-2)', whiteSpace: 'nowrap' }}>
          {value}
        </div>
      ) : null}
    </div>
  );
}

export function Group({ children }: { children: React.ReactNode }) {
  return <section style={{ marginTop: 32 }}>{children}</section>;
}

export function Heading({ children }: { children: React.ReactNode }) {
  return <h2 style={{ margin: '0 0 12px', fontSize: 22, letterSpacing: '-0.02em' }}>{children}</h2>;
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: '0 0 12px', lineHeight: 1.65 }}>{children}</p>;
}

export function Text({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} style={{ color: 'var(--ds-ink)', fontWeight: 600 }}>{children}</a>;
}
