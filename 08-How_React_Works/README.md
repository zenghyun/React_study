# How Does React Work Behind The Scenes?


## Understanding the Virtual DOM & DOM Updates 

<br>

## Understanding State & State Updates

매번 상태 변경이 되면 컴포넌트의 전체가 재실행되고, 재평가된다. 

변경되는 상태나, props를 가진 컴포넌트는 전체가 재실행됨

**부모 컴포넌트가 재평가되면 자식 컴포넌트도 따라서 재평가된다.**

<br>

## React.memo()

연결된 모든 컴포넌트가 재평가되는 것은 효율적이지 못하기 때문에 재실행을 막아야 한다. 

React.memo()는 함수형 기반의 컴포넌트에만 작동되며, 클래스 기반 컴포넌트의 경우 작동되지 않는다.

React.memo()는 함수형 컴포넌트를 최적화 할 수 있다. 

React.memo()는 인자로 들어간 이 컴포넌트에 어떤 props가 입력되는지 확인하고 입력되는 모든 props의 신규 값을 확인한 뒤 이를 지금의 props의 값과 비교하도록 리액트에게 전달한다. 그리고 props의 값이 바뀐 경우에만 컴포넌트를 재실행 및 재평가하게 된다.

즉, 부모 컴포넌트가 변경되었지만 그 컴포넌트의 props 값이 바뀌지 않았다면 컴포넌트 실행은 건너뜁니다. 

이렇게 React.memo()를 사용하면 불필요한 재렌더링을 피하기 위해서 최적화가 이루어집니다. 

하지만, React.memo()를 모든 컴포넌트에 적용시키지 않는 이유는 개별적인 성능 비용이 필요하기 때문입니다. 따라서, 이 성능 효율은 어떤 컴포넌트를 최적화하느냐에 따라 달라지게 됩니다. 

컴포넌트를 재평가하는 데에 필요한 성능 비용과 props를 비교하는 성능 비용을 서로 맞바꾸는 것 입니다. 

<br>

## 📌 중요!!! 

<br>

**App.js**

```javascript
import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

```
<br>

**Button.js**

```javascript
import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('BUTTON RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

```

<br>
App.js에서 Button의 경우 props의 변화가 없기 때문에 재렌더링 될 이유가 없어보이지만, 막상 실행해보면 항상 재렌더링이 되고 있습니다. 

그 이유는 **toggleParagraphHandler** 때문입니다. 

우선, App 함수가 실행될 때마다 만들어지는 함수는 모두 새로운 함수입니다. 즉, Button에서 props 상의 변화는 없지만, **toggleParagraphHandler** 는 매번 새롭게 만들어지는 함수입니다. 


React.memo()는 이전의 props 값과 현재 props 값의 비교는 이해하기 쉽게 얘기하면 다음과 같습니다.

<br>

```javascript
props.show === props.previous.show 
```

이는 이해를 위해 적은 공식이지 실제로 이렇게 평가되지는 않습니다. 

하지만, 여기서 알 수 있는 점은 현재 props와 이전의 props가 같은지 비교를 하고 있다는 것 입니다. 

만약 props가 함수나 배열, 객체 같은 것이 아닌 원시 값으로 이루어져 있으면 

예를 들어

```javascript
false === false
```
예전에 만들어진 false와 현재 만들어진 false는 다른 false이지만 값을 비교하는 데 있어 원시 값이기 때문에 **true**와 같습니다. 

하지만 함수나 배열 객체의 경우는  

예를 들어

```javascript
 function1 === function1 
```

자바스크립트에서 함수는 하나의 객체에 불과합니다. 이 App 함수가 실행될 때마다 새로운 함수 객체가 생성 되고 이 함수 객체가 onClick props에 전달 됩니다. 이렇게 되면, 버튼은 props.onClick과 props.previous.onClick를 비교하는 셈이 됩니다. 

그리고 이 두 함수 객체는 같은 내용을 갖고 있다 해도 자바스크립트에서 이 둘을 비교하면 결코 동일하지 않습니다. 

따라서, React.memo는 자바스크립트의 이러한 작동방식 때문에 값이 변경되었다고 인식하게 됩니다. 

그렇다면 React.memo는 props를 통한 객체나 배열 또는 함수를 가져오는 컴포넌트에는 사용할 수 없는 걸까요? 

다행히 그렇지 않습니다.


### useCallback 

useCallback 훅은 기본적으로 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 훅으로 리액트에, 매번 실행될 때마다 이 함수를 재생성할 필요가 없다는 걸 알릴 수 있습니다. 

```javascript
import React, { useState, useCallback } from 'react';
// 생략
const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  },[]);
// 생략
 <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>

```

useCallback에 첫 번째 인자에 함수를 전달하고 두 번째 인자에 배열을 전달합니다. 

useCallback은 첫 번째 인자에 전달된 함수를 반환해주고 이 App 함수가 다시 실행되면 useCallback이 리액트가 저장한 함수를 찾아서 그 같은 함수 객체를 재사용합니다. 

따라서, 어떤 함수가 절대 변경되어서는 안된다면 이 useCallback을 사용해 함수를 저장하면 됩니다.

두 번째 인자는 배열이어야 합니다 useCallback 호출에 대한 의존성 배열이죠

이 의존성은 useEffect와 같은 것을 의미합니다 함수를 감싼 컴포넌트로부터 전달받는 모든 것을 사용할 수 있습니다

즉, 상태나 props, 컨텍스트를 지정할 수 있습니다.

여기서 []에 지정된 상태나 props는 값의 변경을 허용해줍니다. 

```javascript
import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  },[allowToggle]);
  
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

 

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

```

여기서 []에 들어가 있는 allowToggle는 외부의 변경되는 값을 받아올 수 있습니다. 