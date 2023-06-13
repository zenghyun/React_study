import { useRouter } from "next/router";

// our-domain.com/news/[]
// 페이지 이름을 [] (대괄호)로 만들면 동적 페이지가 만들어짐

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  console.log("🚀  newsId", newsId)

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
