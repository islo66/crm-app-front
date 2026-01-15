import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css, token }) => {
  return {
    defaultLayoutBox: css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: ${token.colorBgContainer};
    `,
  };
});
