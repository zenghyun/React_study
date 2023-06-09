import { Outlet } from "react-router-dom";
// Outlet : 자녀 라우트 요소들이 렌더링되어야 할 장소를 표시하는 역할을 한다.

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
      <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
