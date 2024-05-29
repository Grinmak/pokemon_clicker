import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../util/auth";

const SignUpForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    // console.log("Received values of form: ", values);
    const authData = {
      username: values.login,
      password: values.password,
      email: `${values.login}@pokemon.com`,
    };

    const response = await fetch("http://localhost:9999/user/register", {
      method: "POST",
      body: JSON.stringify(authData),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    // const data = await response.json();
    const success = await loginRequest(authData.username, authData.password);
    if (success) {
      navigate("/");
    } else {
      alert("Login failed");
    }
    // if (data) {
    //   console.log("Data from signup form:", data);
    // }
    // console.log(response.status);
    // const token = getAuthToken();
    // localStorage.setItem("token", token);

    // navigate("/");
    // form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="login"
        name="login"
        rules={[{ required: true, message: "Please input your Login!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Login"
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
