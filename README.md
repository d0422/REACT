# REACT
### 리액트 부시기
# REACT

# 왜 사용하는가?

리액트는 웹사이트에 상호작용성을 부여한다.

### 백틱(`)

``텍스트 ${변수}``의 형식으로 사용할 수 있다.

# REACT import

```jsx
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

상단의 React JS는 엔진과 같음 interactive한 UI를 만들 수 있게 함

하단의 React Dom은 react element를 html dom에 둘 수 있게 함

# REACT 요소 만들기

```jsx
const span=React.createElement("tagname",{property: id or class style:{}, 내용});
```

“span”와 같이 태그 이름과 똑같은 이름을 사용해야 한다.

property에 이벤트 리스너를 등록할 수도 있다.

# REACT 특성

HTML, Javascript는 HTML에 있는 것을 가져와서 바꾸지만

리액트는 객체를 먼저 만들고, HTML에 반영함

# BABEL을 이용한 REACT 요소 생성(JSX)

```jsx
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
```

위와 같이 코드를 작성하면 요소 생성을 아래와 같이 할 수 있음

```jsx
const Button = (
      <button
        style={{
          backgroundColor: "tomato",
        }}
        onClick={() => console.log("im clicked")}
      >
        Click me
      </button>
    );
```

Babel이 코드를 받아서 변환시켜서 head에 넘겨줌

# 요소를 함수화하기

```jsx
const Button = (
      <button
        style={{
          backgroundColor: "tomato",
        }}
        onClick={() => console.log("im clicked")}
      >
        Click me
      </button>
    );
```

위와같이 생성한 요소를 아래와 같이 함수화 시킬 수 있다.

```jsx
const Button = () => (
      <button
        style={{
          backgroundColor: "tomato",
        }}
        onClick={() => console.log("im clicked")}
      >
        Click me
      </button>
    );
```

에로우 펑션 말고도 그냥 function을 써서 할 수 있다.

```jsx
function Title() {
      return (
        <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
          HELLO
        </h3>
      );
```

랜더링 시에, container의 요소에 담을 때에는 첫 글자를 반드시 대문자로 쓴다.

모듈화를 쉽게 할 수 있다.

```jsx
const container = (
      <div>
        <Title />
        <Button />
      </div>
    );
    ReactDOM.render(container, root);
```

소문자로 시작할 경우, HTML 태그로 받아들이게 된다.

직접 만든 요소는 무조건 대문자로 시작해야한다.

# 변수전달

```jsx
let counter=0;
const root= document.getElementById('root');
const Container =()=> (
<div>
<h3>TOTAL CLICKS : {counter}</h3>
</div>
);
ReactDOM.render(<Container/>, root>
```

함수 등록

```jsx
function countup(){
	counter++;
}
<button onClick={countup}>Clickme</button>
ReactDOM.render(<Container />, root);
```

이런 방식으로 하게 되면 counter값은 증가하나, ReactDOM.render함수는 한번만 실행되기 때문에 브라우저에 업데이트가 일어나지 않는다.

따라서 아래와 같이 코딩한다.

```jsx
function countup(){
	counter++;
}
<button onClick={countup}>Clickme</button>
ReactDOM.render(<Container />, root);
```

함수로 선언하는 경우

```jsx
function countup() {
      counter = counter + 1;
      render();
}
function render() {
      ReactDOM.render(<Container />, root);
}
```

하지만 변수값이 바뀔때마다 업데이트 해주어야하기 때문에 불편하다.

# 리액트와 바닐라 JS의 차이

JS에 의해 업데이트 되는 요소는 body태그와 해당 태그를 포함한 모든 태그를 html에서 변경하지만, REACT의 경우, 변수값만 업데이트된다. 즉, 변경된 값만 업데이트한다.

# React.useState

```jsx
const data = React.useState();
console.log(data);
```

반환 값은 [undefined,f]이라는 배열이다.

⇒ undefined 값이 초기값이고, f는 data를 바꿀때 사용하는 함수이다.

초기값은 React.userState(초기값);과 같이 선언한다.

### JS에서 배열 요소에 이름으로 할당하기

```jsx
const [alias1, alias2,...]=array;
```

따라서 다음과 같이 사용한다.

```jsx
function APP() {
      const [counter, setcounter] = React.useState(0);
      const onClick = () => {
        setcounter(counter + 1);
      };

      return (
        <div>
          <h3>TOTAL CLICKS : {counter}</h3>
          <button onClick={onClick}>Click me</button>
        </div>
      );
    }
```

# State 설정

1. 직접 할당

```jsx
setcounter(counter+1);
```

1. 함수로 할당

```jsx
setcounter((current)=>current+1);
```

### 두가지 방식의 차이점

```jsx
const onClick = () => {
        setcounter(counter + 1);
        setcounter(counter + 1);
        setcounter(counter + 1);
        setcounter(counter + 1);
        setcounter(counter + 1);
}
```

이렇게 했을경우 setcounter함수는 counter의 초기값만을 불러오기 때문에 클릭할 경우 1씩 증가한다.

```jsx
const onClick = () => {
        setcounter((current) => current + 1);
        setcounter((current) => current + 1);
        setcounter((current) => current + 1);
      };
```

함수로 호출했을 경우, setcounter는 counter의 값을 바꿔주기때문에 3씩증가하는 것을 확인할 수 있다.

return x+1; 과 return  x++;로 이해하면 될것 같다.

# JSX와 HTML의 차이

1. label for → laberl htmlFor
2. class → className

# event 인수

⇒ 함수에 event 인수를 넘기면 event 내용에 접근할 수 있다.

React의 경우, event.target.value를 통해서 input의 내용에 접근할 수 있다.

```jsx
function APP() {
      const [minutes, setMinutes] = React.useState(0);
      const onChange = (event) => {
        setMinutes(event.target.value);
      };
      return (
        <div>
          <h1>SUPER CONVERTER</h1>
          <h2>바꾸려는 값 : {minutes}</h2>
          <label value={minutes} htmlFor="minutes">
            Minutes
          </label>
          <input
            id="minutes"
            placeholder="minutes"
            type="number"
            onChange={onChange}
          />
          <label htmlFor="hours">Hours</label>
          <input id="hours" placeholder="hours" type="number" />
        </div>
      );
    }
```

위 코드에서 onChange라는 함수가 필요한 이유는 input의 event를 받아와서, 그 중에서 값을 골라서 setMinutes 함수에 넘겨줘야 하기때문이다.

onChange={setMinutes(event.target.value)를 할 경우 event가 없기때문에 오류가 발생하게 된다. 

### input 태그

disabled → input에 입력불가

value → 기본으로 보이게 할 값

# Flipped State 활용

```jsx
const [flipped, setFlipped] = React.useState(false);
const onFlip = () => {
        reset();
        setFlipped((current) => !current);
};
```

위와 같이 하여 flipped라는 변수가 누를때마다 바뀌도록 설정한다. current를 쓰지 않으면 바뀐 값이 flipped에 저장되지 않는다.

```jsx
// hour
<input
              value={flipped ? amount : Math.round(amount / 60)}
              id="hours"
              placeholder="hours"
              type="number"
              disabled={!flipped}
              onChange={onChange}
/>
// minutes
<input
              value={flipped ? amount * 60 : amount}
              // input 외부에서도 value를 변경해주기 위해 등록
              id="minutes"
              placeholder="minutes"
              type="number"
              onChange={onChange}
              disabled={flipped}
            />
```

hour의 경우, flipped가 True이면 입력값을, False이면 60으로 나눈 값을 출력하고, disabled 를 !flipped로 설정하여 input에 입력할 수 없을때, 값을 출력하도록 했다. miniute는 반대다.

# HTML요소 모듈화하기

같은 양식의 버튼을 여러번 쓰는 경우, 버튼을 함수화 하여 쓸 수 있다.

다만, 그 내용이 다를 수 있다. 이때, rendering 하는 부분에서 인자를 넘겨주어서, 인자에 접근해 내용을 바꿔줄 수 있다.

```jsx
function Btn(props) {
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
          }}
        >
          {props.text}
        </button>
      );
    }
function APP() {
      return (
        <div>
          <Btn text="Save Changes" />
          <Btn text="Continue" />
        </div>
      );
    }
```

위의 코드에서 보면 APP의 <Btn text=””/>를 통해서 text를 넘겨주고있다.

이를 Btn함수는 props라는 인자로 받게되는데, props라는 인자 내부의 text라는 요소가 생성되어, 넘겨받게 된다. 

따라서 props.text의 형식으로 인자를 받아서 내용을 바꿔줄 수 있다.

또한, props로 받지 않아도, {text}의 형식으로 받을 수 있다.

```jsx
function Btn({text}) {
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
          }}
        >
          {text}
        </button>
      );
    }
```

{}안에 여러 인자를 받아서 활용할 수도 있다.

```jsx
function Btn({ text, big }) {
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: big ? 30 : 16,
          }}
        >
          {text}
        </button>
      );
    }
```

그리고, 인자가 없는 경우, 즉 디폴트 값도 줄 수 있다.

```jsx
function Btn({ text = "default", changeValue }) {
      // Btn에서 onClick을 함수 인자로 받아 setValue를 실행시킴
      return (
        <button
          onClick={changeValue}
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
          }}
        >
          {text}
        </button>
      );
    }
```

이렇게 코딩하면, text인자가 없는 경우 default라는 버튼을 생성하게 된다.

### 함수를 인자로 담아서 보낼 수도 있다.

```jsx
function APP() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Change");

      return (
        <div>
          <Btn text={value} changeValue={changeValue} />
          <Btn text="Continue" />
        </div>
      );
    }
```

APP의 상태에 를 changeValue라는 props에 함수형태로 담아서 보낸다. 그러나 이것은 인자에 불과하기 때문에, 함수부분에서 changeVlaue를 받아서 실질적인 이벤트리스너를 달아줘야 한다.

```jsx
function Btn({ text, changeValue }) {
      // Btn에서 onClick을 함수 인자로 받아 setValue를 실행시킴
      return (
        <button
          onClick={changeValue}
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
          }}
        >
          {text}
        </button>
      );
    }
```

onClick을 통해 이벤트 리스너를 달아준 모습이다.

# REACT MEMO

위의 코드에서 value state에 따라 바뀌는 것은 하나의 버튼 뿐이다.

그러나 state가 변해서 return하는 모든 html요소를 rerender하게 되는데, 이러면 대량의 사이트를 만들 때, 많은 부분이 rerender되면서 렉을 유발할 수도 있을 것이다. 그래서 react.memo()를 통해 부분렌더링을 구현한다.

```jsx
const MemorizedBtn = React.memo(Btn);
function APP() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Change");

      return (
        <div>
          <MemorizedBtn text={value} changeValue={changeValue} />
          <MemorizedBtn text="Continue" />
        </div>
      );
    }
```

이런 식으로 버튼을 렌더링 하면 위의 changeValue가 있는 버튼만 rerendering 되게 된다.
# npm

⇒ React 개발하는데 자동완성이나, 기본적인 폴더 툴을 제공하며, import를 통해 각 js파일을 모듈화시켜서 사용할 수 있게 함

127.0.0.1:3000을 통해 사이트 접속 가능함

npm start로 열기 가능

### CSS등록

name.module.css가 있는 경우 아래와 같이 사용 가능함

```jsx
import styles from "./App.module.css";
function App() {
  return (
    <div >
      <h1 className={styles.title}>welcome to react!</h1>
      <Button text={"Continue!!!!"}/>
    </div>
  );
}
```

이렇게 하면 css파일 역시 모듈화가 이뤄져서 재사용이 가능해짐!!