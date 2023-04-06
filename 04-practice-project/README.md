## React에서 label 태그에 for 사용하는 방법


React는 친절하다?
 리액트에서 input에 연결시킬 <label> 태그에 for 속성을 넣었더니 다음과 같은 에러가 발생했다.

 친절하게도 에러문에 해결법이 적혀있는데, for 대신 'htmlFor'  을 넣으면 문제가 해결된다.

 ```html
 <label htmlFor="name">이름 :</label>
<input id="name" type="text" />
 ```

 
 