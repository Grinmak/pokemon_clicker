// import { useNavigate } from "react-router-dom";

export const loginRequest = async (username: string, password: any) => {
  try {
    const response = await fetch("http://localhost:9999/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    const accessToken = data?.accessToken;

    if (accessToken) {
      localStorage.setItem("token", data.accessToken);
      return true;
    }
  } catch (error: any) {
    console.error("Login error:", error);
    return false;
  }
};
