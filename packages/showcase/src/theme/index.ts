export const theme = {
  colors: {
    primary: '#007AFF',
    surface: '#FFFFFF',
    border: '#E2E8F0',
    text: {
      primary: '#1A202C',
      secondary: '#718096',
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  radius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
  },
  typography: {
    size: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
    },
  },
  transitions: {
    fast: '0.2s ease',
  },
  breakpoints: {
    mobile: '768px',
    desktop: '1024px',
  },
};

export type Theme = typeof theme; 