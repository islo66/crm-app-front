import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = (values: LoginFormValues) => {
    // Простая проверка (в реальном приложении - API запрос)
    if (values.username && values.password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Card title="Вход в систему" style={{ width: 400 }}>
        <Form form={form} name="login" onFinish={handleSubmit} autoComplete="off" layout="vertical">
          <Form.Item name="username" rules={[{ required: true, message: "Пожалуйста, введите имя пользователя!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Имя пользователя" size="large" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Пароль" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
