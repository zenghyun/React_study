## Redux 

- A state management system for cross-component or app-wide state

### [Redux란?](https://despiteallthat.tistory.com/192)

<br>

```javascript
npm install redux react-redux
```

<br>
이 패키지가 리액트 앱과 리덕스 스토어와 리듀서에 간단하게 접속하게 해줌
리덕스 스토어에 컴포넌트를 구독함 


<br>

```javascript
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
```
<br>
다음과 같이 increment라는 action type이 들어오면 현재 counter를 1씩 증가하여 객체를 반환한다고 할 때,

<br>

```javascript
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    state.counter++;

    return state;
  }
```
<br>
위와 같이 작성하면 값이 1씩 증가하는 것은 같지만 이렇게 하면 절대 안된다. 

왜냐하면 redux는 기존의 객체의 값을 변경하면 안되고 항상 새로운 객체를 반환해야하기 때문이다. 

<mark>state.counter++의 경우 기존의 객체의 값을 변경하는 것이고,  counter: state.counter + 1의 경우 새로운 객체로 반환하는 것이다.</mark>

그렇다면 이건 어떨까? 

<br>

```javascript
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    state.counter++;

    return {
      counter: state.counter,
    };
  }
```

<br>

**이것도 여전히 잘 동작하기는 하지만 바람직하지 않다.** 

객체와 배열이 자바스크립트에서 참조 값이기 때문에 여전히 기존의 state를 변형시키게 된다. 

### <mark style = 'background-color:pink'>**Redux로 작업할 때는 절대 원본의 state를 변형해서는 안된다. <br> 즉, 항상 새로운 객체나 배열을 만들어야 한다.**</mark>

<br>

### [reference values vs primitive values](https://academind.com/tutorials/reference-vs-primitive-values)

<br>

### Redux Toolkit 
리덕스를 더 편리하고 쉽게 작동할 수 있게 해준다. 


```nodeJS
npm install @reduxjs/toolkit
```

Redux Toolkit과 createSlice를 사용하면 아래와 같이 쓸 수 있다.

```javascript
createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement() {},
        increase() {},
        toggleCounter() {}
    }
});
```

여기서는 **state.counter++;** 을 써도 Redux Toolkit과 createSlice이 기존 상태를 변경할 수 없게 만들어 준다. 

왜냐하면 Redux toolkit는 내부적으로 immer라는 다른 패키지를 사용하는데 이런 코드를 감지하고 자동으로

 원래 있던 상태를 복제한다. 그리고 새로운 상태 객체를 생성하고 모든 상태를 변경할 수 없게 유지하고, 개발자가

 변경한 상태는 변하지 않도록 오버라이드 한다.


## configureStore

configureStore는 createStore처럼 store를 만들지만, createStore와 다르게 configureStore는 여러 개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다. 