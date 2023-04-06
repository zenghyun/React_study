## Wrapper

<br>

일반적으로 React에서는 루트 JSX 요소는 1개여야 한다. 따라서 값을 반환하거나 값을 변수 또는 상수 또는 속성에 저장하려면 그 값은 반드시 JSX 요소 1개여야 한다.

```javascript
  return (
      <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
```

요소들을 전체적으로 묶어주는 **div** 태그를 사용함. 

하지만 이 방식을 이용하다보면 요소를 묶어줄 때마다 div를 사용하기 때문에, 큰 프로젝트의 경우 필요없는 div가 쌓여 페이지가 로드되는데 시간이 오래걸릴 수 있다.

이를 방지하기 위해 **Wrapper**를 사용한다. 

<br>

## Wrapper.js 

```javascript
const Wrapper =props => {
    return props.children;
};

export default Wrapper;
```

<br>

```javascript
 return (
      <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
```

div 대신 Wrapper로 감싸주면 요소의 사용을 줄일 수 있다. 

React 자체에 내장되어 있는 Wrapper를 사용할 수도 있는데 

```javascript
return (
    <>
    <h2></h2>
    <p></p>
    </>
); 

return (
    <React.Fragment>
    <h2></h2>
    <p></p>
    </React.Fragment>
); 
```

둘 중에 하나를 사용하면 된다. 

<br>

## 리액트 포털

[Portal이란?](https://despiteallthat.tistory.com/180)

<br>


## useRef 

[useRef란?](https://despiteallthat.tistory.com/181)