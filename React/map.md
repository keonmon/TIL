# React - `map()` 맵 순회하기
- 리액트에서 반복된 컴포넌트를 보여줄 때 활용할 수 있는 map() 함수에 대해 학습하고 정리한다.
---

## React → `map()`

- 배열 및 객체, json 타입 요소의 개수만큼 반복한 **callBack함수의 결과**대로 새로운 배열을 만들어낸다.

```jsx
arr.map(callbackFunction(currentValue, index, array), thisArg);
```

- 따라서, **반복되는 컴포넌트를 렌더링**할 때 사용하기 용이하다.

```jsx
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
console.log(result);
/*
		[1, 4, 9, 16, 25]
*/

// -------------

const iterationSample = () => {
		const names = ["눈사람", "얼음", "눈", "바람"];
	  const nameList = names.map((name) => (
			  <li>{name}</li>
	  ));
	  return <ul>{nameList}</ul>;
};

export default iterationSample;
/*
		눈사람
		얼음
		눈
		바람
*/
```

- 리액트에서 `map()`으로 렌더링 시, **첫 엘리먼트에 key속성을 추가**해야 한다.
    - 단 **key는 유일값**이여야하며, index를 넣는 것은 anti pattern이므로 지양한다.

```jsx
function mission5(){
		const data = {
		    ... ,
		    "movies" : [
		        {
		            "title" : "우리가 말하지 않은 것",
		            "posterImg" : img1,
		            "link" : "https://movie.naver.com/movie/bi/mi/basic.naver?code=198319"
		        },
		        {
		            "title" : "리미트",
		            "posterImg" : img2,
		            "link" : "https://movie.naver.com/movie/bi/mi/basic.naver?code=193324"
		        },
		        {
		            "title" : "시맨틱 에러: 더 무비",
		            "posterImg" : img3,
		            "link" : "https://movie.naver.com/movie/bi/mi/basic.naver?code=213415"
		        }
		    ],
		    ...
		}
		
		const getList = data.movies.map((movie,index) =>(

		    <tr key={movie.title}>
		        <a href={movie.link} target="_blank">
		            <td><img src={movie.posterImg} width="40"/></td>
		            <td>{movie.title} </td>
		        </a>
		    </tr>

		));
		
		return(
		    <div>
		        ...
		        <table>
		            <tbody>
		                {getList}
		            </tbody>
		        </table>
		        ...
		    </div>
		);
}
export default mission5;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0869e8ab-eaaf-4b55-8899-0be1c8bab566%2FUntitled.png?table=block&id=47955e79-d30d-4935-a0b4-d2ef4ffad024&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=530&userId=&cache=v2)
)
