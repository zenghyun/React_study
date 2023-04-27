## What Is Routing? 

<br>


1. 우리가 지원하려는 라우트를 작성한다. 즉, 우리가 지원하려는 URL과 경로, 그리고 다양한 경로에 대해 어떤 컴포넌트가 로딩되어야 하는지 정의한다.

2. 우리의 라우터를 활성화 하고 라우트 정의를 로딩한다.

3. 우리가 로딩하려는 그 모든 컴포넌트들이 있는지 확인하고 그 페이지들 간에 이동할 수단을 제공했는지 확인한다. 그러면 사용자들은 다양한 페이지들 간에 매끄럽게 이동할 수 있다. 

<br>

### **install** 

<br>

```
npm install react-router-dom
```



<br>


```javascript
function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>Go to <a href="/products">the list of products</a>.</p>
    </>
  );
}

export default HomePage;

```

페이지 이동시 이렇게 하면 안됨!!! 

```javascript
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>Go to <Link to="/products">the list of products</Link>.</p>
    </>
  );
}

export default HomePage;

```

이렇게 해야함 이렇게 해야 새로운 HTTP를 전송하지 않음!!! 

<br>

### useNavigate 사용하기 

<br>

```javascript
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('products');
    }

  return (
    <>
      <h1>My Home Page</h1>
      <p>Go to <Link to="/products">the list of products</Link>.</p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;

```

<br>

## index router 

```javascript
const router = createBrowserRouter([
  { 
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
    {  path: '', element: <HomePage /> }, 
    { path: "products", element: <ProductsPage /> },
    { path: 'products/:productId', element: <ProductDetailPage />},
    ],

}
]);
```

다음과 같은 경우 아래와 같이 바꿀 수 있다. 

```javascript

const router = createBrowserRouter([
  { 
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
    { index: true, element: <HomePage /> }, // path: ''
    { path: "products", element: <ProductsPage /> },
    { path: 'products/:productId', element: <ProductDetailPage />},
    ],

}
]);
```

부모 라우트 경로에 대해 로딩되어야 하는 자녀 라우트가 있을 때, **path:''** 와 같은 빈 경로를 추가할 수도 있지만, 그 대신에 특수 index 프로퍼티를 추가하고 그걸 true로 설정할 수 있다. 

이렇게 하면 이 라우트가 소위 인덱스 라우트로 변하고 부모 라우트가 현재 활성이면 표시되어야 하는 기본 라우트가 이 라우트라는 의미이다. 

즉, 인덱스 라우트는 부모 라우트가 활성일 경우에 로딩되어야 하는 기본 라우트를 정의할 수 있게 해준다.