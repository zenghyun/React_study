# React

## [React](https://despiteallthat.tistory.com/category/React)

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

### useContext :

[useContext란?](https://despiteallthat.tistory.com/184)

useContext는 React 컴포넌트에서 전역적으로 사용할 수 있는 상태(state)를 다루는 Hook입니다.
useContext는 createContext 함수를 이용하여 상태를 생성하고, 해당 상태를 여러 컴포넌트에서 사용할 수 있습니다.
useContext를 사용하면, 상태를 전달하는 Props의 계층 구조를 깊게 만들지 않아도 됩니다

useContext는 다음과 같은 상황에서 사용합니다.
- 여러 컴포넌트에서 공유할 상태를 다룰 때
- 상태를 전달하는 Props의 계층 구조를 깊게 만들고 싶지 않을 때


useContext 사용법 

1. createContext 함수를 이용하여 상태를 생성합니다.

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

<br>

### useMemo :

useMemo는 React 컴포넌트에서 계산 비용이 큰 연산을 최적화하는 데 사용되는 Hook입니다.
useMemo는 이전에 계산된 값을 기억하고, 해당 값이 변경되지 않은 경우에는 이전 값을 재사용합니다.

useMemo는 다음과 같은 상황에서 사용합니다.
- 계산 비용이 큰 연산을 수행할 때
- 연산 결과가 동일한 경우에는 이전 결과를 재사용하고 싶을 때

**useMemo 사용법**

```javascript
const memoizedValue = useMemo(() => {
  // 계산 비용이 큰 연산 수행
  return calculatedValue;
}, [dependencyArray]);

```

- useMemo는 매개변수로 콜백 함수와 의존성 배열(dependencyArray)을 받습니다.
- 콜백 함수는 useMemo가 최적화 할 연산을 수행하고, 해당 연산의 결과를 반환합니다.
- <mark>의존성 배열은 useMemo가 해당 배열에 포함된 값들이 변경되었을 때에만 연산을 다시 수행하도록 합니다.</mark>

<br>

### useCallback : 

useCallback은 React 컴포넌트에서 함수를 메모이제이션하여 성능을 최적화하는 데 사용되는 Hook입니다.
useCallback은 이전에 생성된 함수를 기억하고, 해당 함수를 재사용합니다.

useCallback은 다음과 같은 상황에서 사용합니다.

- 자식 컴포넌트에 전달하는 함수가 불필요하게 재생성되는 것을 방지하고 싶을 때
- 렌더링이 자주 발생하는 컴포넌트에서 함수를 최적화하고 싶을 때

**useCallback 사용법**

```javascript
const memoizedCallback = useCallback(() => {
  // 함수 로직
}, [dependencyArray]);

```

- useCallback은 매개변수로 콜백 함수와 의존성 배열(dependencyArray)을 받습니다.
- 콜백 함수는 useCallback이 메모이제이션할 함수를 정의하고, 해당 함수를 반환합니다.
- 의존성 배열은 useCallback이 해당 배열에 포함된 값들이 변경되었을 때에만 새로운 함수를 생성하도록 합니다.

<br>

### useMemo vs useCallback 

<br>

- useMemo는 계산 비용이 큰 연산의 결과를 메모이제이션하여 재사용하고, useCallback은 함수를 메모이제이션하여 재사용합니다.
- useMemo는 연산 결과를 반환하고, useCallback은 함수를 반환합니다.
- useMemo는 값을 메모이제이션하고, useCallback은 함수를 메모이제이션합니다.
- useMemo는 값을 계산하는 로직을 콜백 함수에 작성하고, useCallback은 함수를 생성하는 로직을 콜백 함수에 작성합니다.
- useMemo는 계산 비용이 큰 연산을 최적화하는 데 사용됩니다. 예를 들어, 배열이나 객체와 같은 큰 데이터를 가공하거나 복잡한 계산을 수행하는 경우에 사용됩니다.
- useCallback은 자주 렌더링되는 컴포넌트에서 함수를 최적화하고, 불필요한 함수 재생성을 방지하는 데 사용됩니다. 예를 들어, 자식 컴포넌트에 전달되는 콜백 함수를 최적화하고 싶은 경우에 사용됩니다.
- 의존성 배열(dependencyArray)을 사용하여 어떤 값이 변경되었을 때에만 메모이제이션된 값이나 함수를 갱신하도록 설정할 수 있습니다. 이를 통해 불필요한 갱신을 방지하고, 성능을 향상시킬 수 있습니다.
- useMemo와 useCallback은 렌더링 결과에 영향을 주지 않는 경우에는 불필요한 메모이제이션을 방지하고, 최적화를 위해 사용되어야 합니다.
- useMemo와 useCallback은 성능 최적화를 위한 강력한 도구로 사용되며, 필요에 따라 적절하게 사용하여 React 애플리케이션의 성능을 향상시킬 수 있습니다.