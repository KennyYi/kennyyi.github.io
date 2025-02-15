import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Navigation = styled.nav`
  margin-bottom: 20px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation>
          {/* 네비게이션 메뉴는 나중에 추가 */}
        </Navigation>
        <Routes>
          <Route path="/" element={<div>홈페이지</div>} />
          {/* 예제 페이지 라우트는 나중에 추가 */}
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App; 