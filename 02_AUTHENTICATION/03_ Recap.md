# 03_ Recap

`input` 은 `onChange` 와 `value` 를 가지고 있다. 

2개의 useState는 각각 `email` 과 `password` 을 위한 것이다. 

✔ Hooks의 역할을 반드시 알아야한다. 

✔ 값이 바뀔 때마다 `onChange` 을 사용한다

```js
const onChange = (event) => {
```

> 여기서 event 의 뜻은 
>
> '무슨 일이 일어났는가?' 를 뜻한다.  (여기서는 input이 변경된 것이다.)

```js
        const {
            target: { name, value },
        } = event;
```

> 그리고 event로 부터 많은 정보를 받아올 수 있다. 
>
> 그 중 하나의 정보가 target이다. 
>
> 여기서 tartget는 변경이 일어난 부분이다. 
>
> 그리고 tartget 안에는 name과 value가 들어있다. 
>
> `name` : 내가 부여한 값 
>
> `value` : 키보드를 통해 입력된 값

```js
if ( name === "email" ) {
```

> `name`   이 `email` 과 같으면 

```js
setEmail(value);
```

> state인 email을 변경하는 것이다.  그리고 value 값을 이용한다. 
>
> 그 외의 경우에는 state인 password를 변경하게 되는 것이다. 
>
> ```js
>  }else if (name === "password") {
>             setPassword(value);
> ```



---

* ##### 기본적으로 input을 변경할 때마다 onChange function을 호출하게 되는 것이다. 

* ##### 그리고 onChange function 은 내가 input에 입력한 값들을 토대로 저장한다. 

* ##### input은 절대로 letter를 추가하지 않는다 value를 받아오는 것이다. 

* ##### 만약 input에 value가 없으면 어떤것이든 타이핑하고자할 때 작동하지 않는다. 

* ##### input의 value는 state에 저장된다. 

* ##### input 이 바뀌는 모든 순간마다 state도 바뀌게 된다. 

---



### 🐇  event listener를 만든 이유 

> HTML를 사용해서 form을 submit 하는 모든 순간에 새로고침이 되어버린다. 
>
> 새로고침이 되는 순간마다 React 코드들 또한 사라져 버린다. (state도 마찬가지)
>
> 그래서 event listener를 만든 이유이다. 



```js
event.preventDfault();
```

> * preventDfault : 기본 행위가 실행되는 걸 원하지 않을 때 사용 (내가 컨트롤 할 수 있게 하기)



