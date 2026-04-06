import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErpLogin from './pages/ErpLogin';
import ErpDashboard from './pages/ErpDashboard';
import OnlineAssessment from './pages/OnlineAssessment';
import AssessmentIntro from './pages/AssessmentIntro';
import AssessmentQuiz from './pages/AssessmentQuiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/erp" element={<ErpLogin />} />
        <Route path="/erp-dashboard" element={<ErpDashboard />} />
        <Route path="/online-assessment" element={<OnlineAssessment />} />
        <Route path="/online-assessment/intro/:id" element={<AssessmentIntro />} />
        <Route path="/online-assessment/quiz/:id" element={<AssessmentQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
