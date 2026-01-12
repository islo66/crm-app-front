import { Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import LoginForm from "./features/LoginForm";
import Dashboard from "./features/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#1677ff",
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
      }}
    >
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
