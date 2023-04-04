## 섹션 1 리액트 컴포넌트 스타일링
<br>

**css를 동적으로 관리하는 법**


```javascript
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isVaild, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isVaild ? 'red' : 'black'}}>Course Goal</label>
        <input style={{ borderColor: !isVaild ? 'red' : '#ccc', background: !isVaild ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

```

위의 코드에서는 **input** 안에 아무것도 적지 않으면, **label**과 **input**의 색상이 red로 변경되어 나온다. 

하지만 이 경우 css 인라인 스타일이 우선순위로 지정되며, 동적인 스타일 지정이 되지 않는다. 

이럴 경우 

```javascript
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isVaild, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isVaild ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

```

다음과 같이 변경해주면 동적인 스타일 지정이 가능하다. 

<br>

## css
```css
.form-control.invalid input {
  border-color: red;
  background-color: #ffd7d7;
}

.form-control.invalid label {
  color: red;
}
```

## 섹션 2 Styled Component 

<br>

**Styled component 사용하기**
<br>

### [ Styled Component ]

<br>
React, Vue, Angular와 같은 라이브러리, 프레임워크가 인기를 끌면서 재활용 가능한 컴포넌트 기반 개발이 주류가 되고 있습니다. 여러 컴포넌트로 분리하고, 각 컴포넌트에 HTML, CSS, JavaScript를 모두 담는 코드를 많이 사용하고 있습니다. React는 이미 JSX를 통해 HTML을 포함하고 있고, Styled Component 라이브러리를 사용하여 CSS를 JavaScript에 삽입할 수 있습니다.

<br>

### [ 설치 방법 ]
<br>

```
npm install --save styled-components
```
<br>

### [ SASS는 불충분한가? ]
<br>

- CSS 클래스명에 대한 고민 문제
- 가이드가 없으면 복잡해지는 구조
- 방대한 스타일 정보로 인한 스크롤 지옥
- CSS 클래스 조건부 스타일링
- 동적인 변화 표현에 한계

<br>

그렇다고 Inline Style을 사용하자니 우선순위의 문제, HTML 파일의 부피 증가, CSS 역할 분리가 모호함, media query, key frame, Pseudo selector 사용 불가 등의 문제가 있습니다.


### [ Styled-components란? ]
<br>

CSS in JavaScript 기술로, JavaScript내에 CSS를 작성하는 라이브러리
스타일 정의를 CSS파일이 아닌 JavaScript로 작성된 컴포넌트에 바로 삽입하는 스타일 기법
클래스명을 해시값으로 자동 생성하고, 클래스명 오염을 방지할 수 있음
자바스크립트의 동적인 값들을 온전하게 사용이 가능


### 사용 예시 

```javascript
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';



const FormControl = styled.div` 
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.inValid ? 'red' : 'black')};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.inValid ? 'red' : '#ccc')}; 
  background-color: ${props => (props.inValid ? '#ffd7d7' : 'transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isVaild, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl inValid={!isVaild}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

```


## 섹션 3 CSS Module 사용하기 

<br>

### **기본 사용법**

<br>

```javascript
import React from "react";

import styles from './Button.module.css';

const Button1 = props => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}> 
            {props.children}
        </button>
    );
}

export default Button1;
```

1. 기존의 css 파일명을 기존파일명.css 에서 기존파일명.moudle.css로 바꿔준다. 

2. **import styles from './Button.module.css'** 와 같이 import한다. 

3. 내가 사용할 style을 가질 요소의 **className**에 **styles.??**와 같이 입력한다. 

<br>

### **동적으로 사용하기**

<br>

```javascript
import React, {useState} from "react";

import Button1 from "../../UI/Button/Button1";
import styles from './CourseInput.module.css';

const CourseInput1 = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if(event.target.value.trim().length > 0){
            setIsValid(true);
          }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
          }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button1 type="submit">Add Goal</Button1>
        </form>
    );
};

export default CourseInput1;



```

**const [isValid, setIsValid] = useState(true);**
<br><br>
 **<div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>** 와 같이 사용하면 동적으로 이용할 수 있다. 