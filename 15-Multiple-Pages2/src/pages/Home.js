import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }
  return (
    <>
      <h1>My Home Page</h1>
      <button onClick={navigateHandler}>Go Products Page</button>
    </>
  );
};

export default HomePage;
