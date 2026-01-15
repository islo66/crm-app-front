import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
