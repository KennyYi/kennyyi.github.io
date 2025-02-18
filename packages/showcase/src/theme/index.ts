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
  shadow: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
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
  zIndex: {
    base: 0,            // 기본 요소
    dropdown: 1000,     // 드롭다운 메뉴
    sticky: 2000,       // 고정 헤더/푸터
    navbar: 3000,       // 네비게이션 바
    drawer: 4000,       // 사이드 드로어
    modal: 5000,        // 모달 창
    tooltip: 6000,      // 툴팁
    toast: 7000,        // 토스트 메시지
    popover: 8000,      // 팝오버
    overlay: 9000,      // 오버레이/딤드
    spinner: 10000,     // 로딩 스피너
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