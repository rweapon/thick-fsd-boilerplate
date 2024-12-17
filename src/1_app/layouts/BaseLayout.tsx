import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <main className="base-layout">
      <Outlet />
    </main>
  );
}
