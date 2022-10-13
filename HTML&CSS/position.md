# CSS - position 속성
- css의 포지션 속성에 대해 정리한다.

---

## 1.3. 화면배치 - position 속성

| 속성값 | 지정 방식 | 의미 |
| --- | --- | --- |
| absolute | 절대위치 | 상위 부모 엘리먼트를 기준으로 위치 지정.<br>상위 박스 위치가 바뀌면 따라서 위치가 이동된다.<br>다른 박스와 독립적이며 다른 박스와 중첩이 가능하다. |
| fixed | 고정 위치 | 웹 브라우저 창을 기준으로 위치 지정.<br>페이지 안의 다른 박스와 독립적이며 중첩 가능하다. |
| static | 정적 위치 | 웹 문서에 나열된 엘리먼트 순으로 위치 지정.<br>다른 박스와의 앞뒤 순서 관계를 유지하며 중첩이 불가능하다.<br>표시 후 이동 불가 |
| relative | 상대 위치 | 엘리먼트 자신의 원래 정적 위치를 기준으로 상대적인 위치 지정<br>다른 박스와 독립적 |
| float : left/right | 유동 위치 | 컨테이너의 왼쪽 또는 오른쪽에 요소를 배치하여 텍스트 및 인라인 요소가 주위를 둘러 쌀 수 있도록 한다. |

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa8ea1c58-5d94-47bc-b7cd-c184835849bd%2FUntitled.png?table=block&id=5dd3eeed-5d87-47c8-8e24-0dcb12789032&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=670&userId=&cache=v2)

### 1.3.1. 예제

- **예제1**

```css
<style>
    div{
        background-color: beige;
        width:70px;
    }
</style>
```

```html
<body>
    <p>position - static, relative, absolute, fixed</p>
    <div style="position: static;">static</div>
    <div style="position: relative; left:50px; top:30px">relative</div>
    <div style="position: absolute; left:150px; top:100px">absolute</div>
    <div style="position: fixed; left:300px; top:100px">fixed</div>

    
    <div style="height:5000px; background-color: white;"></div>
</body>
```

![Honeycam 2022-10-12 14-52-54.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f883a8e1-003c-45c2-b4e7-554ddc6daff1/Honeycam_2022-10-12_14-52-54.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221012T083317Z&X-Amz-Expires=86400&X-Amz-Signature=4867b83f47414fbbba8b273ee88f28da6b03d703f0ae510f6f0eaa531ff9dd59&X-Amz-SignedHeaders=host&x-id=GetObject)

- **예제2**

```css
<style>
    div{
        width:160px;
        height:160px;
        background: blue;
        text-align: center;
    }
</style>
```

```html
<body>
    <p>absolute는 static이 아닌 첫 부모를 기준으로 둔다</p>
    <div style="
            position:relative;
            left:100px;
            top:10px">
        <div style="
                position:absolute; 
                width:50px; 
                height:50px; 
                background: red;
                bottom:0px;
                right:0px;
                ">
                abs div
            </div>
    </div>
</body>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6d24ac2-ecd3-4339-ada8-3b79c1996e14%2FUntitled.png?table=block&id=97e2ba19-330c-4ca2-80c8-df3d9bbee443&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=670&userId=&cache=v2)
