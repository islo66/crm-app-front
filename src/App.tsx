import { QueryClient, QueryClientProvider, QueryCache } from "@tanstack/react-query";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import enUs from "antd/locale/en_US";
import { ThemeProvider } from "antd-style";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { GlobalStyleUtils } from "src/styles";

import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./features/Dashboard";
import LoginForm from "./features/LoginForm";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
    queryCache: new QueryCache({
      onError: (e: Error, query) => console.error(e, query),
    }),
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AntdApp>
          <ConfigProvider
            //TODO replace with locale after add i18n
            locale={enUs}
            theme={{
              algorithm: theme.defaultAlgorithm,
              token: {
                colorPrimary: "#1677ff",
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              },
            }}
          >
            <ThemeProvider>
              <GlobalStyleUtils />
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
            </ThemeProvider>
          </ConfigProvider>
        </AntdApp>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
