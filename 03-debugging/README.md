### react에서는 하나의 root파일만 생성할 수 있다. 

즉 , 
```javascript
   return (
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>

  );
```
과 같은 요소들의 나열은 불가능하다. 

```
Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? 
```
위와 같은 에러 발생 

```javascript
return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>

  );
```

위와 같이 전체 요소를 감싸는 root tag (여기서는 div)가 있어야 한다.