import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Добро пожаловать в CRM систему</h1>
      <p>Это приватная страница, доступная только после входа.</p>
      <p>Здесь будет отображаться функционал CRM приложения.</p>
      <button onClick={handleLogout} style={{ marginTop: "2rem" }}>
        Выйти
      </button>
    </div>
  );
}
