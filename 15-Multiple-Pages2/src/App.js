import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: '' 부모 라우트가 현재 활성화 상태이면 표시되어야 하는 기본 라우트 
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
      // product/: <- 콜론을 통해 뒤에 오는 페이지를 동적으로 구현함
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
