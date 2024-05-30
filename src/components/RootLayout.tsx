import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <header>Pockemon Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Pockemon Footer</footer>
    </div>
  );
}

export default Root;
