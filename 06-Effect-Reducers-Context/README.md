## Effects, Reducers & Context

Side Effects: 애플리케이션에서 일어나는 다른 모든 것들 

Side Effects를 처리하기 위해서 사용하는 것 => useEffect() Hook

[useEffect란?](https://despiteallthat.tistory.com/182)

<br>

### 오늘은 useEffect()에 대해 알아보겠습니다.

<br> 

### [ useEffect ]

<br>
useEffect() 함수는 React component가 렌더링 될 때마다 특정 작업(Sied effect)을 실행할 수 있도록 하는 리액트 Hook입니다. 여기서 Side effect는 component가 렌더링 된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 뜻합니다. 이러한 기능으로 인해 함수형 컴포넌트에서도 클래스형 컴포넌트에서 사용했던 생명주기 메서드를 사용할 수 있게 되었습니다.

<br>

**useEffect는 component가 mount 됐을 때, component가 unmount 됐을 때, component가 update 됐을 때, 특정 작업을 처리할 수 있습니다.**

 

즉, 클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴포넌트에서도 사용할 수 있게 된 것 입니다.

(componentDidMount, componentDidUpdate, componentWillUnmount)

 

componentDidMount: 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행합니다.
componentDidUpdate: 리렌더링을 완료한 후 실행. 즉 render()가 업데이트될 때마다 실행합니다.
compoenntWillUnMount: 컴포넌트를 DOM에서 제거할 때 실행합니다.
 

<br>
 

### [ useEffect 사용 방법 ]
 
 <br>

```javascript
useEffect( function, deps )
```
 
- function : 수행하고자 하는 작업 ( 리액트는 이 함수를 기억 했다가 DOM 업데이트 후 불러냅니다. )

  또한, 이 함수에서 함수를 return 할 경우 그 함수가 컴포넌트가 Unmount 될 때 다시 한 번 실행됩니다. 

 

- deps : 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열 
   
  deps에 특정 값을 넣게 되면 컴포넌트가 mount 될 때, 지정한 값이 업데이트 될 때 useEffect를 실행합니다.

<br>

### useEffect 함수 불러오기

```javascript
import React, { useEffect } from 'react';
```

<br> 

### [ useEffect 사용 방식 ]
<br>

### 1. componentDidMount 
<br>
 

Component가 mount 됐을 때 ( 처음 나타났을 때 실행 )

<br>

```javascript
  useEffect(() => {
    console.log('마운트 될 때만 실행된다');
  }, []);
 
``` 
<br>

컴포넌트가 화면에 가장 처음 렌더링 될 때 한 번만 실행하고 싶다면 deps 위치에 빈 배열을 넣어줍니다.
 
 <br>

```javascript
  useEffect(() => {
    console.log('렌더링 될 때 마다 실행된다');
  });
```
 
<br>

만약 배열을 생략한다면 리렌더링 될 때마다 실행됩니다.

 

### 2. componentDidUpdate

Component가 update 될 때 ( 특정 props, state가 바뀔 때 실행 )

<br>


```javascript
useEffect(() => {
    console.log(name);
    console.log('업데이트 될 때 실행된다');
  }, [name]);
 
```
 
<br>

특정 값이 업데이트 될 때 실행하고 싶다면, deps 위치의 배열 안에 검사하고 싶은 값을 넣어줍니다.

( 의존 값이 들어있는 배열 deps 라고도 합니다. dependency를 의미 )


하지만 업데이트 될 때만 실행하는 것이 아니라 마운트 될 때도 실행됩니다. 만약 업데이트 될 때만 실행시키고 싶다면 아래와 같은 방법을 사용합니다. 

 <br>

 ```javascript
 const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log(name);
      console.log("업데이트 될 때마다 실행");
    }
  }, [name]);
 ```

 

### 3. componentDidUnMount

Component가 unmount 될 때 ( 사라질 때 ) & update 되기 직전에 실행 

 <br>

 ```javascript
useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, []);
 ```


cleanup 함수 반환 ( return 뒤에 나오는 함수이며, useEffect에 대한 뒷정리 함수라고 합니다. ) 


1. 언마운트 될 때만 cleanup 함수를 실행하고 싶다면, 두 번째 파라미터에 빈 배열을 넣습니다.
 

2. 특정 값이 업데이트 되기 직전에 cleanup 함수를 실행하고 싶다면, deps 배열 안에 검사하고 싶은 값을 넣어줍니다. 

 
<br>
 

### [ deps에 특정 값 넣기 ]

<br> 

deps 에 특정 값을 넣게 된다면 컴포넌트가 처음 마운트 될 때, 지정한 값이 바뀔 때, 언마운트 될 때, 값이 바뀌기 직전에 모두 호출이 됩니다.

useEffect 안에서 사용하는 상태나, props 가 있다면, useEffect 의 deps 에 넣어주어야 하는 것이 규칙입니다.

만약 사용하는 값을 넣어주지 않는다면, useEffect 안의 함수가 실행될 때 최신 상태, props를 가리키지 않습니다.

 

deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 useEffect 함수가 호출 됩니다.

<br>

### cleanup function 

cleanup 함수 반환 ( return 뒤에 나오는 함수이며, useEffect에 대한 뒷정리 함수라고 합니다. ) 

<br>

💡 useEffect 함수가 실행되기 전에( 처음 실행되는 경우를 제외하고는 ) cleanup 함수가 실행됩니다.

 또한 cleanup 함수는 DOM에서 마운트 해제될 때마다 실행됩니다. 

<br>

즉, 컴포넌트가 재사용 될 때마다 실행되며 모든 새로운 sideEffect 함수가 실행되기 전에( 처음 실행 제외 ),

그리고 컴포넌트가 제거되기 전에 실행됩니다.

### 예시 

<br>

```javascript
seEffect(() => { // enteredEmail, enteredPassword 입력 값이 바뀔 때마다 매번 실행
   const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);  // 이전에 timer를 지우고 마지막 timer만 동작시킴
      console.log('clean up');
        }; // cleanup function
  }, [enteredEmail, enteredPassword]);
```

<br>

### useReducer란?

[useReducer란?](https://despiteallthat.tistory.com/183)

<br>

### useState vs useReducer:

- useState는 간단한 상태 로직을 다루기에 적합합니다.
- useReducer는 좀 더 복잡한 상태 로직을 다룰 수 있습니다.
- useState는 상태를 업데이트할 때 이전 상태를 덮어쓰는 반면, useReducer는 이전 상태를 변경하지 않고, 새로운 상태를 생성합니다.
- useState는 한 개의 상태만 다룰 수 있지만, useReducer는 여러 개의 연관된 상태를 함께 다룰 수 있습니다.
- useState는 컴포넌트 내부에서 상태를 다루지만, useReducer는 다른 파일에서 리듀서 함수를 정의하여 상태를 다룰 수 있습니다.

<br>

### 리액트 Context (Context API)

(Context API란?)[https://despiteallthat.tistory.com/184]

React Context는 빈번한 변화가 있는 환경에서는 적합하지 않다. 


<br>

### 리액트 훅으로 작업할 때 지켜야 할 규칙 
<br>

1. 리액트 훅은 리액트 함수에서만 호출해야 한다. (React Component Functions or Custom Hooks)

2. 리액트 훅은 리액트 컴포넌트 함수 또는 사용자 정의 훅 함수의 최상위 수준에서만 호출해야 한다. 
   - 중첩 함수나 block 문에서 훅을 호출하면 안된다.

3. useEffect 훅의 경우 항상, 참조하는 모든 항목을 의존성으로 useEffect 내부에 추가해야 한다.