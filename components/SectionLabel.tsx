import React from 'react';

export const SectionLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return <span className={`section-label ${className}`}>{children}</span>;
};
