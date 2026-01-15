import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

import { useSessionStoreSelector } from "src/store";

type LoginFormValues = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { setSession } = useSessionStoreSelector((state) => ({
    setSession: state.setSession,
  }));

  const handleSubmit = async (values: LoginFormValues) => {
    // TODO: There should be a real API request here
    // const { accessToken, refreshToken } = await api.login(values);
    console.log("23 ", values);
    // A temporary fake to test logic:
    const accessToken = "dummy-access";
    const refreshToken = "dummy-refresh";

    setSession({ access: accessToken, refresh: refreshToken });
    navigate("/dashboard", { replace: true });
  };

  return (
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
  );
}
