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
    containerBox: css`
      max-width: 1280px;
      min-width: 300px;
      width: 100%;
      display: flex;
      height: calc(100vh - 64px);
    `,
    menu: css`
      height: 100%;
    `,
  };
});
