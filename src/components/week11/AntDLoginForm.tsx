import { Form, Input, Button as AntButton, Card } from "antd";

interface LoginFormValues {
  email?: string;
  password?: string;
}

export default function AntDLoginForm() {
  const [form] = Form.useForm();

  const onFinish = (values: LoginFormValues) => {
    alert(`AntD Login Submitted:\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <Card title="Ant Design Login" style={{ maxWidth: 400 }}>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <AntButton type="primary" htmlType="submit" block>
            Login
          </AntButton>
        </Form.Item>
      </Form>
    </Card>
  );
}
