import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();
// useParams() : 라우트 정의에서 프로퍼티로 정의한 모든 역동적 경로 세그먼트가 담긴 간단한 JavaScript 객체이다.

    return (
        <>
       <h1>Product Details</h1>
       <p>{params.productId}</p>
        </>
        );
}

export default ProductDetailPage