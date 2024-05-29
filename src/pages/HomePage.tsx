import { useAuth } from "../util/authToken";

const HomePage = () => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <h1> Home Page</h1>
    </div>
  );
};

export default HomePage;
