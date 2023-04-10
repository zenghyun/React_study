### useState :

[useState란?](https://despiteallthat.tistory.com/176)

useState는 React 컴포넌트에서 상태(state)를 다루는 Hook입니다.
컴포넌트에서 상태를 변경하면, 해당 컴포넌트가 다시 렌더링됩니다.
상태가 변경되면, 컴포넌트가 화면에 다시 그려져서 새로운 상태가 반영됩니다.

useState는 다음과 같은 상황에서 사용합니다.

- 컴포넌트 내부에서 변경 가능한 상태를 다룰 때
- 사용자의 입력에 따라 컴포넌트가 동적으로 변경되어야 할 때
- 상태를 초기화하거나 업데이트할 때

<br>

### useRef :

[useRef란?](https://despiteallthat.tistory.com/181)

useRef는 React 컴포넌트에서 DOM 노드를 다루는 Hook입니다.
컴포넌트 내부에서 Ref 객체를 만들어서, 해당 Ref 객체를 DOM 요소에 연결할 수 있습니다.
useRef를 사용하면, DOM 요소의 속성이나 메서드를 직접 호출하거나 수정할 수 있습니다.

useRef는 다음과 같은 상황에서 사용합니다.

- DOM 요소에 접근하여 속성이나 메서드를 직접 수정해야 할 때
- 클래스 컴포넌트에서 this.state와 같은 기능을 구현할 때

<br>

### useEffect :
[useEffect란?](https://despiteallthat.tistory.com/182)

useEffect는 React 컴포넌트에서 Side Effect를 다루는 Hook입니다.
Side Effect란, 컴포넌트 외부에서 발생하는 작업을 말합니다. (ex. API 요청, 이벤트 리스너 등)
useEffect는 컴포넌트가 렌더링된 후에 실행됩니다.

useEffect는 다음과 같은 상황에서 사용합니다.

- API 요청, 이벤트 리스너 등의 Side Effect를 처리해야 할 때
- 컴포넌트가 마운트, 업데이트, 언마운트될 때 필요한 작업을 처리할 때

<br>

### useReducer : 

[useReducer란?](https://despiteallthat.tistory.com/183)

useReducer는 React 컴포넌트에서 상태(state)를 다루는 또 다른 Hook입니다.
useReducer는 useState와 비슷하게 상태를 변경할 수 있지만, 좀 더 복잡한 로직을 다룰 수 있습니다.
useReducer는 상태와 액션(action)을 받아서, 새로운 상태를 반환하는 리듀서 함수를 이용합니다.


useReducer는 다음과 같은 상황에서 사용합니다.

- 복잡한 상태 로직을 다룰 때
- 여러 개의 연관된 상태를 함께 다룰 때
- 컴포넌트의 상태 업데이트 로직을 다른 파일로 분리하고 싶을 때

<br>

### useState vs useReducer:

- useState는 간단한 상태 로직을 다루기에 적합합니다.
- useReducer는 좀 더 복잡한 상태 로직을 다룰 수 있습니다.
- useState는 상태를 업데이트할 때 이전 상태를 덮어쓰는 반면, useReducer는 이전 상태를 변경하지 않고, 새로운 상태를 생성합니다.
- useState는 한 개의 상태만 다룰 수 있지만, useReducer는 여러 개의 연관된 상태를 함께 다룰 수 있습니다.
- useState는 컴포넌트 내부에서 상태를 다루지만, useReducer는 다른 파일에서 리듀서 함수를 정의하여 상태를 다룰 수 있습니다.

<br>

### useContext 

useContext는 React 컴포넌트에서 전역적으로 사용할 수 있는 상태(state)를 다루는 Hook입니다.
useContext는 createContext 함수를 이용하여 상태를 생성하고, 해당 상태를 여러 컴포넌트에서 사용할 수 있습니다.
useContext를 사용하면, 상태를 전달하는 Props의 계층 구조를 깊게 만들지 않아도 됩니다

useContext는 다음과 같은 상황에서 사용합니다.
- 여러 컴포넌트에서 공유할 상태를 다룰 때
- 상태를 전달하는 Props의 계층 구조를 깊게 만들고 싶지 않을 때


useContext 사용법 

1. createContext 함수를 이요하여 상태를 생성합니다.

```javascript
const MyContext = React.createContext(defaultValue);
```

2. Provider 컴포넌트를 이용하여 상태를 전달합니다.

```javascript
<MyContext.Provider value={/* 상태 */}>
  {/* 하위 컴포넌트 */}
</MyContext.Provider>
```

3. useContext Hook을 이용하여 상태를 사용합니다.

```javascript
const value = useContext(MyContext);
```

- useContext는 매개변수로 상태를 받아서, 해당 상태를 반환합니다.
- 만약 해당 상태가 Provider 컴포넌트에서 제공되지 않았을 경우, createContext 함수에서 설정한 defaultValue를 반환합니다.