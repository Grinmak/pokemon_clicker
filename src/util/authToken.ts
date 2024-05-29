import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAuthToken();

    if (!token) {
      navigate("/auth");
    }
  }, [navigate]);

  return !!getAuthToken();
}
