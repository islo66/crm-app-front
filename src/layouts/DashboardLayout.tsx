import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

import { Container } from "src/layouts/Container.tsx";

const menu: MenuProps["items"] = [
  {
    key: "leads",
    icon: <UserOutlined />,
    label: "Leads",
  },
];

export function DashboardLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Layout.Header style={{ display: "flex", alignItems: "center", background: colorBgContainer }}>
        <div>Logo</div>
      </Layout.Header>

      <Container>
        <Layout.Sider style={{ background: colorBgContainer }} width={220}>
          <Menu
            className="menu"
            mode="inline"
            defaultSelectedKeys={["leads"]}
            defaultOpenKeys={["leads"]}
            items={menu}
          />
        </Layout.Sider>
        <Layout.Content style={{ padding: "20px 24px", width: "100%" }}>
          <Outlet />
        </Layout.Content>
      </Container>
    </Layout>
  );
}
