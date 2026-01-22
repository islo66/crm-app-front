import type { PropsWithChildren } from "react";

import { useStyles } from "src/layouts/styles";

export const Container = ({ children }: PropsWithChildren) => {
  const { styles } = useStyles();

  return <div className={styles.containerBox}>{children}</div>;
};
