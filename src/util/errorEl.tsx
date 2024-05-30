import { useRouteError } from "react-router-dom";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError() as { message?: string };

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error?.message || "An unknown error occurred"}</p>
    </div>
  );
};

export default ErrorBoundary;
