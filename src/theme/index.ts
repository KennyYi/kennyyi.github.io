
export const theme = {
    colors: {
      primary: {
        background: '#1F2933',  
        text: {
          default: '#E4E7EB',
          hover: '#CBD2D9',
          active: '#9AA5B1',
          disabled: '#616E7C',
        },
        button: {
          background: {
            default: '#27AB83',  
            hover: '#199473',    
            active: '#83d4c1',   
            disabled: '#859991', 
          },
          border: {
            default: '#27AB83',  
            hover: '#199473',
            active: '#147D64',
            disabled: '#8EEDC7',
          },
        },
      },
      secondary: {
        background: '#EFFCF6',
        text: {
          default: '#1F2933',
          hover: '#323F4B',
          active: '#52606D',
          disabled: '#9AA5B1',
        },
        button: {
          background: {
            default: '#3E4C59',
            hover: '#52606D',
            active: '#616E7C',
            disabled: '#CBD2D9',
          },
          border: {
            default: '#3E4C59',
            hover: '#52606D',
            active: '#616E7C',
            disabled: '#CBD2D9',
          },
        },
      }
    },
    shadow: {
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
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
      sticky: 100,        // 고정 헤더/푸터
      navbar: 200,        // 네비게이션 바
      dropdown: 300,      // 드롭다운 메뉴
      overlay: 400,       // 오버레이/딤드 (모달, 팝오버 등의 배경)
      drawer: 500,        // 사이드 드로어
      modal: 600,         // 모달 창
      popover: 700,       // 팝오버
      tooltip: 800,       // 툴팁
      toast: 900,         // 토스트 메시지
      spinner: 1000,      // 로딩 스피너
    },
    transitions: {
      fast: '0.2s ease',
    },
    breakpoints: {
      mobile: '430px',
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
  