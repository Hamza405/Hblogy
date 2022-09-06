import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import HomePage from "./pages/HomePage/HomePage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import WritePage from "./pages/WritePage/WritePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/post/:postId" element={<SinglePostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
