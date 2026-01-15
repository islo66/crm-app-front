import { useNavigate } from "react-router-dom";

import { useSessionStoreSelector } from "src/store";

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useSessionStoreSelector((state) => ({
    logout: state.logout,
  }));

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div
      style={{
        padding: "2rem",
        minHeight: "100vh",
      }}
    >
      <h1>Добро пожаловать в CRM систему</h1>
      <p>Это приватная страница, доступная только после входа.</p>
      <p>Здесь будет отображаться функционал CRM приложения.</p>
      <button onClick={handleLogout} style={{ marginTop: "2rem" }}>
        Выйти
      </button>
    </div>
  );
}
