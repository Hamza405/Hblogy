import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import HomePage from "./pages/HomePage/HomePage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import WritePage from "./pages/WritePage/WritePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import LoginPage from "./pages/Auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";

const App = () => {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
          path="/settings"
          element={user ? <SettingsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/write"
          element={user ? <WritePage /> : <Navigate to="/login" />}
        />
        <Route path="/post/:postId" element={<SinglePostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
