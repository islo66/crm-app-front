import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useStyles } from "src/layouts/styles.ts";
import { useSessionStoreSelector } from "src/store";

export function SessionGuard() {
  const { styles } = useStyles();
  const location = useLocation();

  const { accessToken } = useSessionStoreSelector((state) => ({
    accessToken: state.accessToken,
    refreshToken: state.refreshToken,
  }));

  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Here you can:
    // - wait for hydration to persist,
    // - pull the refresh token if necessary.

    const timerId = setTimeout(() => {
      setIsChecking(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (isChecking) {
    return (
      <div className={styles.defaultLayoutBox}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

  const pathname = location.pathname;

  const isAuthPage = pathname === "/";
  const isPrivatePage = pathname.startsWith("/leads");

  // 1) Not logged in and goes to a private page -> login
  if (!accessToken && isPrivatePage) {
    return <Navigate to="/" replace />;
  }

  // 2) Already logged in and going to login -> leads
  if (accessToken && isAuthPage) {
    return <Navigate to="/leads" replace />;
  }

  // 3) In all other cases, we simply render nested routes/layouts
  return <Outlet />;
}
