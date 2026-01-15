import { QueryClient, QueryClientProvider, QueryCache } from "@tanstack/react-query";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import enUs from "antd/locale/en_US";
import { ThemeProvider } from "antd-style";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { SessionGuard, DefaultLayout, DashboardLayout } from "src/layouts";
import { GlobalStyleUtils } from "src/styles";

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
                <Route element={<SessionGuard />}>
                  <Route element={<DefaultLayout />}>
                    <Route path="/" element={<LoginForm />} />
                  </Route>
                  <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Route>
                </Route>
              </Routes>
            </ThemeProvider>
          </ConfigProvider>
        </AntdApp>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
