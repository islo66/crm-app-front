import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import { useStyles } from "src/layouts/styles.ts";

export function DefaultLayout() {
  const { styles } = useStyles();
  return (
    <Layout>
      <div className={styles.defaultLayoutBox}>
        <Outlet />
      </div>
    </Layout>
  );
}
