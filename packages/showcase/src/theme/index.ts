export const theme = {
  colors: {
    primary: {
      background: '#1F2933',  // primary.900
      text: {
        default: '#E4E7EB',   // primary.100
        hover: '#CBD2D9',     // primary.200
        active: '#9AA5B1',    // primary.300
        disabled: '#616E7C',  // primary.500
      },
      button: {
        background: {
          default: '#27AB83',  // secondary.500
          hover: '#199473',    // secondary.600
          active: '#147D64',   // secondary.700
          disabled: '#8EEDC7', // secondary.200
        },
        border: {
          default: '#27AB83',  // secondary.500
          hover: '#199473',    // secondary.600
          active: '#147D64',   // secondary.700
          disabled: '#8EEDC7', // secondary.200
        },
      },
    },
    secondary: {
      background: '#EFFCF6',   // secondary.50
      text: {
        default: '#1F2933',    // primary.900
        hover: '#323F4B',      // primary.800
        active: '#52606D',     // primary.600
        disabled: '#9AA5B1',   // primary.300
      },
      button: {
        background: {
          default: '#3E4C59',  // primary.700
          hover: '#52606D',    // primary.600
          active: '#616E7C',   // primary.500
          disabled: '#CBD2D9', // primary.200
        },
        border: {
          default: '#3E4C59',  // primary.700
          hover: '#52606D',    // primary.600
          active: '#616E7C',   // primary.500
          disabled: '#CBD2D9', // primary.200
        },
      },
    }
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

  typography: {
    // 폰트 패밀리
    fontFamily: {
      primary: '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
      code: 'source-code-pro, Menlo, Monaco, Consolas, monospace',
    },
    
    // 폰트 가중치
    fontWeight: {
      LIGHT: 300,
      REGULAR: 400,
      MEDIUM: 500,
      SEMI_BOLD: 600,
      BOLD: 700,
    },
    
    // 폰트 크기
    fontSize: {
      HEADING: '1.875rem',
      TITLE: '1.5rem',
      SUBTITLE: '1.25rem',
      BODY: '1rem',
      CAPTION: '0.875rem',
      BUTTON: '0.875rem',
      LABEL: '0.75rem',
    },
    
    // 행간
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
    
    // 자간
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    }
  }
};

export type Theme = typeof theme; 
