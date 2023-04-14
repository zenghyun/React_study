## Browser-side Apps Don't Directly Talk To Databases 

브라우저에서 실행되는 자바스크립트 코드가 데이터베이스와 직접 통신하면 안된다. 리액트 앱이 있고, 어떤 종류의 데이터베이스가 있다면 이런 데이터베이스를 데이터베이스 서버에서 실행하는 것은 문제가 되지는 않는다. 

매우 불안정하거나 잘못 작성된 어플리케이션이 아니고서야 앱으로 직접 데이터를 가져오거나 저장하고, 연결을 맺는 행위는 외부 환경에서는 절대 해서는 안되는 일 중 하나이다. 

기술적으로는 어려울 수 있겠지만 클라이언트 내부에서 데이터베이스에 직접 연결을 하거나, 브라우저의 자바스크립트 코드를 통해 직접 연결을 한다면 이는 이 코드를 통해 데이터베이스의 인증 정보를 노출시키는 행위이다. 

잊지 말아야 할 것은 브라우저에서 실행되는 모든 자바스크립트 코드는 브라우저뿐만이 아니라 웹 사이트의 사용자들도 접근하고 읽을 수 있다는 것이다. 

따라서 리액트 앱 코드 내부에서 데이터베이스에 직접적으로 통신하는 방식은 보안 이슈 사항에서 큰 문제가 있기 때문에 다른 방법을 사용해야 한다. 

예를 들어  NodeJS나 PHP, ASP.NET 등과 같은 백엔드 어플리케이션이 있다. 

데이터베이스와 통신하는 백엔드 어플리케이션은 사용자가 이 백엔드 코드를 확인할 수 없기 때문에 데이터베이스의 인증 정보를 안전하게 저장할 수 있다. 게다가 다른 서버에 있기 때문에 웹사이트 사용자는 이 코드를 절대 볼 수 없다. 

따라서, 리액트 앱은 일반적으로 해당 백엔드 서버, 또는 백엔드 API라고 불리는 서로 다른 URL로의 요청을 전송하는 서버와 통신하게 된다. 

<br>

## SWAPI 

[SWAPI](https://swapi.dev/)

각종 실습을 할 수 있는 더미데이터가 있음. 

<br>

### HTTP response status codes 

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


### Firebase

[firebase](https://firebase.google.com/?hl=ko)
코드 작성 없이도 사용 가능한 무료 백엔드


<br>


# SWAPI 이용하여 movieList 생성하기

```javascript
  import React, { useState, useCallback, useEffect } from "react";

  import MovieList2 from "./components/MoviesList2";
import "./App.css";

const App2 = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      const datas = await response.json();
      const loadedMovies = datas.results.map((data) => ({
        id: data.episode_id,
        title: data.title,
        openingText: data.opening_crawl,
        releaseDate: data.rease_date,
      }));
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies</p>;

  if(movies.length > 0) {
    content = < MovieList2 movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section></section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App2;

```

<br>

## 📌  핵심 

```javascript
 const response = await fetch("https://swapi.dev/api/films/");
```

**SWAPI**를 통해 데이터를 받아온다. 

```javascript
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
```

useEffect를 사용하여 button을 누르지 않아도 페이지 로드 시 자동으로 fetchfmf 사용하여 movieList를 뿌려준다.

```javascript
 const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      const datas = await response.json();
      const loadedMovies = datas.results.map((data) => ({
        id: data.episode_id,
        title: data.title,
        openingText: data.opening_crawl,
        releaseDate: data.rease_date,
      }));
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);
```

useCallback을 사용하여 **fetchMovieHandler**의 재사용을 방지한다.

<br>

# firebase 이용하여 movieList 추가하기 & 가져오기 

## **App.js**

```javascript
  import React, { useState, useCallback, useEffect } from "react";

  import MovieList2 from "./components/MoviesList2";
import "./App.css";
import AddMovie2 from "./components/AddMovie2";

const App2 = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("firebase를 통해 생성한 가상 데이터베이스 주소/movies.json");
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const loadedMovies = [];

      for(const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }      
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    const response = await fetch('firebase를 통해 생성한 가상 데이터베이스 주소/movies.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const data = await response.json();
  }
  let content = <p>Found no movies</p>;

  if(movies.length > 0) {
    content = < MovieList2 movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie2 onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App2;

```

<br>

## **AddMovie.js**

```javascript
import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

const AddMovie2 = (props) => {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const movie =  {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value
    };
    props.onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
        <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie2;
```


### 📌 핵심

```javascript
 const response = await fetch("firebase를 통해 생성한 가상 데이터베이스 주소/movies.json");
```

<br>

**firebase를 통해 생성한 가상 데이터베이스 주소** 
- firebase를 통해 생성한 실시간 데이터베이스 주소 

**/movie,json**
- 데이터 베이스 이름 : movie 
- 저장 양식 : json 